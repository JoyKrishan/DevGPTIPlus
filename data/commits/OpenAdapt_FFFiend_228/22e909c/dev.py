openai.api_key = "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"
    additional_info = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role":"system",
        "content":"You are now elaborating on a hierarchy that is part of a \
            larger hierarchy of actions that \
                 one takes when operating GUI desktop applications for typical \
                    day-to-day tasks. Consider different levels of abstractions. \
                        Examples include: clicking a button, opening a window, \
                            operating payroll software, generating invoices, \
                                renting an apartment."},
                    {"role":"user",
        "content":"{}".format(tasks_str[i][:3000])}]
    )
    
    tasks_by_level[i] += additional_info.choices[0].message['content']