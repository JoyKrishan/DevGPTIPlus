import os
os.environ["CUDA_DEVICE_ORDER"] = "PCI_BUS_ID"
os.environ["CUDA_VISIBLE_DEVICES"] = "0,1,2,3"
os.environ['TOKENIZERS_PARALLELISM'] = 'false'
os.environ['PYTORCH_CUDA_ALLOC_CONF'] = 'expandable_segments:True'
import socket
import pymongo
import pandas as pd
import torch
from sentence_transformers import SentenceTransformer
from transformers import file_utils

from sklearn.feature_extraction.text import CountVectorizer
from sklearn.feature_extraction import text

from bertopic import BERTopic
from bertopic.representation import KeyBERTInspired, MaximalMarginalRelevance
from umap import UMAP
import torch


ADDTIONAL_STOPWORDS = ['the', 'of', 'and', 'to', '\n', 'for', 'in', 'this', 'it', 'if', 'type', 'is', 'debugger', 'public', 'use', 'while', 'in', 'let', 'const', 'python38 frame', 'new', 'toJSON', 'bind', 'que', 'object', 'case', 'instanceOf', 'false', 'javascript', 'c++', 'dirxml', 
                    'null', 'if', 'length', 'void', 'var', 'delete', 'user', 'typescript', 'true', 'constructor', 'name', 'taxamount', 'java', 'default', 'from', 'toString', 'por', 'continue', 'using', 
                    'localisablestring', 'has', 'of', 'para', 'function', 'tu', 'property', 'for', 'method', 'temp', 'try', 'else', 'descripteurs', 'typeof', 'return', 'prototype', 'int', 'instanceof', 'se', 'dir', 
                    'switch', 'code', 'group', 'do', 'en', 'callee', 'apply', 'private', 'catch', 'python38', 'double', 'hasOwn', 'with', 'arguments', 'class', 'valueOf', 'python', 'data', 'satisfied', 'la', 'bool', 
                    'table', 'array', 'extends', 'throw', 'break', 'isPrototypeOf', 'call', 'as', 'number', 'super', 'los', 'float', 'Symbol', 'await', 'file', 'el', 'c#', 'static', 'None', 'yield', 'export', 
                    'toLocaleString', 'async', 'yield*', 'toSource', 'caller', 'html', 'string', 'import', 'del', 'id', 'finally', 'propertyIsEnumerable', "dstablediffusionwebunivenvlibsitepackages", 'att','una','des','como',
                    'las','och','si','aplicacin','uma','thematique']


def assert_check_cache_file():
    u2_filepath = '/u2/users/tdy245/hugging-face/hub'
    assert file_utils.default_cache_path == u2_filepath

def get_connected_to_db():
    hostname = socket.gethostname()
    if hostname == "srlab02":
        myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    else:
        myclient = pymongo.MongoClient("mongodb://10.136.219.134:27017/")   
    mydb = myclient["devgpt_issues"]
    mycol = mydb["Issues_TP_v2"]
    return mydb, mycol


def create_document(mycol):
    documents = []
    print(f"Total Number of Conversations found: {mycol.count_documents({})}")
          
    for x in mycol.find():
        conversations = x['Conversations']
        doc = []
        for conversation in conversations:
            doc.append(conversation['Prompt'])
            doc.append(conversation['Answer'])

        conversation = '\n'.join(doc)
        documents.append(conversation)  
    return documents

def first_1000_words(text):
    return ' '.join(text.split()[:1000])

def create_df_and_remove_duplicates(documents):
    df = pd.DataFrame(documents, columns=['Documents'])
    df['first_1000'] = df['Documents'].apply(first_1000_words)
    df_unique = df.drop_duplicates(subset='first_1000')
    df_unique = df_unique.drop(columns=['first_1000']) 
    df_unique.reset_index(drop=True, inplace=True)
    return df_unique

def create_count_vectorizer_w_wo_add_stopwords(keep_custom_stopwords = True):
    if keep_custom_stopwords == True:
        stop_words = text.ENGLISH_STOP_WORDS.union(ADDTIONAL_STOPWORDS)
    else:
        stop_words = text.ENGLISH_STOP_WORDS
    vectorizer_model = CountVectorizer(ngram_range=(1, 2), stop_words= list(stop_words) if type(stop_words)!=list else stop_words)
    return vectorizer_model


def train_model(docs, embeddings, sentence_model, vectorizer_model):
    umap_model = UMAP(n_neighbors=15, n_components=5, 
                  min_dist=0.0, metric='cosine', random_state=42)
    topic_model = BERTopic(umap_model=umap_model,vectorizer_model=vectorizer_model, embedding_model=sentence_model, verbose=True)
    topics, probs = topic_model.fit_transform(docs, embeddings)
    return topics, probs, topic_model

def predict_topic(topic_model, docs, embeddings):
    return topic_model.transform(docs, embeddings)


def has_outliers(topic_model, df, topics):
    try:
        topic_model.reduce_outliers(df, topics)
        return True
    except ValueError:
        return False

def reduce_outliers(topic_model, documents, topics):
    if has_outliers(topic_model, documents, topics):
        new_topics = topic_model.reduce_outliers(documents, topics, strategy='embeddings')
        return new_topics, topic_model
    else:
        print("No outliers to reduce.")
        return topics, topic_model

def save_topic_model(topic_model, model_name):
    topic_model.save(f"model_dir/topic_model_{model_name}", serialization="safetensors")

def load_topic_model(model_name):
    model_path = f"model_dir/topic_model_{model_name}"
    if not os.path.exists(model_path):
        raise ValueError(f"Model path does not exist: {model_path}")
    topic_model = BERTopic.load(model_path)
    return topic_model

def visualize_documents(df, sentence_model, topic_model, model_name, device):
    if isinstance(sentence_model, torch.nn.DataParallel):
        torch.cuda.empty_cache()
        embeddings = sentence_model.module.encode(df,  show_progress_bar=True, batch_size = 2, device = device)
    else:
        embeddings = sentence_model.encode(df, show_progress_bar=True, device = device)
    
    reduced_embeddings = UMAP(n_neighbors=10, n_components=2, min_dist=0.0, metric='cosine').fit_transform(embeddings)
    fig = topic_model.visualize_documents(df, reduced_embeddings=reduced_embeddings, hide_annotations=True, hide_document_hover=False, custom_labels=True)
    fig.write_image(file = f"docs/figures/{model_name}_documents2.pdf", format="pdf")
    fig.show()

def visualize_barchart(topic_model, model_name):
    fig = topic_model.visualize_barchart(width=220, height=300, top_n_topics=10, n_words=3)
    fig.write_image(file = f"docs/figures/{model_name}_barchart2.pdf", format="pdf")
    fig.show()


if __name__ == "__main__":
    
    assert_check_cache_file()
    mydb, mycol = get_connected_to_db()
    
    docs = create_document(mycol)
    df = create_df_and_remove_duplicates(docs)
    vectorizer_model = create_count_vectorizer_w_wo_add_stopwords()
    device = "cuda" if torch.cuda.is_available() else "cpu"
    
    # sentence_model = SentenceTransformer("dunzhang/stella_en_1.5B_v5", device=device)
    # embeddings = sentence_model.encode(df['Documents'], show_progress_bar=True)

    # topics, probs, topic_model = train_model(df['Documents'], embeddings, sentence_model, vectorizer_model)
    # new_topics, topic_model = reduce_outliers(topic_model, df['Documents'], topics)
    # topic_model.update_topics(df['Documents'], new_topics)
    # predict_topics, _ = predict_topic(topic_model, df['Documents'], embeddings)
      
    # df = pd.DataFrame({"Document": df['Documents'], "Topic": new_topics})
    # df.to_csv("data/rq2/topic_model_V6.csv")
    # model_name = "stellav5"
    # save_topic_model(topic_model,model_name)
    
    # topic_model.get_topic_info().to_csv("data/rq2/topic_info_V2.csv")
    # topic_model.get_document_info(docs, df=df).to_csv("data/rq2/document_info_V2.csv")
    # model_filename = "stella_en_1.5B_v5"
    # topic_model = load_topic_model(model_filename)
    # visualize_documents(df['Documents'], embedding_model, topic_model, model_filename, device)
    # visualize_barchart(topic_model, model_filename)