import json
import os
import numpy as np

from devgptiplus.config.path_constants import ROOT_DIR

def count_language_issues(data):
    language_counts = {}
    language_states = {}
    language_commits = {}
    desired_languages = ["Python", "JavaScript", "TypeScript", "Java", "C++", "C#"]
    
    for item in data:
        language = item['repo_primary_language']
        state = item['state']
        commit = item['commit_shas']
        sharings = item['ChatgptSharing']
        
        if any(True for sharing in sharings if sharing and 'Model' in sharing):
            if language not in desired_languages:
                continue
            
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
                    
    return language_counts, language_states, language_commits                

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
                    elif 'GPT-3.5' in model or 'TEXT-DAVINCI-002-RENDER-SHA' in model:
                        model = 'GPT-3.5'
                    elif 'DEFAULT_MODEL_SLUG' in model or 'GPT-4O' in model:
                        model = 'GPT-4o'
                    elif 'O1' in model:
                        model = 'o1'
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

    
def check_duplicacy(data):
    duplicate_issues = set()
    total_duplicate = 0
    for item in data:
        if item['issue_URL'] not in duplicate_issues:
            duplicate_issues.add(item['issue_URL'])
        else:   
            total_duplicate += 1
    return total_duplicate

def check_conversation_contains_code(data):
    code_conversations = 0
    for issue in data:
        sharings = issue['ChatgptSharing']
        if any(True for sharing in sharings if 'Model' in sharing):
            for sharing in sharings:
                if 'Model' not in sharing:
                    continue
                for conversation in sharing['Conversations']:                
                    if ("ListofCode" in conversation and len(conversation['ListofCode'])) > 0 or ("ListOfCode" in conversation and len(conversation['ListOfCode']) > 0):
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

def analyze_conversation_length(data):
    prompt_lengths = []
    answer_lengths = []
    prompt_answer_ratios = []
    turn_counts = []
    
    for item in data:
        language = item['repo_primary_language']
        for sharing in item['ChatgptSharing']:
            if sharing and 'Model' in sharing and 'Conversations' in sharing:
                conversations = sharing['Conversations']
                turn_counts.append(len(conversations))
                
                for conversation in conversations:
                    prompt_len = len(conversation['Prompt'])
                    answer_len = len(conversation['Answer'])
                    
                    prompt_lengths.append(prompt_len)
                    answer_lengths.append(answer_len)
                    
                    # Calculate ratio (avoid division by zero)
                    if prompt_len > 0:
                        ratio = answer_len / prompt_len
                        prompt_answer_ratios.append(ratio)
    
    stats = {
        'prompt_lengths': {
            'quartiles': np.percentile(prompt_lengths, [25, 50, 75]),
            'mean': np.mean(prompt_lengths),
            'std': np.std(prompt_lengths),
            'data': prompt_lengths
        },
        'answer_lengths': {
            'quartiles': np.percentile(answer_lengths, [25, 50, 75]),
            'mean': np.mean(answer_lengths),
            'std': np.std(answer_lengths),
            'data': answer_lengths
        },
        'prompt_answer_ratios': {
            'quartiles': np.percentile(prompt_answer_ratios, [25, 50, 75]),
            'mean': np.mean(prompt_answer_ratios),
            'std': np.std(prompt_answer_ratios),
            'data': prompt_answer_ratios
        },
        'turn_counts': {
            'quartiles': np.percentile(turn_counts, [25, 50, 75]),
            'mean': np.mean(turn_counts),
            'std': np.std(turn_counts),
            'data': turn_counts
        }
    }
    
    print("=== CONVERSATION LENGTH ANALYSIS ===")
    print(f"Prompt Length - Q1: {stats['prompt_lengths']['quartiles'][0]:.1f}, "
          f"Median: {stats['prompt_lengths']['quartiles'][1]:.1f}, "
          f"Q3: {stats['prompt_lengths']['quartiles'][2]:.1f}")
    print(f"Answer Length - Q1: {stats['answer_lengths']['quartiles'][0]:.1f}, "
          f"Median: {stats['answer_lengths']['quartiles'][1]:.1f}, "
          f"Q3: {stats['answer_lengths']['quartiles'][2]:.1f}")
    print(f"Answer/Prompt Ratio - Q1: {stats['prompt_answer_ratios']['quartiles'][0]:.2f}, "
          f"Median: {stats['prompt_answer_ratios']['quartiles'][1]:.2f}, "
          f"Q3: {stats['prompt_answer_ratios']['quartiles'][2]:.2f}")
    print(f"Turn Counts - Q1: {stats['turn_counts']['quartiles'][0]:.1f}, "
          f"Median: {stats['turn_counts']['quartiles'][1]:.1f}, "
          f"Q3: {stats['turn_counts']['quartiles'][2]:.1f}")
    
    return stats

if __name__ == "__main__":
    dataset_path = os.path.join(ROOT_DIR, "files", "dataset", "DevGPTIPlus_final.json")
    
    with open(dataset_path, 'r') as f:
        data = json.load(f)
        print(f"Total number of issues: {len(data)}")

    print(f"Total number of duplicate issues found: {check_duplicacy(data)}")
    language_counts, language_states, language_commits = count_language_issues(data)
    
    print(f"Language-specific issue counts: {language_counts}")
    print(f"Language-specific issue states: {language_states}")
    print(f"Language-specific commits: {language_commits}")
    
    print(f"Total number of conversations: {find_total_valid_conversations(data)}")
    print(f"Language-specific conversation counts: {find_total_valid_conversations_with_language(data)}")

    count_model_mentions(data)
    print(f"Conversations with code snippets: {check_conversation_contains_code(data)}")
    analyze_conversation_length(data)