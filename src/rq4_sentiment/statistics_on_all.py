import os
import seaborn as sns
import matplotlib.pyplot as plt
import pandas as pd

def clean_data(df):
    df = df.drop_duplicates(subset=['ConversationURL'])
    df = df.reset_index()
    df = df.drop(columns=['index'])     
    return df  

# def number_of_data_lean_pos_neg(df, col):
#     positive_lean_count =
#     negative_lean_count = df[col].apply(lambda x: (x < 0).sum())
        
#     print(f"Positive Lean Count: {positive_lean_count}")
#     print(f"Negative Lean Count: {negative_lean_count}")
#     print(f"Total Count: {len(df)}")
    
if __name__ == "__main__":
    project_dir = os.path.join(os.path.abspath(os.path.join(__file__, '../../../')))
    sentiment_file = os.path.join(project_dir, 'data', 'rq4',  'DevGPT_issues_with_sentiment.csv')
    df = pd.read_csv(sentiment_file)
    df = clean_data(df)

    
    print(df['Dev Sentiment EMA'].apply(lambda x: x> 0).sum())
    print(df['Dev Sentiment EMA'].apply(lambda x: x< 0).sum())

    print(df['GPT Sentiment EMA'].apply(lambda x: x> 0).sum())
    print(df['GPT Sentiment EMA'].apply(lambda x: x< 0).sum())
    
