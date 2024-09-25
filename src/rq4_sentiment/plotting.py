import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
from scipy.stats import pearsonr

df = pd.read_csv('sentiment_analysis_results_intents.csv')


unique_labels = df['Label'].unique()
num_labels = len(unique_labels)

fig, axes = plt.subplots(nrows=(num_labels + 2) // 3, ncols=3, figsize=(18, 6 * ((num_labels + 2) // 3)))
fig.tight_layout(pad=5.0)

axes = axes.flatten()

for i, label in enumerate(unique_labels):
    ax = axes[i]
    
    group = df[df['Label'] == label]
    dev_ema = group['Dev Sentiment EMA']
    gpt_ema = group['GPT Sentiment EMA']
    
    corr, _ = pearsonr(dev_ema, gpt_ema)
    print(f"Pearson Correlation Coefficient for {label}: {corr}")
    sns.scatterplot(x=dev_ema, y=gpt_ema, ax=ax, label=f'{label} (Corr: {corr:.2f})')
    sns.regplot(x=dev_ema, y=gpt_ema, scatter=False, ax=ax, color='red', line_kws={'label': f'{label} Fit Line'})
    
    ax.set_title(f'{label}')
    ax.set_xlabel('Dev Sentiment EMA')
    ax.set_ylabel('GPT Sentiment EMA')
    ax.axhline(0, color='gray', linestyle='--')
    ax.axvline(0, color='gray', linestyle='--')
    ax.grid(False)

# Hide any unused subplots
for j in range(i + 1, len(axes)):
    axes[j].axis('off')

plt.savefig('scatter_plots.png')
# Show the plot
plt.show()