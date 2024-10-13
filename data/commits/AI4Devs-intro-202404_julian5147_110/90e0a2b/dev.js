function reverseString() {
    const input = document.getElementById('inputString').value;
    const reversed = input.split('').reverse().join('');
    document.getElementById('reversedString').textContent = reversed;
}

function copyText() {
    const text = document.getElementById('reversedString').innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert('Text copied to clipboard');
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}