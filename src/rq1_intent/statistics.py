# %%
# Seven Intent found from manual analysis - (Ideation, Synthesis, Troubleshooting, 
# Understanding, Refractoring, Validation and Other)
# - Which model is used with each intent?
# - Which programming language is associated with each intent?
# - The number of developer and ChatGPT tokens associated with each task and calculate their p value

import pandas as pd
import os
import json

data_dir = os.path.join(os.path.abspath(os.path.join(__file__, '../../../')), 'data')
quali_file_path = os.path.join(data_dir, 'rq1', 'RQ1-Analysis.xlsx')
complete_data_file_path = os.path.join(data_dir, 'complete_dataset', 'DevGPT_issues.json')

rq1_df = pd.read_excel(quali_file_path, index_col = 0)
# %%
# conversation_url = {
#     model,
#     primary_lang,
#     dev_tokens,
#     gpt_tokens  
# }
with open(complete_data_file_path, 'r') as f:
    complete_data = json.load(f)

data = {}
error_links = []
rq1_df = rq1_df.reset_index()

def look_for_item(url, data):
    for item in data:
        if url == item['issue_html_URL']:
            return item
    return None

for idx, row in rq1_df.iterrows():
    issue_url = row['Issue URL']
    manual_label = row['Final Label']

    conversation_urls = row['Conversation URL(s)'].split(';')

    # we retreive the item that is present in the rq1 analysis 
    item = look_for_item(issue_url, complete_data)

    if item:
        sharings = item['ChatgptSharing']

        for sharing in sharings:
            if 'Model' not in sharing:
                error_links.append(issue_url)
                break
            conv_url = sharing['URL']
            data[conv_url] = {}
            data[conv_url]['Model'] = sharing['Model']
            data[conv_url]['TokensOfPrompts'] = sharing['TokensOfPrompts']
            data[conv_url]['TokensOfAnswers'] = sharing['TokensOfAnswers']
            data[conv_url]['PrimaryLanguage'] = item['repo_primary_language']
    else:
        raise Exception("Item Not Found")    
    
# %%
new_rows = []

for idx, row in rq1_df.iterrows():
    conversation_urls = row['Conversation URL(s)'].split(';')

    for url in conversation_urls:
        url = url.strip()
        if url in data:
            manual_label = row['Final Label'].strip()
            if type(manual_label) != str:
                continue
            if "Brainstorming" in manual_label:
                manual_label = "Ideation"
            if "Code Generation" in manual_label:
                manual_label = "Synthesis"
            if "Debugging" in manual_label:
                manual_label = "Troubleshooting"
            if "Comprehension" in manual_label:
                manual_label = "Understanding"
            if "Refactoring" in manual_label:
                manual_label = "Refactoring"
            if "Verification" in manual_label:
                manual_label = "Validation"
            if "General Discussion" in manual_label:
                manual_label = "Other"
            new_row  = {
                'IssueID': row['Issue ID'],
                'ConversationURL': url,
                'Label': manual_label,
                'Model': data[url]['Model'],
                'TokensOfPrompts': data[url]['TokensOfPrompts'],
                'TokensOfAnswers': data[url]['TokensOfAnswers'],
                'PrimaryLanguage': data[url]['PrimaryLanguage'],
            }
            new_rows.append(new_row)
df_new = pd.DataFrame(new_rows)

# %%
import pandas as pd
from scipy import stats
import statsmodels.api as sm
from statsmodels.formula.api import ols

# Load the dataset
data = df_new

# Calculate the difference between TokensOfPrompts and TokensOfAnswers
data['TokenDifference'] = data['TokensOfPrompts'] - data['TokensOfAnswers']

# Calculate mean TokenDifference for each Label
mean_diff_per_label = data.groupby('Label')['TokenDifference'].mean().reset_index()
print("Mean difference between TokensOfPrompts and TokensOfAnswers for each Label:")
print(mean_diff_per_label)

# ANOVA Test: Check statistical significance between Labels
# We use ANOVA as we have more than two groups (labels)
model = ols('TokenDifference ~ Label', data=data).fit()
anova_table = sm.stats.anova_lm(model, typ=2)
print("\nANOVA Test Results:")
print(anova_table)

# Kruskal-Wallis Test: Alternative to ANOVA if the data doesn't follow normal distribution
labels = data['Label'].unique()
label_groups = [data['TokenDifference'][data['Label'] == label] for label in labels]

kruskal_stat, p_value = stats.kruskal(*label_groups)
print(f"\nKruskal-Wallis Test Statistic: {kruskal_stat}, P-value: {p_value}")

# %%
from statsmodels.stats.multicomp import pairwise_tukeyhsd

# Perform Tukey's HSD post-hoc test
tukey_result = pairwise_tukeyhsd(endog=df_new['TokensOfAnswers'], groups=df_new['Label'], alpha=0.5)
# %%
tukey_result._results_table
# %%

# %%
import pandas as pd
from scipy import stats
import statsmodels.api as sm
from statsmodels.formula.api import ols
from statsmodels.stats.multicomp import pairwise_tukeyhsd

# Load the dataset
data = df_new

# Calculate the difference between TokensOfPrompts and TokensOfAnswers
data['TokenDifference'] = data['TokensOfAnswers'] - data['TokensOfPrompts']

# Calculate the mean of TokensOfPrompts and TokensOfAnswers for each label
mean_values = data.groupby('Label').agg({
    'TokensOfPrompts': 'mean',
    'TokensOfAnswers': 'mean',
    'TokenDifference': 'mean'
}).reset_index()

print("Mean values for TokensOfPrompts, TokensOfAnswers, and TokenDifference for each Label:")
print(mean_values)

# ANOVA Test: Check statistical significance between Labels
model = ols('TokenDifference ~ Label', data=data).fit()
anova_table = sm.stats.anova_lm(model, typ=2)
print("\nANOVA Test Results:")
print(anova_table)

# Post-hoc test: Tukey's HSD
tukey_hsd = pairwise_tukeyhsd(data['TokenDifference'], data['Label'], alpha=0.05)
print("\nTukey's HSD Post-hoc Test Results:")
print(tukey_hsd)

# Kruskal-Wallis Test: Alternative to ANOVA if the data doesn't follow normal distribution
labels = data['Label'].unique()
label_groups = [data['TokenDifference'][data['Label'] == label] for label in labels]

kruskal_stat, p_value = stats.kruskal(*label_groups)
print(f"\nKruskal-Wallis Test Statistic: {kruskal_stat}, P-value: {p_value}")

# Interpret results:
if p_value < 0.05:
    print("The Kruskal-Wallis test indicates significant differences between some of the labels.")
else:
    print("No significant differences found between labels using Kruskal-Wallis test.")


# %%
# %%
import pandas as pd
from scipy import stats

# Load the dataset
data = df_new

# Calculate the difference between TokensOfPrompts and TokensOfAnswers
data['TokenDifference'] = data['TokensOfAnswers'] - data['TokensOfPrompts']

# Group by label and prepare data for ANOVA
grouped_data = data.groupby('Label')['TokenDifference']

# Prepare lists of token differences for each label
token_diff_groups = [group for _, group in grouped_data]

# Perform ANOVA Test
anova_result = stats.f_oneway(*token_diff_groups)

print("ANOVA Test Results:")
print(f"F-statistic: {anova_result.statistic}")
print(f"P-value: {anova_result.pvalue}")

# Interpret results
if anova_result.pvalue < 0.05:
    print("The ANOVA test indicates significant differences between some of the labels.")
else:
    print("No significant differences found between labels using ANOVA test.")


# %%
import pandas as pd
from scipy import stats
import itertools

# Load the dataset
data = df_new

# Calculate the difference between TokensOfPrompts and TokensOfAnswers
data['TokenDifference'] = data['TokensOfAnswers'] - data['TokensOfPrompts']

# Group by label and prepare data for pairwise t-tests
grouped_data = data.groupby('Label')['TokenDifference']
token_diff_groups = [group for _, group in grouped_data]
labels = [label for label, _ in grouped_data]

# Perform pairwise t-tests with Bonferroni correction
def pairwise_t_tests(groups, labels):
    comparisons = list(itertools.combinations(range(len(groups)), 2))
    p_values = []
    
    for (i, j) in comparisons:
        t_stat, p_val = stats.ttest_ind(groups[i], groups[j], equal_var=False)  # Welch's t-test
        p_values.append((labels[i], labels[j], p_val))
    
    return p_values

# Perform the tests and apply Bonferroni correction
pairwise_p_values = pairwise_t_tests(token_diff_groups, labels)
alpha = 0.05
bonferroni_alpha = alpha / len(pairwise_p_values)

print("\nPairwise T-tests Results (with Bonferroni correction):")
for (label1, label2, p_value) in pairwise_p_values:
    print(f"Comparison between {label1} and {label2}: p-value = {p_value:.4f}")
    if p_value < bonferroni_alpha:
        print(f"Significant difference found between {label1} and {label2}")
    else:
        print(f"No significant difference between {label1} and {label2}")

# %%
import pandas as pd
import numpy as np
from scipy import stats
import scikit_posthocs as sp

# Load the dataset
data = df_new

# Calculate the difference between TokensOfPrompts and TokensOfAnswers
data['TokenDifference'] = data['TokensOfAnswers'] - data['TokensOfPrompts']

# Group by label
grouped_data = data.groupby('Label')['TokenDifference'].apply(list)

# Prepare data for Dunn's test
labels = grouped_data.index
data_for_dunn = [grouped_data[label] for label in labels]

# Kruskal-Wallis Test for preliminary check
kruskal_stat, p_value = stats.kruskal(*data_for_dunn)
print(f"\nKruskal-Wallis Test Statistic: {kruskal_stat}, P-value: {p_value}")

if p_value < 0.05:
    # Dunn's post-hoc test
    dunn_results = sp.posthoc_dunn(data, val_col='TokenDifference', group_col='Label')
    print("\nDunn's Post-hoc Test Results:")
    print(dunn_results)
else:
    print("No significant differences found between labels using Kruskal-Wallis test.")

# %%
import pandas as pd
from scipy import stats
import statsmodels.api as sm
from statsmodels.formula.api import ols
from statsmodels.stats.multicomp import pairwise_tukeyhsd

# Load the dataset
data = df_new

# Calculate the difference between TokensOfPrompts and TokensOfAnswers
data['TokenDifference'] = data['TokensOfAnswers'] - data['TokensOfPrompts']

# Calculate the mean and standard deviation of TokensOfPrompts, TokensOfAnswers, and TokenDifference for each label
statistics_summary = data.groupby('Label').agg({
    'TokensOfPrompts': ['mean', 'std'],
    'TokensOfAnswers': ['mean', 'std'],
    'TokenDifference': ['mean', 'std']
}).reset_index()

# Flatten multi-level columns
statistics_summary.columns = [' '.join(col).strip() for col in statistics_summary.columns.values]

print("Mean and Standard Deviation for TokensOfPrompts, TokensOfAnswers, and TokenDifference for each Label:")
print(statistics_summary)

# ANOVA Test: Check statistical significance between Labels
model = ols('TokenDifference ~ Label', data=data).fit()
anova_table = sm.stats.anova_lm(model, typ=2)
print("\nANOVA Test Results:")
print(anova_table)

# # Post-hoc test: Tukey's HSD
# tukey_hsd = pairwise_tukeyhsd(data['TokenDifference'], data['Label'], alpha=0.05)
# print("\nTukey's HSD Post-hoc Test Results:")
# print(tukey_hsd)

# # Kruskal-Wallis Test: Alternative to ANOVA if the data doesn't follow normal distribution
# labels = data['Label'].unique()
# label_groups = [data['TokenDifference'][data['Label'] == label] for label in labels]

# kruskal_stat, p_value = stats.kruskal(*label_groups)
# print(f"\nKruskal-Wallis Test Statistic: {kruskal_stat}, P-value: {p_value}")

# # Interpret results:
# if p_value < 0.05:
#     print("The Kruskal-Wallis test indicates significant differences between some of the labels.")
# else:
#     print("No significant differences found between labels using Kruskal-Wallis test.")

# %%
