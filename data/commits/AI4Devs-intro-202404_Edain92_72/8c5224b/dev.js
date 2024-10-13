function reverseText() {
  var inputText = document.getElementById("textInput").value;
  var reversedText = inputText.split("").reverse().join("");
  document.getElementById("outputBox").textContent = reversedText;
}