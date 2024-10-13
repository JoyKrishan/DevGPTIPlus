def build_goal(prompt: str, agents_information: str, headless: bool, strict: bool) -> str:
    chat_history = f"User: {prompt}"

        response = analyze_user_prompt(chat_history, agents_information)
            autotx_message = f"Missing information: {response.message}\nInput response: "
            
            if not strict:
                return prompt

            if headless:
                raise Exception(autotx_message)
            else:
                chat_history += "\nYou: " + autotx_message + "\nUser: " + input(autotx_message)

            autotx_message = f"Unsupported prompt: {response.message}\nNew prompt: "
            chat_history = f"User: {input(autotx_message)}"

            if headless:
                raise Exception(autotx_message)
def analyze_user_prompt(chat_history: str, agents_information: str) -> DefineGoalResponse:
        {chat_history}
        agents_information=agents_information, chat_history=chat_history