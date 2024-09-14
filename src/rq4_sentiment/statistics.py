import pandas as pd
import os
import json
from scipy.stats import kruskal, mannwhitneyu
import numpy as np

from bokeh.models import ColumnDataSource
from bokeh.palettes import GnBu3, OrRd3
from bokeh.plotting import figure, show


def number_of_data_lean_pos_neg(df, col):
    df.groupby('Label').size()
    
    for group, data in df.groupby('Label'):
        positive_lean_count = df.groupby('Label')[col].apply(lambda x: (x > 0).sum())
        negative_lean_count = df.groupby('Label')[col].apply(lambda x: (x < 0).sum())
        print(f"Group: {group}")
        print(f"Positive Lean Count: {positive_lean_count}")
        print(f"Negative Lean Count: {negative_lean_count}")
    print(f"Total Count: {len(df)}")
    return group, positive_lean_count, negative_lean_count

# def plot_pos_neg_lean(df):

#     label_dev =['Dev_Ideation', 'Dev_Other', 'Dev_Refractoring', 'Dev_Synthesis', 'Dev_Troubleshooting', 'Dev_Understanding', 'Dev_Validation']
#     label_gpt = ['GPT_Ideation', 'GPT_Other', 'GPT_Refractoring', 'GPT_Synthesis', 'GPT_Troubleshooting', 'GPT_Understanding', 'GPT_Validation']
    

def clean_data(df):
    df = df.drop_duplicates(subset=['IssueID'])

    df = df.reset_index()

    # Drop column: 'index'
    df = df.drop(columns=['index'])     
    return df  


if __name__ == "__main__":
    
    project_dir = os.path.join(os.path.abspath(os.path.join(__file__, '../../../')))
    sentiment_file = os.path.join(project_dir, 'sentiment_analysis_results_intents.csv')
    df = pd.read_csv(sentiment_file)
    df = clean_data(df)
    
    number_of_data_lean_pos_neg(df, 'Dev Sentiment EMA')
    # plot_pos_neg_lean(df)
    # quali_file_path = os.path.join(data_dir, 'rq1', 'RQ1-Analysis.xlsx')
    # complete_data_file_path = os.path.join(data_dir, 'complete_dataset', 'DevGPT_issues.json')
    # kruskal_results = calculate_kruskal(df)
    
    # # Print Kruskal results
    # print("Kruskal Test Results:")
    # print("Statistic:", kruskal_results.statistic)
    # print("p-value:", kruskal_results.pvalue)
    
    # corr_mat = posthoc_mann_whitney_test(df)
    # print("Correlation Matrix:")
    # print(corr_mat)