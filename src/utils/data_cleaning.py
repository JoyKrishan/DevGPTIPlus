import json

def remove_item_with_no_sharing_links(data: list):
    return [item for item in data if len(item["LLM_sharing"]) > 0]


if __name__ == "__main__":
    unclean_json_file = "ChatGPT_issues_v2.0_with_sharings.json"
    clean_json_file = "ChatGPT_issues_v2.0_cleaned.json"

    with open(unclean_json_file, "r") as file:
        data = json.load(file)

    print(f"Total number of issues before cleaning {len(data)}")
    processed_data = remove_item_with_no_sharing_links(data)
    print(f"Total number of issues after cleaning {len(processed_data)}")

    with open(clean_json_file, 'w') as file:
        json.dump(processed_data, file, indent=2)