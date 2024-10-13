import { Payload, Choices } from "../types";
  const body = inputString.toLocaleLowerCase();
    if (body.includes(word.toLowerCase())) {
      count++;
    }
          process.env.CHATGPT_SYSTEM_PROMPT_FOR_IMPORTANT_WORDS ||
          (process.env.CHATGPT_USER_PROMPT_FOR_IMPORTANT_WORDS ||