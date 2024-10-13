document.addEventListener("DOMContentLoaded", function () {
    const inputElement = document.getElementById("inputString");
    const resultElement = document.getElementById("result");
    const reverseButton = document.getElementById("reverseButton");
    const copyButton = document.getElementById("copyButton");

    // Function to reverse a string
    function reverseString(str) {
        return str.split("").reverse().join("");
    }

    // Function to handle click on reverse button
    reverseButton.addEventListener("click", function () {
        const inputString = inputElement.value;
        const reversedString = reverseString(inputString);
        resultElement.innerText = reversedString;
    });

    // Function to handle click on copy button
    copyButton.addEventListener("click", function () {
        const resultText = resultElement.innerText;
        navigator.clipboard.writeText(resultText)
            .then(() => {
                alert("Text copied to clipboard!");
            })
            .catch((error) => {
                console.error("Error copying text: ", error);
            });
    });
});