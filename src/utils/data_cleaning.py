import json
import os 
import logging
import sys

project_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../"))
sys.path.append(project_dir)

# Configure logging
FORMAT_STRING = "'%(asctime)s - %(name)s - %(levelname)s - %(message)s'"

log_file = os.path.join(project_dir, "data", "logs", "API_data_cleaning.log")
logging.basicConfig(level=logging.DEBUG, format=FORMAT_STRING, force=True, handlers= [logging.FileHandler(log_file), 
                                                                                      logging.StreamHandler()])
my_logger = logging.getLogger(__name__)

def remove_item_with_no_sharing_links(data: list):
    return [item for item in data if len(item["LLM_sharing"]) > 0]

def remove_item_with_no_desired_language(data: list, desired_language: list):
    return [item for item in data if item["repo_primary_language"] in desired_language]

if __name__ == "__main__":
    unclean_json_file = os.path.join(project_dir, "data", "api_get_json", "gitHub_DevGPT_issues.json")
    clean_json_file = os.path.join(project_dir, "data", "cleaned_data", "gitHub_DevGPT_issues_cleaned.json")

    desired_languages = ["Python", "JavaScript", "TypeScript", "Java", "C++", "C#" ]

    with open(unclean_json_file, "r") as file:
        data = json.load(file)

    logging.info(f"Total number of issues before cleaning {len(data)}")
    data_with_sharing_links = remove_item_with_no_sharing_links(data)
    data_with_desired_language = remove_item_with_no_desired_language(data_with_sharing_links, desired_languages)
    logging.info(f"Total number of issues after cleaning {len(data_with_desired_language)}")

    try:
        with open(clean_json_file, 'w') as file:
            json.dump(data_with_desired_language, file, indent=2)
    except Exception as e:
        logging.error(f"Error writing JSON file: {e}")