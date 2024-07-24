import os
import json
import random 
import uuid
import csv

def randomly_chose_issue_item_that_has_valid_conversation(data):
    random.seed(0)
    items = random.sample(data, k=min(289, len(data)))  
    csv_data = []

    for item in items:
        sharings = item['ChatgptSharing']
        keep = [sharing["Status"] == 200 for sharing in sharings]
        if any(keep):
            csv_data.append(item)

    # Check if we still need more items to reach 289
    if len(csv_data) < 289:
        remaining_items = random.sample([item for item in data if item not in csv_data], 289 - len(csv_data))
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