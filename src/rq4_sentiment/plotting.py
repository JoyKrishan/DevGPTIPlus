import os
import pandas as pd
from bokeh.plotting import figure, show
from bokeh.io import output_notebook, output_file
from bokeh.models import Legend, LegendItem

# Output Bokeh plots in Jupyter notebook
output_file('plot.html')

# Load your dataset
project_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../'))
df = pd.read_csv(os.path.join(project_dir, 'sentiment_analysis_results_intents.csv'))

# Group data by 'Label'
groups = df.groupby('Label')

# Create a figure for plotting
p = figure(title="Sentiment EMA for Different Groups", x_axis_label='Index', y_axis_label='Sentiment EMA')

# Define colors for different groups
colors = {
    'Group1': 'blue',
    'Group2': 'red',
    'Group3': 'green',
    'Group4': 'orange'
}  # Update with your actual group names and colors

# Initialize lists to hold line renderers for legend creation
lines = []
labels = []

# Add lines for each group
for group_name, group_data in groups:
    # Add Dev Sentiment EMA line
    dev_line = p.line(
        group_data.index,
        group_data['Dev Sentiment EMA'],
        line_color=colors.get(group_name, 'black'),
        legend_label=f'{group_name} Dev Sentiment EMA'
    )
    
    # Add GPT Sentiment EMA line
    gpt_line = p.line(
        group_data.index,
        group_data['GPT Sentiment EMA'],
        line_color=colors.get(group_name, 'black'),
        line_dash='dashed',
        legend_label=f'{group_name} GPT Sentiment EMA'
    )
    
    # Append lines and labels
    lines.extend([dev_line, gpt_line])
    labels.extend([f'{group_name} Dev Sentiment EMA', f'{group_name} GPT Sentiment EMA'])

# Create legend items
legend_items = [LegendItem(label=label, renderers=[line]) for label, line in zip(labels, lines)]

# Create a legend and add it to the plot
legend = Legend(items=legend_items, location='center')
p.add_layout(legend, 'right')

# Adjust plot margins to accommodate legend
p.margin = (0, 200, 0, 0)

show(p)