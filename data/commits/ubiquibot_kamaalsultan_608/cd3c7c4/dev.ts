    `${process.env.CHATGPT_SYSTEM_PROMPT_FOR_MEASURE_SIMILARITY || "You are a 'similarity measurer'. Give percent in number. (e.g. 30%)"}`,
      ${(
        process.env.CHATGPT_USER_PROMPT_FOR_MEASURE_SIMILARITY ||
        'I have two github issues.\nOne is "%first"%\nand\nother is "%second"%Please give me the possibility of the 2 issues are the same content.\n Give me in number format and add % after the number.\nDo not tell other things since I only need the number.'
      )
        .replace("%first%", first)
        .replace("%second%", second)}`,
    url: `${process.env.OPENAI_API_HOST || "https://api.openai.com"}/v1/chat/completions`,