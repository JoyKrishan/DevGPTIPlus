import json
import re
from datetime import datetime

import tiktoken
from crawl4ai import AsyncWebCrawler, CrawlerRunConfig, CacheMode
from crawl4ai import JsonCssExtractionStrategy

EXTRACTION_SCHEMA = {
    "name": "dev_gpt_conversations",
    "baseSelector": "#main article[data-testid^='conversation-turn']",
    "type": "list",
    "fields": [
        {
            "name": "Prompt",
            "selector": '[data-message-author-role="user"]',
            "type": "text"
        },
        {
            "name": "Answer",
            "selector": '[data-message-author-role="assistant"]',
            "type": "text"
        },
        {
            "name": "Code_Blocks",
            "selector": '[data-message-author-role="assistant"] pre',
            "type": "nested_list",
            "fields": [
                {
                    "name": "language",
                    "selector": "div.flex.items-center.text-token-text-secondary",
                    "type": "text"
                },
                {
                    "name": "code",
                    "selector": "code",
                    "type": "text"
                }
            ]
        },
        {
            "name": "Model",
            "selector": '[data-message-author-role="assistant"]',
            "attribute": "data-message-model-slug",
            "type": "attribute"
        }
    ]
} 

def get_num_tokens_from_string(text, model):
    try:
        encoding = tiktoken.encoding_for_model(model)
    except Exception:
        encoding = tiktoken.encoding_for_model("gpt-3.5-turbo") # Fallback to default model
        
    tokens = encoding.encode(text)
    return len(tokens)

def preprocess_conversation(raw_data):
    conversation = []
    i = 0
    prompt_tokens = 0
    answer_tokens = 0
    model = raw_data[-1]['Model']
    
    while i < len(raw_data): 
        if "Prompt" in raw_data[i] and i+1 < len(raw_data) and "Answer" in raw_data[i+1]:
            prompt = raw_data[i]['Prompt']
            prompt_tokens += get_num_tokens_from_string(prompt, model)
            answer = raw_data[i+1]['Answer']
            answer_tokens += get_num_tokens_from_string(answer, model)
            code_blocks = raw_data[i+1]['Code_Blocks']
            processed_code_blocks = []
            
            for index, code_block in enumerate(code_blocks):
                language = code_block.get("language", "").strip()
                code = code_block.get("code", "").strip()
                placeholder = f"[CODE_BLOCK_{index}]"
                
                if code in answer:
                    answer = answer.replace(language+"Copy"+code, placeholder)
                
                processed_code_blocks.append({
                    "ReplaceString": placeholder,
                    "Type": language if language else None,
                    "Content": code
                })
                
            turn = {
                "Prompt": prompt,
                "Answer": answer,
                "ListofCode": processed_code_blocks,  
                }
            conversation.append(turn)
            i += 2
        else:
            raise ValueError("Data is not in the expected format.")        
    return conversation, prompt_tokens, answer_tokens, model
    
async def scrape_dev_gpt_conversations(url, mention, sharing, logger):
    extraction_strategy = JsonCssExtractionStrategy(schema=EXTRACTION_SCHEMA, verbose=True)
    config = CrawlerRunConfig(
        wait_until='networkidle',
        wait_for_timeout=200000,  # 3 minutes
        cache_mode=CacheMode.BYPASS,
        extraction_strategy=extraction_strategy)
    try:
        async with AsyncWebCrawler(verbose=True) as crawler:
            result = await crawler.arun(url=url, config=config)
            
            if not result.status_code == 200:
                print("ChatGPT conversation not found or inaccessible:", result.status_code)
                return
            
            if not result.success:
                logger.error("Crawling failed with unknown error:", result.error_message)
                return
            
            create_time_match = re.search(r'create_time\\?"?,(\d+\.?\d*)', result.html)
            if create_time_match:
                create_time_timestamp = float(create_time_match.group(1))
                create_time_formatted = datetime.fromtimestamp(create_time_timestamp).strftime('%B %-d, %Y')
                
            raw_data = json.loads(result.extracted_content)
            processed_conv, prompt_tokens, answer_tokens, model = preprocess_conversation(raw_data)
            return {
                "URL": url,
                "Mention": mention,
                "MentionedText": sharing['mentioned_text'],
                "MentionedPlace": sharing['mentioned_place'],
                "Reactions": {
                    "total": sharing['reactions']['total_count'],
                    "likes": sharing['reactions']['+1'],
                    "dislikes": sharing['reactions']['-1']},
                "Status": 200,
                "DateOfConversation": create_time_formatted if create_time_match else "",
                "Title": result.metadata['title'],
                "NumberOfPrompts": len(processed_conv),
                "TokensOfPrompts": prompt_tokens,
                "TokensOfAnswers": answer_tokens,
                "Model": model,
                "Conversations": processed_conv,
            }
    except Exception as e:
        logger.error(f"An error occurred while scraping {url}: {e}")
        return 