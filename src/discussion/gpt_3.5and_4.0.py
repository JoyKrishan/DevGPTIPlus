import pandas as pd
import os

project_dir = os.path.join(os.path.abspath(os.path.join(__file__, '../../../')))
data_dir = os.path.join(project_dir, 'data', 'rq4')

df = pd.read_csv(os.path.join(data_dir, 'DevGPT_issues_with_sentiment.csv'))

# Filter the DataFrame for GPT-3.5 and GPT-4 models
gpt_35 = df[df['Model'] == 'GPT-3.5']
gpt_4 = df[df['Model'].str.startswith('GPT-4')]

# Function to calculate sentiment percentages
def calculate_sentiment_percentages(df):
    total = len(df)
    positive = (df['Dev Sentiment EMA'] > 0).sum()
    negative = (df['Dev Sentiment EMA'] < 0).sum()
    positive_percentage = (positive / total) * 100
    negative_percentage = (negative / total) * 100
    return  positive_percentage, negative_percentage

# Calculate sentiment percentages for GPT-3.5
positive_35, negative_35 = calculate_sentiment_percentages(gpt_35)

# Calculate sentiment percentages for GPT-4
positive_4, negative_4 = calculate_sentiment_percentages(gpt_4)

# Print the results

print(f"GPT-3.5 - Positive Sentiment: {positive_35:.2f}%, Negative Sentiment: {negative_35:.2f}%")
print(f"GPT-4 - Positive Sentiment: {positive_4:.2f}%, Negative Sentiment: {negative_4:.2f}%")


# List of provided languages
links = [
    "https://chat.openai.com/share/b38bd2f3-a4aa-46bd-90ce-250c5c0061b2",
    "https://chat.openai.com/share/a1157789-5e35-4249-b103-b2cd9d9567cc",
    "https://chat.openai.com/share/c7545fe6-17bd-4d53-81dc-a7d3679a754a",
    "https://chat.openai.com/share/bbf02991-62e1-4bbc-a8e2-4f8eeadd34ef",
    "https://chat.openai.com/share/975b0d7f-c82b-4722-8f80-9b7fa39e302f",
    "https://chat.openai.com/share/eb9a638c-7eb9-4ec1-8ad0-10029d1f0274",
    "https://chat.openai.com/share/cdd643fd-8168-4849-923d-6e6bc719cd93",
    "https://chat.openai.com/share/c39e3ddb-4cbf-49f4-af23-8b2f74cec3b5",
    "https://chat.openai.com/share/5fd02118-c9a2-4bea-9879-efe9164cdea8",
    "https://chat.openai.com/share/e551c7cf-ac09-452a-a3c0-b4b523392076",
    "https://chat.openai.com/share/d9f470d2-2a67-4b4e-ab66-608e75e22f7d",
    "https://chat.openai.com/share/aaa840d6-996e-4c5d-9142-7080240f0d97",
    "https://chat.openai.com/share/ec50f5d6-714c-4b9e-ac60-d64ecb656c3b",
    "https://chat.openai.com/share/ec4c0554-0cc0-4a4b-a7b0-68e60dae226d",
    "https://chat.openai.com/share/3fac1c44-7998-4d8a-aee8-603a300aede4",
    "https://chat.openai.com/share/556effd9-ba30-4f14-bb73-d6b09df3da86",
    "https://chat.openai.com/share/7e24fe17-a685-4b21-9d58-9eaafad8040a",
    "https://chat.openai.com/share/cd07ffba-a996-43bb-a26c-167090d9348f",
    "https://chat.openai.com/share/64ccde15-fcd1-424c-a98b-dfbf50f81ce1",
    "https://chat.openai.com/share/0f7330fd-9663-43b0-9552-61dd2457bf1a",
    "https://chat.openai.com/share/e82d6d12-82e4-4bd4-b8fd-b01522af0c39",
    "https://chat.openai.com/share/859d9889-f3bd-42a4-aa27-b28ab8fd2052",
    "https://chat.openai.com/share/ceb8a281-4b9c-4f9b-8667-c562f5f3c9c8",
    "https://chat.openai.com/share/e250d511-2739-4533-82aa-141aa01e31ad",
    "https://chat.openai.com/share/740a955d-f5a6-4747-8cdd-4b62356f2ea1",
    "https://chat.openai.com/share/595f4b10-3406-47cf-8c57-835070fe996c",
    "https://chat.openai.com/share/4bea6d17-2817-454e-94ad-04bd2e9f0c8d",
    "https://chat.openai.com/share/5f16a0a8-93ed-4455-9cd1-13531af2fe8f",
    "https://chat.openai.com/share/fa63cffd-e94d-4939-ad72-80b5706003de",
    "https://chat.openai.com/share/0400a76b-d208-43e5-aa85-46f076997ae7",
    "https://chat.openai.com/share/b5af44c4-abe7-4760-9379-3cf8240c30ab",
    "https://chat.openai.com/share/c7e12864-bd25-4113-91b3-cc2fbe3848e9",
    "https://chat.openai.com/share/555a5a1d-cd96-432f-b08f-9f826985b38e",
    "https://chat.openai.com/share/4a985cdf-7830-4c82-9377-fa17040262ce",
    "https://chat.openai.com/share/8f2c3f01-02d2-4a19-88f5-15913964c136",
    "https://chat.openai.com/share/28b5e12e-3f0b-4e31-bfbc-84d4e48c9826",
    "https://chat.openai.com/share/32db57a6-7e1a-4d2a-82c2-9dc981f6a475",
    "https://chat.openai.com/share/c05aa964-d63c-455c-a1ba-37486cc28520",
    "https://chat.openai.com/share/7dae3a07-8663-49bc-8b3c-3488394a8b03",
    "https://chat.openai.com/share/c7e12864-bd25-4113-91b3-cc2fbe3848e9",
    "https://chat.openai.com/share/63b9f510-2ccc-4691-9e2b-3f45dfdd1f2d",
    "https://chat.openai.com/share/91b0170e-d5d1-491b-a973-11f55014ad41",
    "https://chat.openai.com/share/24346e46-0496-4bac-ab6d-cf8695bc5710",
    "https://chat.openai.com/share/8ff24ec1-f715-4d98-af62-2b8f61cd1fc6",
    "https://chat.openai.com/share/7e119bb6-f3c2-43b9-bd9b-dfef2c7e71a0",
    "https://chat.openai.com/share/4ccb3c55-c4e0-4e7e-9c30-ed6a64258f20"
]


# Filter the DataFrame to match the languages
filtered_df = df[df['ConversationURL'].isin(links)]

# Extract the languages and their corresponding models
results = filtered_df[['ConversationURL', 'Model']]

# Print the results
for index, row in results.iterrows():
    print(f"ConversationURL: {row['ConversationURL']}, Model: {row['Model']}")
    
    
# Ensure the columns exist
if 'Dev Sentiment EMA' in df.columns and 'TokensOfPrompts' in df.columns:
    # Group by positive and negative sentiment
    positive_group = df[df['Dev Sentiment EMA'] > 0]
    negative_group = df[df['Dev Sentiment EMA'] < 0]
    
    # Count the number of entries in each group
    positive_count = len(positive_group)
    negative_count = len(negative_group)
    
    # Calculate the average of TokensOfPrompts in each group
    positive_avg_tokens = positive_group['TokensDiff'].mean()
    negative_avg_tokens = negative_group['TokensDiff'].mean()
    
    # Calculate the median of TokensOfPrompts in each group
    positive_median_tokens = positive_group['TokensOfPrompts'].median()
    negative_median_tokens = negative_group['TokensOfPrompts'].median()
    
    # Calculate the mode of TokensOfPrompts in each group
    positive_mode_tokens = positive_group['TokensOfPrompts'].mode().iloc[0] if not positive_group['TokensOfPrompts'].mode().empty else None
    negative_mode_tokens = negative_group['TokensOfPrompts'].mode().iloc[0] if not negative_group['TokensOfPrompts'].mode().empty else None
    
    # Print the results
    print(f"Positive Sentiment Group - Count: {positive_count}, Average TokensOfPrompts: {positive_avg_tokens:.2f}, Median TokensOfPrompts: {positive_median_tokens:.2f}, Mode TokensOfPrompts: {positive_mode_tokens}")
    print(f"Negative Sentiment Group - Count: {negative_count}, Average TokensOfPrompts: {negative_avg_tokens:.2f}, Median TokensOfPrompts: {negative_median_tokens:.2f}, Mode TokensOfPrompts: {negative_mode_tokens}")
else:
    print("One or both columns 'Dev Sentiment EMA' and 'TokensOfPrompts' do not exist in the DataFrame.")