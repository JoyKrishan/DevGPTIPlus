# %%
import pandas as pd
import json
import os

def commits_statistics(data):
    issues_with_commits = 0
    issues_without_commits = 0

    for item in data:
        if item['commit_shas']:
            issues_with_commits += 1
        else:
            issues_without_commits += 1
    return issues_with_commits, issues_without_commits


def max_comments_issue(data):
    max_comments = 0
    issue_with_max_comments = None
    
    for item in data:
        if item['total_comments'] > max_comments:
            max_comments = item['total_comments']
            issue_with_max_comments = item

    return issue_with_max_comments


def max_upvotes_downvotes_mention(data):
    max_plus_one_upvotes = 0
    max_minus_one_downvotes = 0
    mention_with_max_plus_one = None
    mention_with_max_minus_one = None

    for item in data:
        for mention in item['mentions']:
            if mention['reactions']['+1'] > max_plus_one_upvotes:
                max_plus_one_upvotes = mention['reactions']['+1']
                mention_with_max_plus_one = mention
            
            if mention['reactions']['-1'] > max_minus_one_downvotes:
                max_minus_one_downvotes = mention['reactions']['-1']
                mention_with_max_minus_one = mention

    return mention_with_max_plus_one, mention_with_max_minus_one


def count_language_issues(data):
    language_counts = {}
    language_states = {}
    language_commits = {}

    for item in data:
        language = item['repo_primary_language']
        state = item['state']
        commit = item['commit_shas']
        sharings = item['ChatgptSharing']
        if any(True for sharing in sharings if sharing and 'Model' in sharing):
            if language:
                language_counts[language] = language_counts.get(language, 0) + 1
                
                if language not in language_commits:
                    language_commits[language] = {'with commits': 0, 'without commits': 0}
                
                if commit:
                    language_commits[language]['with commits'] += 1
                else:
                    language_commits[language]['without commits'] += 1

                if language not in language_states:
                    language_states[language] = {'open': 0, 'closed': 0}

                if state.lower() == 'open':
                    language_states[language]['open'] += 1
                elif state.lower() == 'closed':
                    language_states[language]['closed'] += 1
                    
    print(f"Language Counts: {sorted(language_counts.items(), key=lambda x: x[1], reverse=True)}")
    print(f"Language States: {language_states}")
    print(f"Language Commits: {language_commits}")


def count_model_mentions(data):
    model_counts = {}
    language_model_counts = {}

    for item in data:
        language = item['repo_primary_language']
        for sharings in item['ChatgptSharing']:
            if sharings:
                if 'Model' in sharings:
                    model = sharings['Model']
                    if 'GPT-4' in model:
                        model = 'GPT-4'
                    elif 'GPT-3.5' in model:
                        model = 'GPT-3.5'
                    model_counts[model] = model_counts.get(model, 0) + 1
                    if language not in language_model_counts:
                        language_model_counts[language] = {}
                    language_model_counts[language][model] = language_model_counts[language].get(model, 0) + 1

    print(f"Model Mentions: {model_counts}")
    print(f"Language Model Mentions: {language_model_counts}")

    return model_counts, language_model_counts


def count_prompts(data):
    prompts_counts = {}
    answer_tokens_counts = {}
    prompt_tokens_counts = {}

    for item in data:
        language = item['repo_primary_language']
        sharings = item['ChatgptSharing']
        prompts = 0
        answer_tokens = 0 
        prompts_tokens = 0
            
        for sharing in sharings:
            if sharing and 'NumberOfPrompts' in sharing:
                prompts += sharing['NumberOfPrompts']
            if sharing and 'TokensOfPrompts' in sharing:
                prompts_tokens += sharing['TokensOfPrompts']
            if sharing and 'TokensOfAnswers' in sharing:
                answer_tokens += sharing['TokensOfAnswers']

        if language:
            if language not in prompts_counts or language not in answer_tokens_counts or language not in prompt_tokens_counts:
                prompts_counts[language] = 0
                answer_tokens_counts[language] = 0
                prompt_tokens_counts[language] = 0
            prompts_counts[language] += prompts
            answer_tokens_counts[language] += answer_tokens
            prompt_tokens_counts[language] += prompts_tokens    

    print(f"Prompts Counts: {prompts_counts}")
    print(f"Answer Tokens Counts: {answer_tokens_counts}")
    print(f"Prompt Tokens Counts: {prompt_tokens_counts}")

    return prompts_counts


def find_total_valid_conversations(data):
    total_valid_conversations = 0
    for item in data:
        sharings = item['ChatgptSharing']
        if any(True for sharing in sharings if 'Model' in sharing):
            total_valid_conversations +=  len([True for sharing in sharings if 'Model' in sharing])
    return total_valid_conversations

def find_total_valid_conversations_with_language(data):
    language_conv_counts = {}
    for item in data:
        language = item['repo_primary_language']
        sharings = item['ChatgptSharing']
        if any(True for sharing in sharings if 'Model' in sharing):
            if language not in language_conv_counts:
                language_conv_counts[language] = 0
            language_conv_counts[language] += len([True for sharing in sharings if 'Model' in sharing])
    return language_conv_counts
    def filter_issues_with_model(data):
        filtered_issues = []

        for item in data:
            sharings = item['ChatgptSharing']
            if any(True for sharing in sharings if 'Model' in sharing):
                filtered_issues.append(item)

        return filtered_issues

    if __name__ == "__main__":
        filename = "data/complete_dataset/DevGPT_issues.json"
        output_filename = "data/complete_dataset/Filtered_DevGPT_issues.json"
        
        project_root = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../'))

        file_path = os.path.join(project_root, filename)
        output_file_path = os.path.join(project_root, output_filename)
        
        with open(file_path, 'r') as f:
            json_data = json.load(f)

        filtered_data = filter_issues_with_model(json_data)
        
        with open(output_file_path, 'w') as f:
            json.dump(filtered_data, f, indent=4)
    

def find_all_language_type(data):
    all_langauge_types = set()
    for issue in data:
            for sharing in issue['ChatgptSharing']:
                if sharing and 'Conversations' in sharing: 
                    for conversation in sharing['Conversations']:
                        if conversation['ListOfCode']:
                            for code in conversation['ListOfCode']:
                                all_langauge_types.add(code['Type'])
    return all_langauge_types
        

def check_duplicacy(data):
    duplicate_issues = set()
    total_duplicate = 0
    for item in data:
        if item['issue_URL'] not in duplicate_issues:
            duplicate_issues.add(item['issue_URL'])
        else:   
            total_duplicate += 1
    return total_duplicate

def check_multiple_prompts(data):
    multiple_prompt_conversations = 0
    for issue in data:
        sharings = issue['ChatgptSharing']
        if any(True for sharing in sharings if 'Model' in sharing):
            for sharing in sharings:
                if 'Model' not in sharing:
                    continue
                if sharing['NumberOfPrompts'] > 1:
                    multiple_prompt_conversations += 1
    
    return multiple_prompt_conversations

def check_conversation_contains_code(data):
    code_conversations = 0
    for issue in data:
        sharings = issue['ChatgptSharing']
        if any(True for sharing in sharings if 'Model' in sharing):
            for sharing in sharings:
                if 'Model' not in sharing:
                    continue
                for conversation in sharing['Conversations']:
                    if len(conversation['ListOfCode']) > 0:
                        code_conversations += 1
                        break
    return code_conversations


def issues_with_commits_and_their_models(data):
    issues_with_commits = []
    gpt_3_5_count = 0
    gpt_4_0_count = 0

    for item in data:
        if item['commit_shas']:
            models = set()
            for sharing in item['ChatgptSharing']:
                if sharing and 'Model' in sharing:
                    model = sharing['Model']
                    if model.startswith('GPT-4'):
                        model = 'GPT-4'
                    elif model.startswith('GPT-3.5'):
                        model = 'GPT-3.5'
                    models.add(model)
            issues_with_commits.append({
                'issue': item['issue_URL'],
                'models': list(models)
            })
            if 'GPT-3.5' in models:
                gpt_3_5_count += 1
            if 'GPT-4' in models:
                gpt_4_0_count += 1

    print(f"GPT-3.5 count: {gpt_3_5_count}")
    print(f"GPT-4.0 count: {gpt_4_0_count}")
    
    return None

def filter_issues_with_model(data):
    filtered_issues = []

    for item in data:
        sharings = item['ChatgptSharing']
        if any(True for sharing in sharings if 'Model' in sharing):
            filtered_issues.append(item)

    return filtered_issues

if __name__ == "__main__":
    filename = "data/complete_dataset/DevGPT_issues.json"
    
    output_filename = "data/complete_dataset/Filtered_DevGPT_issues.json"
        
    project_root = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../'))

    file_path = os.path.join(project_root, filename)
    output_file_path = os.path.join(project_root, output_filename)
        
    with open(file_path, 'r') as f:
        json_data = json.load(f)

    filtered_data = filter_issues_with_model(json_data)
        
    with open(output_file_path, 'w') as f:
        json.dump(filtered_data, f, indent=4)
    
    # project_root = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../'))

    # file_path = os.path.join(project_root, filename)
    with open(file_path, 'r') as f:
        json_data = json.load(f)

    print(f"Total number of issues out of {len(json_data)}")
    # # print(f"Total number of duplicates found: {check_duplicacy(json_data)}")
    # # print(f"Language conversation counts: {find_total_valid_conversations_with_language(json_data)}")
    # # print(f"Issues with/without commits: {commits_statistics(json_data)[0]}/{commits_statistics(json_data)[1]}")
    # # print(f"Statistics language-wise {count_language_issues(json_data)}")
    # # print(f"GPU Model mentions: {count_model_mentions(json_data)}")
    # # print(f"Total valid conversations: {find_total_valid_conversations(json_data)}")
    # # print(f"Multiple prompt conversations: {check_multiple_prompts(json_data)}")
    # # print(f"Conversations with code: {check_conversation_contains_code(json_data)}")
    # print(issues_with_commits_and_their_models(json_data))
