import os
import json 
import time

from devgptiplus.config.path_constants import ROOT_DIR

from tqdm import tqdm
from langdetect import detect
from deep_translator import GoogleTranslator

def dataset_preparation():
    """This function cleans the previous dataset to adjust it with the with data format. There were some 
    unnecessary fields in the previous dataset such as comments, mentions, events, LLM_sharting, etc. 
    These are removed to keep the data clean and aligned to the objective of the research."""
        
    def remove_comments_and_issue_body_reactions_from_data(data: list):
        return [
            {k: v for k, v in item.items() if k != 'comments' and k != 'issue_body_reactions'} 
            if isinstance(item, dict) else item 
            for item in data
        ]
    
    def remove_duplicate_conversations(data: list):
        for item in data:
            seen_url = set()
            sharings = item['ChatgptSharing']
            unique_sharings = []
            
            for sharing in sharings:
                if not sharing['URL'] in seen_url:
                    seen_url.add(sharing['URL'])
                    unique_sharings.append(sharing)
            
            item['ChatgptSharing'] = unique_sharings
        return data
            
    def add_mentions_inside_ChatGPT_sharing(data: list):
        for item in data:
            if 'mentions' in item:
                mentions = item['mentions']
                sharings = item['ChatgptSharing']
                mentioned_url = set()
                for mention in mentions:
                    if not mention['mentioned_url'] in mentioned_url:
                        mentioned_url.add(mention['mentioned_url'])

                for sharing in sharings:
                    if sharing['URL'] in mentioned_url:
                        mention = [mention for mention in mentions if mention['mentioned_url'] == sharing['URL']][0]
                        # Create new sharing dict with URL first, then mention details
                        new_sharing = {
                            'URL': sharing['URL'],
                            'Mention': mention['mentioned_author'],
                            'MentionedText': mention['mentioned_text'],
                            'MentionedPlace': mention['mentioned_place'],
                            'Reactions': {
                                'total': mention['reactions']['total_count'],
                                'likes': mention['reactions']['+1'],
                                'dislikes': mention['reactions']['-1'],
                            }
                        }
                        # Add remaining fields from original sharing
                        for key, value in sharing.items():
                            if key not in new_sharing:
                                new_sharing[key] = value
                        
                        sharing.clear()
                        sharing.update(new_sharing)
            item.pop('mentions', None)
                        
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

            if sharings and any(sharing and 'Model' in sharing for sharing in sharings) and not all(sharing.get('Status') == 404 for sharing in sharings):
                result.append(item)
                
        print("Total number of issues with all 404 status removed:", len(data) - len(result))
        return result

    def language_translation_to_en(data: list):
        failed_conv_trans_counter = 0
                                         
        def translate_to_en(text):
            if text is None:
                return False

            try:
                if detect(text) == 'en':
                    return False
            except Exception as e:
                return True
            
            max_retries = 3
            for attempt in range(max_retries):
                try:
                    text = GoogleTranslator(source='auto', target='en').translate(text)
                    break
                except Exception as e:
                    if attempt < max_retries - 1:
                        time.sleep(5)  
                    else:
                        return True
            return False
        
        for item in tqdm(data):
            sharings = item.get('ChatgptSharing', [])
            if sharings:
                for sharing in sharings:
                    if sharing and 'Model' in sharing and 'Conversations' in sharing:
                        prompt_trans_fails = []
                        for conversation in sharing['Conversations']:
                            prompt_trans_fails.append(translate_to_en(conversation.get('Prompt', [])))

                        if any(prompt_trans_fails):
                            failed_conv_trans_counter += 1    

        print(f"Total number of conversations with failed translation: {failed_conv_trans_counter}")
    
    def remove_item_with_no_desired_language(data: list, desired_language: list):
        result = [item for item in data if item["repo_primary_language"] in desired_language]
        return result
    
    def remove_item_with_duplicate_issue_url(data: list):
        seen_urls = set()
        unique_data = []
        for item in data:
            issue_url = item.get('issue_URL')
            if issue_url and issue_url not in seen_urls:
                seen_urls.add(issue_url)
                unique_data.append(item)
        print(f"Total number of issues with duplicate URLs removed: {len(data) - len(unique_data)}")
        return unique_data
    
    unclean_dataset = os.path.join(ROOT_DIR, "files", "new_data", "DevGPTIPlus_v3.json") # previous dataset + new crawled data
    clean_dataset = os.path.join(ROOT_DIR, "files", "dataset", "DevGPTIPlus_final.json")
    desired_languages = ["Python", "JavaScript", "TypeScript", "Java", "C++", "C#" ]
    with open(unclean_dataset, "r") as file:
        data = json.load(file)

    print(f"Total number of issues before cleaning {len(data)}")
    count = sum(
            len([sharing for sharing in item['ChatgptSharing'] if sharing and 'Model' in sharing])
            for item in data
            )
    print(f"Total number of conversations before cleaning {count}")
    
    data = remove_item_with_duplicate_issue_url(data)
    data = remove_item_with_all_404_status(data)
    data = remove_LLM_sharing_from_data(data)
    data = remove_events_from_data(data)
    data = remove_comments_and_issue_body_reactions_from_data(data)
    add_mentions_inside_ChatGPT_sharing(data)
    data = remove_duplicate_conversations(data)
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
    dataset_preparation()   