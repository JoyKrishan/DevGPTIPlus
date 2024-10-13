[[info | NOTE:]]
| If NLP is utilized to store the test data value in a runtime variable, denoted as $|runtimeVariable|, the system will attempt to evaluate the runtime value represented by $|runtimeVariable| and then store in the result of the evaluation.
| Example:
| Store 'title' in $|runtimeVariable|
| In this case, 'title' will be stored in the evaluated value of the runtimeVariable, not in a variable named 'runtimeVariable'.
<br><br>
| Alternatively, if the goal is to simply store the test data value into a variable without any evaluation, a plain text value 'runtimeVariable' should be used.
| Example:
| Store 'title' in runtimeVariable
| Here, 'title' will be stored in the variable named 'runtimeVariable'. Subsequently, in the following steps, the variable can be employed in NLP commands, such as entering $|runtimeVariable| in an element."
