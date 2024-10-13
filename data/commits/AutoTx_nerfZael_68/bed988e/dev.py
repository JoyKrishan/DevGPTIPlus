def build_goal(prompt: str, agents_information: str, non_interactive: bool) -> str:
            autotx_message = f"Missing information: {response.message}"
            if non_interactive:
                chat_history += "\nYou: " + autotx_message + "\nUser: " + input(f"{autotx_message}\nInput response: ")
            autotx_message = f"Unsupported prompt: {response.message}"
            if non_interactive:
            else:
                chat_history = "User: " + input(f"{autotx_message}\nNew prompt: ")
