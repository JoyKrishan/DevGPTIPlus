// index.mjs
import fs from 'fs/promises';
import path from 'path';
import franc from 'franc-min';

const TRANSCRIPTS_DIR = './transcripts';

async function detectLanguage(text) {
  return await franc(text);
}

async function getJsonFilesFromDirectory(directory) {
  const files = await fs.readdir(directory);
  return files.filter(file => path.extname(file) === '.json');
}

async function checkAndPrintNonEnglishTranscription() {
  const jsonFiles = await getJsonFilesFromDirectory(TRANSCRIPTS_DIR);

  for (const file of jsonFiles) {
    const filePath = path.join(TRANSCRIPTS_DIR, file);
    const fileContent = await fs.readFile(filePath, 'utf8');
    const jsonContent = JSON.parse(fileContent);

    if (jsonContent?.output?.transcription) {
      const language = await detectLanguage(jsonContent.output.transcription);
      if (language !== 'eng') {
        const truncatedTranscription = jsonContent.output.transcription.substring(0, 50);
        console.log(`${file}: ${truncatedTranscription}`);
      }
    }
  }
}

checkAndPrintNonEnglishTranscription().catch(error => {
  console.error('An error occurred:', error);
});