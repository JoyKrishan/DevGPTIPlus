## AI Assistant - GPT 3.5
**Prompt:**

Working just with JS, HTML & CSS I want you to create the following development: the page is going to request a text with, at least, 5 characters. The user is going to type it in an input. Next to this, the user is going to click a button. In a box should appear the text provided by the user but in reverse, for example: the user provide “Hello world”, in the box should appear “dlrow oleo”. Give me the html script, JS script & css script adding some minimalist & modern styling.

---

**Complete Response:**

Below is a simple implementation of the described functionality using HTML, CSS, and JavaScript with minimalist and modern styling:

HTML (index.html):
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reverse Text</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <input type="text" id="textInput" placeholder="Enter text...">
        <button onclick="reverseText()">Reverse</button>
        <div id="outputBox"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

CSS (styles.css):
```css
body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    text-align: center;
}

input[type="text"] {
    padding: 8px;
    margin-right: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}

button {
    padding: 8px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}

button:hover {
    background-color: #0056b3;
}

#outputBox {
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}
```

JavaScript (script.js):
```javascript
function reverseText() {
    var inputText = document.getElementById("textInput").value;
    var reversedText = inputText.split("").reverse().join("");
    document.getElementById("outputBox").textContent = reversedText;
}
```

This code creates a simple webpage with an input field for the user to enter text, a button to trigger text reversal, and a box to display the reversed text. Minimalist and modern styling is applied using CSS to make the page look visually appealing. The JavaScript function `reverseText()` is called when the button is clicked, which takes the input text, reverses it, and displays the reversed text in the output box.

---

>Maria Pizarro Cuevas