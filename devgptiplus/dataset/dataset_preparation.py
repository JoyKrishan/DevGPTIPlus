import os
import copy
import json 

from devgptiplus.config.path_constants import ROOT_DIR

def merge_old_new_dataset_create_DevGPTIPlus_v2():
    new_dataset = os.path.join(ROOT_DIR, "files/new_data/DevGPTIPlus_v2_full.json")
    old_dataset = os.path.join(ROOT_DIR, "files/prev_data/dataset/DevGPTIPlus.json")

    def merge_based_issue_url(new_dataset, old_dataset):
        dataset = copy.deepcopy(new_dataset)
        for i, new_issue_item in enumerate(new_dataset):
            new_dataset_issue_url = new_issue_item['issue_URL']

            for j, old_issue_item in enumerate(old_dataset):
                old_dataset_issue_url = old_issue_item['issue_URL']
                
                if new_dataset_issue_url == old_dataset_issue_url:
                    dataset[i] = old_dataset[j]
                    break
                
        with open(os.path.join(ROOT_DIR, "files/dataset/DevGPTIPlus_full.json"), 'w') as f:
            json.dump(dataset, f, indent=2)
                
    with open(new_dataset, 'r') as f:
        new_dataset = json.load(f)

    with open(old_dataset, 'r') as f:
        old_dataset = json.load(f)
        
    merge_based_issue_url(new_dataset, old_dataset)


def dataset_cleaning():
    def remove_LLM_sharing_from_data(data: list):
        return [
            {k: v for k, v in item.items() if k != 'LLM_sharing'} 
            if isinstance(item, dict) else item 
            for item in data
        ]

    def remove_events_from_data(data: list):
        return [
            {k: v for k, v in item.items() if k != 'events' and k != 'event_actors'} 
            if isinstance(item, dict) else item 
            for item in data
        ]

    def remove_item_with_all_404_status(data: list):
        result = []
        for item in data:
            sharings = item.get('ChatgptSharing', [])

            if sharings and any(True for sharing in sharings if sharing and 'Model' in sharing) and not all(sharing.get('Status') == 404 for sharing in sharings):
                seen_conversations = set()
                item['ChatgptSharing'] = [
                    sharing for sharing in sharings
                    if sharing.get('URL') not in seen_conversations and
                    not seen_conversations.add(sharing.get('URL'))
                ]
                result.append(item)
        return result

    def remove_item_with_no_desired_language(data: list, desired_language: list):
        return [item for item in data if item["repo_primary_language"] in desired_language]
    
    def remove_item_with_duplicate_issue_url(data: list):
        seen_urls = set()
        unique_data = []
        for item in data:
            issue_url = item.get('issue_URL')
            if issue_url and issue_url not in seen_urls:
                seen_urls.add(issue_url)
                unique_data.append(item)
        return unique_data
    
    unclean_dataset = os.path.join(ROOT_DIR, "files", "dataset", "DevGPTIPlus_full.json")
    clean_dataset = os.path.join(ROOT_DIR, "files", "dataset", "DevGPTIPlus_v2.json")
    desired_languages = ["Python", "JavaScript", "TypeScript", "Java", "C++", "C#" ]
    with open(unclean_dataset, "r") as file:
        data = json.load(file)

    print(f"Total number of issues before cleaning {len(data)}")
    count = sum(
    len([sharing for sharing in item['ChatgptSharing'] if sharing and 'Model' in sharing])
    for item in data
    )
    print(f"Total number of conversations before cleaning {count}")
    
    data = remove_LLM_sharing_from_data(data)
    data = remove_item_with_all_404_status(data)
    data = remove_events_from_data(data)
    data = remove_item_with_duplicate_issue_url(data)
    data = remove_item_with_no_desired_language(data, desired_languages)
    
    print(f"Total number of issues after cleaning {len(data)}")
    count = sum(
    len([sharing for sharing in item['ChatgptSharing'] if sharing and 'Model' in sharing])
    for item in data
    )
    print(f"Total number of conversations after cleaning {count}")

    try:
        with open(clean_dataset, 'w') as file:
            json.dump(data, file, indent=2)
    except Exception as e:
        print(f"Error writing JSON file: {e}")

if __name__ == "__main__":
    merge_old_new_dataset_create_DevGPTIPlus_v2()
    dataset_cleaning()   