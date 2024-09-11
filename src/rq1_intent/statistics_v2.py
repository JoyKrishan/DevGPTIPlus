import pandas as pd
import os
import json
from scipy.stats import kruskal, mannwhitneyu
import numpy as np


def create_df_from_complete_quali_files(data_filepath, quali_filepath):
    with open(data_filepath, 'r') as f:
        complete_data = json.load(f)

    rq1_df = pd.read_excel(quali_filepath).reset_index()
    data = {}
    error_links = []
    
    def look_for_item(url, data):
        for item in data:
            if url == item['issue_html_URL']:
                return item
        return None

    for _, row in rq1_df.iterrows():
        issue_url = row['Issue URL']
        manual_label = row['Final Label']

        conversation_urls = row['Conversation URL(s)'].split(';')

        # we retreive the item that is present in the rq1 analysis 
        item = look_for_item(issue_url, complete_data)

        if item:
            sharings = item['ChatgptSharing']

            for sharing in sharings:
                if 'Model' not in sharing:
                    error_links.append(issue_url)
                    break
                conv_url = sharing['URL']
                data[conv_url] = {}
                data[conv_url]['Model'] = sharing['Model']
                data[conv_url]['TokensOfPrompts'] = sharing['TokensOfPrompts']
                data[conv_url]['TokensOfAnswers'] = sharing['TokensOfAnswers']
                data[conv_url]['PrimaryLanguage'] = item['repo_primary_language']
        else:
            raise Exception("Item Not Found")    
        
    new_rows = []

    for _, row in rq1_df.iterrows():
        conversation_urls = row['Conversation URL(s)'].split(';')

        for url in conversation_urls:
            url = url.strip()
            if url in data:
                manual_label = row['Final Label'].strip()
                if type(manual_label) != str:
                    continue
                if "Brainstorming" in manual_label:
                    manual_label = "Ideation"
                if "Code Generation" in manual_label:
                    manual_label = "Synthesis"
                if "Debugging" in manual_label:
                    manual_label = "Troubleshooting"
                if "Comprehension" in manual_label:
                    manual_label = "Understanding"
                if "Refactoring" in manual_label:
                    manual_label = "Refactoring"
                if "Verification" in manual_label:
                    manual_label = "Validation"
                if "General Discussion" in manual_label:
                    manual_label = "Other"
                new_row  = {
                    'IssueID': row['Issue ID'],
                    'ConversationURL': url,
                    'Label': manual_label,
                    'Model': data[url]['Model'],
                    'TokensOfPrompts': data[url]['TokensOfPrompts'],
                    'TokensOfAnswers': data[url]['TokensOfAnswers'],
                    'PrimaryLanguage': data[url]['PrimaryLanguage'],
                }
                new_rows.append(new_row)
                
    return pd.DataFrame(new_rows)


def calculate_kruskal(df):
    calculate_diff = lambda x, y: x - y
    df['TokensDiff'] = df.apply(lambda x: calculate_diff(x['TokensOfAnswers'], x['TokensOfPrompts']), axis=1)
    groups = df.groupby('Label')
    kruskal_results = kruskal(*[group['TokensDiff'] for _, group in groups])
    return kruskal_results

def posthoc_mann_whitney_test(df):
    
    # Calculate Mann-Whitney U test between all groups
    groups = df.groupby('Label')
    group_names = df['Label'].unique()
    p_values = np.zeros((len(group_names), len(group_names)))

    for i in range(len(group_names)):
        for j in range(i+1, len(group_names)):
            group1 = groups.get_group(group_names[i])['TokensDiff']
            group2 = groups.get_group(group_names[j])['TokensDiff']
            mannwhitneyu_results = mannwhitneyu(group1, group2)
            p_values[i, j] = mannwhitneyu_results.pvalue
            p_values[j, i] = mannwhitneyu_results.pvalue
            # Build correlation matrix with p-values
            correlation_matrix = pd.DataFrame(p_values, index=group_names, columns=group_names)
            correlation_matrix = correlation_matrix.sort_index(axis=0).sort_index(axis=1)
        
    return correlation_matrix

if __name__ == "__main__":
    
    data_dir = os.path.join(os.path.abspath(os.path.join(__file__, '../../../')), 'data')
    quali_file_path = os.path.join(data_dir, 'rq1', 'RQ1-Analysis.xlsx')
    complete_data_file_path = os.path.join(data_dir, 'complete_dataset', 'DevGPT_issues.json')

    df = create_df_from_complete_quali_files(complete_data_file_path, quali_file_path)
    kruskal_results = calculate_kruskal(df)
    
    # Print Kruskal results
    print("Kruskal Test Results:")
    print("Statistic:", kruskal_results.statistic)
    print("p-value:", kruskal_results.pvalue)
    
    corr_mat = posthoc_mann_whitney_test(df)
    print("Correlation Matrix:")
    print(corr_mat)