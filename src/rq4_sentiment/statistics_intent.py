import pandas as pd
import os
import json
from scipy.stats import kruskal, mannwhitneyu, spearmanr

def calculate_median_magnitude(df, col):
    return df.groupby('Label')[col].median()

def number_of_data_lean_pos_neg(df, col):
    positive_lean_count = df.groupby('Label')[col].apply(lambda x: (x > 0).sum())
    negative_lean_count = df.groupby('Label')[col].apply(lambda x: (x < 0).sum())
        
    print(f"Positive Lean Count: {positive_lean_count}")
    print(f"Negative Lean Count: {negative_lean_count}")
    print(f"Total Count: {len(df)}")
    
    return positive_lean_count, negative_lean_count, len(df)

def clean_data(df):
    df = df.drop_duplicates(subset=['IssueID'])
    df = df.reset_index()
    df = df.drop(columns=['index'])     
    return df  

def calculate_corr(df, col1, col2):
    
    unique_labels = df['Label'].unique()
    
    for _, label in enumerate(unique_labels):
    
        group = df[df['Label'] == label]
        dev_ema = group[col1]
        gpt_ema = group[col2]

        corr, _ = spearmanr(dev_ema, gpt_ema)
        print(f"Pearson Correlation Coefficient for {label}: {corr}")
        

if __name__ == "__main__":
    project_dir = os.path.join(os.path.abspath(os.path.join(__file__, '../../../')))
    sentiment_file = os.path.join(project_dir, 'sentiment_analysis_results_intents.csv')
    df = pd.read_csv(sentiment_file)
    df = clean_data(df)
    
    print("Dev Sentiment EMA")
    number_of_data_lean_pos_neg(df, 'Dev Sentiment EMA')
    print("GPT Sentiment EMA")
    number_of_data_lean_pos_neg(df, 'GPT Sentiment EMA')
    
    # print("Dev Sentiment EMA Median Magnitude")
    # print(calculate_median_magnitude(df, 'Dev Sentiment EMA'))
    # print("GPT Sentiment EMA Median Magnitude")
    # print(calculate_median_magnitude(df, 'GPT Sentiment EMA'))
    # print("Correlation between Dev Sentiment EMA and GPT Sentiment EMA")
    # print(calculate_corr(df, 'Dev Sentiment EMA', 'GPT Sentiment EMA'))
    