                starting from the least granular to the most. Be as pedantic\
                     as possible, down to the \
                    key presses and mouse movements, clicks and button \
                        presses. Format your response \
                                    as follows: prefix each hierarchy \
                                         level with a number, and separate \
                                        eachh hierarchy with the word NEW.\
                                             Make your responses as long \
                                                    as you need them to be \
                                                        to complete \
                                                            your task. GO!"}
    temp_str = tasks_str[i][:3000]
                 one takes when operating GUI desktop applications for \
                    typical day-to-day tasks. Consider different levels \
                        of abstractions.Examples include: clicking a button, \
                            opening a window, \
        "content":"{}".format(temp_str)}]
    temp_str += additional_info.choices[0].message['content']
    tasks_by_level[i] = temp_str
    for level in tasks_by_level: