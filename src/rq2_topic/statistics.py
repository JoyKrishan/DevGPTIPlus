from bertopic import BERTopic
import os

def load_topic_model(embedding_model_path):
    model_path = f"model_dir/topic_model_{embedding_model_path}"
    
    if not os.path.exists(model_path):
        raise ValueError(f"Model path does not exist: {model_path}")

    topic_model = BERTopic.load(model_path)
    return topic_model

if __name__ == "__main__":
    topic_model = load_topic_model("stella_en_1.5B_v5")
    print(topic_model.get_topic_info().head(2))
    topic_model.get_topic_info().to_csv("data/rq2/topic_info_22.csv")