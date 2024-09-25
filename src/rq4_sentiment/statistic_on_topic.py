import sys
import os
project_dir = os.path.join(os.path.abspath(os.path.join(__file__, '../../../')))
sys.path.append(project_dir)

import pandas as pd 

from src.utils.constants import TOPIC_ID_TO_NAME

def create_or_load_new_df2_on_topic_id(df1, df2):
    if os.path.exists(os.path.join(project_dir, 'data', 'rq4',  TOPIC_SENTIMENT_FILENAME)):
        df2 = pd.read_csv(os.path.join(project_dir, 'data', 'rq4',  TOPIC_SENTIMENT_FILENAME))
    else:    
        extracted_col = topics_df['Topics']
        df2 = pd.concat([sentiment_df, extracted_col.rename("Topic_ID")], axis=1)
        df2['Topic_Name'] = df2['Topic_ID'].apply(lambda x: TOPIC_ID_TO_NAME.get(x, 'UNKNOWN'))
        df2.to_csv(os.path.join(project_dir, 'data', 'rq4',  'DevGPT_issues_sentiment_and_topic_names.csv'), index=False)

    return df2

def statistic_on_data_lean_on_topics(df, col):
    pos_lean_count = df.groupby('Topic_ID')[col].apply(lambda x: (x > 0).sum())
    neg_lean_count = df.groupby('Topic_ID')[col].apply(lambda x: (x < 0).sum())
    
    print(f"Positive Lean Count: {pos_lean_count}")
    print(f"Negative Lean Count: {neg_lean_count}")
    
if __name__ == "__main__":
    TOPIC_SENTIMENT_FILENAME = 'DevGPT_issues_sentiment_and_topic_names.csv'
    topics_id_file = os.path.join(project_dir, 'topics_V4.csv')
    sentiment_file = os.path.join(project_dir, 'data', 'rq4',  'DevGPT_issues_with_sentiment.csv')
    topics_df = pd.read_csv(topics_id_file)
    sentiment_df = pd.read_csv(sentiment_file)
    
    df = create_or_load_new_df2_on_topic_id(topics_df, sentiment_df)
    
    print("Dev Sentiment EMA")
    statistic_on_data_lean_on_topics(df, 'Dev Sentiment EMA')