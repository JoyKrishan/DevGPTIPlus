const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start-btn');
const stopButton = document.getElementById('stop-btn');
const clearButton = document.getElementById('clear-btn');

let timerInterval;
let startTime;
let elapsedTime = 0;

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTimer, 10);
    startButton.disabled = true;
}

function stopTimer() {
    clearInterval(timerInterval);
    startButton.disabled = false;
}

function clearTimer() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    timerDisplay.value = formatTime(elapsedTime);
    startButton.disabled = false;
}

function updateTimer() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    timerDisplay.value = formatTime(elapsedTime);
}

function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);
    const centiseconds = Math.floor((milliseconds % 1000) / 10);
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(centiseconds).padStart(2, '0')}`;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
clearButton.addEventListener('click', clearTimer);