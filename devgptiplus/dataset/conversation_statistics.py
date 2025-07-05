#%%
import json
import os

import numpy as np

from devgptiplus.config.path_constants import ROOT_DIR

def analyze_conversation_length(data):
    """Analyze conversation length metrics including quartiles and turn counts"""
    prompt_tokens = []
    answer_tokens = []
    turn_counts = []
    
    for item in data:
        for sharing in item['ChatgptSharing']:
            if sharing and 'Model' in sharing and 'Conversations' in sharing:
                conversations = sharing['Conversations']
                turn_counts.append(len(conversations))
                prompt_tok = sharing['TokensOfPrompts']
                answer_tok = sharing['TokensOfAnswers']
                answer_tokens.append(answer_tok)
                prompt_tokens.append(prompt_tok)
                
    stats = {
        'prompt_tokens': {
            'quartiles': np.percentile(prompt_tokens, [25, 50, 75]),
            'mean': np.mean(prompt_tokens),
            'std': np.std(prompt_tokens),
            'data': prompt_tokens
        },
        'answer_tokens': {
            'quartiles': np.percentile(answer_tokens, [25, 50, 75]),
            'mean': np.mean(answer_tokens),
            'std': np.std(answer_tokens),
            'data': answer_tokens
        },
        'turn_counts': {
            'quartiles': np.percentile(turn_counts, [25, 50, 75]),
            'mean': np.mean(turn_counts),
            'std': np.std(turn_counts),
            'data': turn_counts
        }
    }
    print("=== CONVERSATION LENGTH ANALYSIS ===")
    print(f"Total Prompt Tokens - Q1: {stats['prompt_tokens']['quartiles'][0]:.1f}, "
          f"Median: {stats['prompt_tokens']['quartiles'][1]:.1f}, "
          f"Q3: {stats['prompt_tokens']['quartiles'][2]:.1f}")
    print(f"Total Answer Tokens - Q1: {stats['answer_tokens']['quartiles'][0]:.1f}, "
          f"Median: {stats['answer_tokens']['quartiles'][1]:.1f}, "
          f"Q3: {stats['answer_tokens']['quartiles'][2]:.1f}")
    print(f"Turn Counts - Q1: {stats['turn_counts']['quartiles'][0]:.1f}, "
          f"Median: {stats['turn_counts']['quartiles'][1]:.1f}, "
          f"Q3: {stats['turn_counts']['quartiles'][2]:.1f}")
    
    return stats

def analyze_generated_code_snippets(data):
    conversations_with_code = 0
    conversations_without_code = 0
    total_code_blocks = 0 
    code_types = {}
    language_code_usage = {}
    
    for item in data:
        language = item['repo_primary_language']
        if language not in language_code_usage:
            language_code_usage[language] = {'with_code': 0, 'without_code': 0, 'total_blocks': 0}
            
        for sharing in item['ChatgptSharing']:
            if sharing and 'Model' in sharing and 'Conversations' in sharing:
                for conversation in sharing['Conversations']:
                    has_code = len(conversation['ListOfCode']) > 0
                    
                    if has_code:
                        conversations_with_code += 1
                        if language:
                            language_code_usage[language]['with_code'] += 1
                        
                        # Count code blocks and types
                        code_blocks_in_conv = len(conversation['ListOfCode'])
                        total_code_blocks += code_blocks_in_conv
                        if language:
                            language_code_usage[language]['total_blocks'] += code_blocks_in_conv
                        
                        # Analyze code types
                        for code_block in conversation['ListOfCode']:
                            code_type = code_block.get('Type', 'unknown')
                            if code_type:
                                code_types[code_type] = code_types.get(code_type, 0) + 1
                    else:
                        conversations_without_code += 1
                        if language:
                            language_code_usage[language]['without_code'] += 1
    
    total_conversations = conversations_with_code + conversations_without_code
    code_percentage = (conversations_with_code / total_conversations) * 100 if total_conversations > 0 else 0
    
    code_stats = {
        'total_conversation_turns': total_conversations,
        'conversation_turns_with_code': conversations_with_code,
        'conversation_turns_without_code': conversations_without_code,
        'code_percentage_in_turns': code_percentage,
        'total_code_blocks': total_code_blocks,
        'avg_blocks_per_conversation_turns': total_code_blocks / conversations_with_code if conversations_with_code > 0 else 0,
        'code_types': dict(sorted(code_types.items(), key=lambda x: x[1], reverse=True)),
        'language_breakdown': language_code_usage
    }
    
    print("=== CODE SNIPPETS ANALYSIS ===")
    print(f"Total Conversation Turns: {total_conversations}")
    print(f"Conversations Turns with Code: {conversations_with_code} ({code_percentage:.1f}%)")
    print(f"Conversations Turns without Code: {conversations_without_code} ({100-code_percentage:.1f}%)")
    print(f"Total Code Blocks: {total_code_blocks}")
    print(f"Average Blocks per Code Conversation: {code_stats['avg_blocks_per_conversation']:.2f}")
    print(f"Top Code Types: {list(code_stats['code_types'].items())}")
    return code_stats


def comprehensive_analysis(data):
    """Run all analyses and create visualizations"""
    
    analyze_conversation_length(data)
    analyze_generated_code_snippets(data)
    
if __name__ == "__main__":
    dataset_path = os.path.join(ROOT_DIR, "files", "dataset", "DevGPTIPlus_v2.json")
    with open(dataset_path, 'r') as f:
        data = json.load(f)
    analysis_results = comprehensive_analysis(data)