# Asistente: GPT 3.5
Complete conversation: <https://chat.openai.com/share/cd07ffba-a996-43bb-a26c-167090d9348f>

---

Initial prompt:

## Web Application AI4Devs - Stopwatch

Develop a web application using just HTML, JS and CSS.
This app has two features: a cronometer and a countdown.

### Structure and functionalities

This app is going to be called: AI4Devs - Stopwatch so, add the name in the application with an H1.

Below the title the user will be able to switch between the stopwatch and the counterdown with a selector or a radiobuttons.

For the cronometer follow the next structure:

- Show a timer with 00:00:00:00 format
- a button to start the time: should start the timer and continue the timer if it was already started but not cleared
- a button to stop the time: should start the timer
- a button to clear the timer: should leave the timer on 00:00:00:00 again

For the countdown, the user should be able to set the time to countdown, you should follow the next structure:

- Show a timer with 00:00:00:00 format, the user can type here the time to countdown
- a button to start the time: should start the timer and continue the timer if it was already started but not cleared
- a button to stop the time: should start the timer
- a button to clear the timer: should leave the timer on 00:00:00:00 again until the user set another time again

Reuse the componentes between the cronometer and countdown to prevent the code duplication and follow good practises.

### Styling

Use libraries as bootstrap or animate to create a fancy & modern styles.
The app should be responsive.

### Result

Return just the scripts to be used in the integration: HTML, JS, CSS. Create different files for each them