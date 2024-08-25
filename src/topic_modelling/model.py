import os
os.environ["CUDA_DEVICE_ORDER"] = "PCI_BUS_ID"
os.environ["CUDA_VISIBLE_DEVICES"] = "1,2,3"
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
from umap import UMAP


ADDTIONAL_STOPWORDS = ['type', 'is', 'debugger', 'public', 'use', 'while', 'in', 'let', 'const', 'python38 frame', 'new', 'toJSON', 'bind', 'que', 'object', 'case', 'instanceOf', 'false', 'javascript', 'c++', 'dirxml', 
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
        myclient = pymongo.MongoClient("mongodb://10.136.218.46:27017/")   
    mydb = myclient["devgpt_issues"]
    mycol = mydb["iIssues_TP"]
    return mydb, mycol


def create_document(mycol):
    documents = []
    for x in mycol.find():
        if x['DevGPT']['Mention']['Conversation']: 
            title = x['DevGPT']['Mention']['Conversation']['Title']
            conversation = x['DevGPT']['Mention']['Conversation']['Conversation']
            documents.append(title + ' ' + conversation)  
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

def model_fit_transform(df, vectorizer_model, sentence_model, verbose = False):
    topic_model = BERTopic(embedding_model=sentence_model, vectorizer_model=vectorizer_model, calculate_probabilities=True, verbose=verbose)
    topics, probs = topic_model.fit_transform(df)
    return topics, probs, topic_model

def visualize_documents(df, sentence_model, topic_model, model_name):
    if isinstance(sentence_model, torch.nn.DataParallel):
        embeddings = sentence_model.module.encode(df,  show_progress_bar=True).to(device)
    else:
        embeddings = sentence_model.encode(df, show_progress_bar=True)
    
    reduced_embeddings = UMAP(n_neighbors=10, n_components=2, min_dist=0.0, metric='cosine').fit_transform(embeddings)
    fig = topic_model.visualize_documents(df, reduced_embeddings=reduced_embeddings, hide_annotations=True, hide_document_hover=False, custom_labels=True)
    fig.write_image(file = f"docs/figures/{model_name}_documents.pdf", format="pdf")
    fig.show()

def visualize_barchart(topic_model, model_name):
    fig = topic_model.visualize_barchart(width=220, height=300, top_n_topics=10, n_words=3)
    fig.write_image(file = f"docs/figures/{model_name}_barchart.pdf", format="pdf")
    fig.show()

def reduce_outliers(topic_model, df, topics):
    new_topics = topic_model.reduce_outliers(df, topics)
    topic_model.update_topics(df, topics=new_topics)
    return new_topics, topic_model

def fit_transform_to_topic_model(df, sentence_model, vectorizer_model):
    topics, probs, topic_model = model_fit_transform(df, vectorizer_model, sentence_model)
    return topics, probs, topic_model, sentence_model

def save_topic_model(topic_model, embedding_model_path, sentence_model):
    topic_model.save(f"model_dir/topic_model_{embedding_model_path}", serialization="safetensors", save_embedding_model=sentence_model)


def load_topic_model(embedding_model_path):
    model_path = f"model_dir/topic_model_{embedding_model_path}"
    
    if not os.path.exists(model_path):
        raise ValueError(f"Model path does not exist: {model_path}")

    topic_model = BERTopic.load(model_path)
    return topic_model

if __name__ == "__main__":
    assert_check_cache_file()

    mydb, mycol = get_connected_to_db()

    docs = create_document(mycol)

    df = create_df_and_remove_duplicates(docs)

    vectorizer_model = create_count_vectorizer_w_wo_add_stopwords()

    # os.environ['PYTORCH_CUDA_ALLOC_CONF'] = 'max_split_size_mb:512'

    # torch.cuda.empty_cache()
    # torch.backends.cudnn.benchmark = True
    # torch.backends.cudnn.enabled = True
    # import gc
    # gc.collect()
    device = "cuda" if torch.cuda.is_available() else "cpu"
    sentence_model = SentenceTransformer("BAAI/bge-en-icl")
    num_gpus = torch.cuda.device_count()

    if num_gpus > 1:
        print(f"Using {num_gpus} GPUs")
        device_ids = list(range(num_gpus))
        sentence_model = torch.nn.DataParallel(sentence_model, device_ids=device_ids)

    sentence_model = sentence_model.to(device)
    # topics, probs, topic_model, sentence_model = fit_transform_to_topic_model(df['Documents'], sentence_model , vectorizer_model)

    # new_topics, topic_model = reduce_outliers(topic_model, df['Documents'], topics)

    # print(topic_model.get_topic_info().head(2))

    # save_topic_model(topic_model, "bge-en-icl", sentence_model)

    topic_model = load_topic_model("bge-en-icl")

    visualize_documents(df['Documents'], sentence_model, topic_model, "bge-en-icl")

    visualize_barchart(topic_model, "bge-en-icl")