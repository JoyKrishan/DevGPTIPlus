import { getLogger } from "../bindings";
export const extractImportantWords = async (content: string): Promise<string[]> => {
  const res = await getAnswerFromChatGPT(
    `${
      process.env.CHATGPT_SYSTEM_PROMPT_FOR_IMPORTANT_WORDS ||
      "You are an 'important words finder'. You need to find important words from given context. You only have to give important words from given context and you have to separate the words by #"
    }`,
    `${
      process.env.CHATGPT_USER_PROMPT_FOR_IMPORTANT_WORDS ||
      "I need your help to find duplicate issues on my GitHub repository. For context, the entire strategy is the following:\n\n1. A new issue is posted\n2. We ask you to extract a word list of the most \"important\" (i.e. unique adjectives?) words.\n3. We search the repository for all issues with the important words.\n4. We go from highest issue number (most recent) and read the issue description.\n5. If >80% confidence that it's a redundant issue, stop the search and link back to it with a warning saying that it's likely to be a duplicate.\nRight now, we are on step 2.\n"
    } '${content}'`,
    parseFloat(process.env.IMPORTANT_WORDS_AI_TEMPERATURE || "0")
  );
  return res.split("#");
export const measureSimilarity = async (first: string, second: string): Promise<number> => {
  const res = await getAnswerFromChatGPT(
    `${
      process.env.CHATGPT_SYSTEM_PROMPT_FOR_MEASURE_SIMILARITY ||
      "You are a 'similarity measurer'. Give percent in number. (e.g. 30%)"
    }`,
    `
      ${
        (process.env.CHATGPT_USER_PROMPT_FOR_MEASURE_SIMILARITY ||
        'I have two github issues.\nOne is "%first"%\nand\nother is "%second"%Please give me the possibility of the 2 issues are the same content.\n Give me in number format and add % after the number.\nDo not tell other things since I only need the number.')
          .replace("%first%", first)
          .replace("%second%", second)
      }`,
    parseFloat(process.env.MEASURE_SIMILARITY_AI_TEMPERATURE || "0")
  );
  const percent = res.split("%")[0].split(" ").pop();
  if (!percent) {
    return 0;
  } else {
    return parseFloat(percent);
  }
export const getAnswerFromChatGPT = async (systemPrompt: string, userPrompt: string, temperature = 0, max_tokens = 1500): Promise<string> => {
        content: systemPrompt,
        content: userPrompt,
    max_tokens,
    temperature,