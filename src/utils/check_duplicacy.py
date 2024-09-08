import os
import json 

duplicate_issues = set()

def check_duplicacy(data):
    total_duplicate = 0
    for item in data:
        if item['issue_URL'] not in duplicate_issues:
            duplicate_issues.add(item['issue_URL'])
        else:   
            total_duplicate += 1
    return total_duplicate

if __name__ == '__main__':
    project_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../'))
    data_dir = os.path.join(project_dir, 'data', 'complete_dataset')

    with open(os.path.join(data_dir, 'DevGPT_issues.json'), 'r') as f:
        json_data = json.load(f)
    
    total_duplicate = check_duplicacy(json_data)
    print(f"Total duplicate issues: {total_duplicate}")
    print(f"Total unique issues: {len(duplicate_issues) - total_duplicate}")