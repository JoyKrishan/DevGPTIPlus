import openai
openai.api_key = "INSERT_API_KEY"


completion = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role":"system",
            "content": "You are enumerating a hierarchy of actions that \
                 one takes when operating GUI desktop applications for typical \
                    day-to-day tasks. Consider different levels of abstractions. \
                        Examples include: clicking a button, opening a window, \
                            operating payroll software, generating invoices, \
                                renting an apartment."},
        {"role":"user",
            "content":"Enumerate all of the different levels of this hierarchy, \
                starting from the least granular to the most. Be as pedantic as possible, down to the \
                    key presses and mouse movements, clicks and button presses. Format your response \
                                    as follows: prefix each hierarchy level with a number, and separate \
                                        eachh hierarchy with the word NEW. Make your responses as long \
                                                    as you need them to be to complete your task. GO!"}
    ]
)

tasks_str = completion.choices[0].message['content'].split("NEW")
tasks_by_level = {}
for i in range(len(tasks_str)):
    tasks_by_level[i] = tasks_str[i]


if __name__ == "__main__":
    for level in tasks_by_level:
        print(level, tasks_by_level[level])