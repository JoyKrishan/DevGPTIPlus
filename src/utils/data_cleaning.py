import json
import os 

def remove_item_with_no_sharing_links(data: list):
    return [item for item in data if len(item["LLM_sharing"]) > 0]

def remove_item_with_no_desired_language(data: list, desired_language: list):
    return [item for item in data if item["repo_primary_language"] in desired_language]

if __name__ == "__main__":
    unclean_json_file = "ChatGPT_issues_v2.0_with_sharings.json"
    clean_json_file = "data/ChatGPT_issues_v2.0_cleaned.json"
    desired_languages = ["Python", "JavaScript", "TypeScript", "Java", "C++", "C#" ]

    with open(unclean_json_file, "r") as file:
        data = json.load(file)

    print(f"Total number of issues before cleaning {len(data)}")
    data_with_sharing_links = remove_item_with_no_sharing_links(data)
    data_with_desired_language = remove_item_with_no_desired_language(data_with_sharing_links, desired_languages)
    print(f"Total number of issues after cleaning {len(data_with_desired_language)}")

    data_filepath = os.path.join(os.getcwd(), clean_json_file)

    try:
        with open(data_filepath, 'w') as file:
            json.dump(data_with_desired_language, file, indent=2)
    except Exception as e:
        print(f"Error writing JSON file: {e}")