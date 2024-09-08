import os
import json
import random 
import uuid
import csv

# import math

# # Given values
# N = 1164       # Population size
# z = 1.96       # Z-score for 95% confidence level
# p = 0.5        # Estimated proportion (maximum variability)
# E = 0.05       # Margin of error (5%)

# # Sample size formula for finite population
# numerator = N * (z ** 2) * p * (1 - p)
# denominator = (E ** 2) * (N - 1) + (z ** 2) * p * (1 - p)
# n = numerator / denominator

# # Round up to the next whole number as sample size should be an integer
# sample_size = math.ceil(n)
# sample_size

def randomly_chose_issue_item_that_has_valid_conversation(data):
    random.seed(0)
    items = random.sample(data, k=min(290, len(data)))  
    csv_data = []

    for item in items:
        sharings = item['ChatgptSharing']
        keep = [sharing["Status"] == 200 for sharing in sharings]
        if any(keep):
            csv_data.append(item)

    # Check if we still need more items to reach 290
    if len(csv_data) < 290:
        remaining_items = random.sample([item for item in data if item not in csv_data], 290 - len(csv_data))
        csv_data.extend(remaining_items)

    return csv_data

def write_to_csv(csv_data, filename):
    headers = ["Issue ID", "Issue URL", "Conversation URL(s)", "Conversation URL Count", "Topic (What is the Issue About)", "Tags (Codes) of Each Conversation", "Main Theme of Each Conversation", "Example Emphasizing the Main Theme of Each Conversation"]
    
    with open(filename, 'w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(headers)
        writer.writerows(csv_data)

if __name__ == "__main__":
    project_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../'))   
    data = os.path.join(project_dir, 'data', 'complete_dataset', 'DevGPT_issues.json')
    with open(data, 'r') as f:
        data = json.load(f)

    csv_data = randomly_chose_issue_item_that_has_valid_conversation(data)
    processed_data = []
    for item in csv_data:
            issue_id = str(uuid.uuid4()).split('-')[0]
            issue_url = item.get('issue_html_URL')
            conversation_urls = " ; ".join([sharing.get('URL', '') for sharing in item['ChatgptSharing'] if sharing["Status"] == 200])
            conversation_urls_count = len([sharing.get('URL', '') for sharing in item['ChatgptSharing'] if sharing["Status"] == 200])
            theme1, theme2, theme3, theme4 = "", "", "", ""
            processed_data.append([issue_id, issue_url, conversation_urls, conversation_urls_count, theme1, theme2, theme3, theme4])
    
    write_to_csv(processed_data, os.path.join(project_dir, 'data', 'complete_dataset', 'qualitative_analysis.csv'))