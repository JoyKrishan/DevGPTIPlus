// ... [rest of the imports and functions]

function getDescriptionValue(model) {
    return model.description || '';
}

async function compareAndGenerateMD() {
    // ... [rest of the code for fetching and processing models]

    let markdownContent = '# Model Stats\n';

    // ... [rest of the code for New Models and Removed Models]

    // Rising Stars
    markdownContent += '\n## Rising Stars\n';
    if (risingStars.length > 0) {
        markdownContent += '| Model | Description | Runs Today | Runs Total | % of Total |\n|-------|-------------|------------|------------|------------|\n';
        for (let model of risingStars) {
            const linkText = `${model.owner}/${model.name}`;
            const percentageDisplay = `${model.percentageIncrease.toFixed(2)}%`;
            markdownContent += `| [${linkText}](${model.url}) | ${getDescriptionValue(model)} | ${model.runCountDiff} | ${model.run_count} | ${percentageDisplay} |\n`;
        }
    } else {
        markdownContent += 'No rising stars today.\n';
    }

    // Active Models
    markdownContent += '\n## Active Models\n';
    if (activeModels.length > 0) {
        markdownContent += '| Model | Description | Runs in the last day |\n|-------|-------------|---------------------|\n';
        for (let model of activeModels) {
            const linkText = `${model.owner}/${model.name}`;
            markdownContent += `| [${linkText}](${model.url}) | ${getDescriptionValue(model)} | ${model.runCountDiff} |\n`;
        }
    } else {
        markdownContent += 'No active models today.\n';
    }

    // Write to stats.md
    await fs.writeFile('stats.md', markdownContent);
}

compareAndGenerateMD().catch(error => {
    console.error('Error generating stats:', error);
});