import os
openai.api_key = os.getenv("OPENAI_API_KEY")
        "content": ("You are enumerating a hierarchy of actions that "
                    "one takes when operating GUI desktop applications for typical "
                    "day-to-day tasks. Consider different levels of abstractions. "
                    "Examples include: clicking a button, opening a window, "
                    "operating payroll software, generating invoices, "
                    "renting an apartment.")},
        "content": ("Enumerate all of the different levels of this hierarchy,"
                    "starting from the least granular to the most. Be as pedantic "
                    "as possible, down to the key presses and mouse movements, clicks "
                    "and button presses. Format your response as follows: prefix " 
                    "each hierarchy level with a number, and separate each hierarchy "
                    "with the word NEW. Make your responses as long as you need them "
                    "to be to complete your task. GO!")}
        "content": ("You are now elaborating on a hierarchy that is part of a "
                    "larger hierarchy of actions that one takes when operating "
                    "GUI desktop applications for typical day-to-day tasks. "
                    "Consider different levels of abstractions.Examples include: "
                    "clicking a button, opening a window, operating payroll "
                    "software, generating invoices, renting an apartment.")},