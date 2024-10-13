let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let savedTimes = [];

const display = document.querySelector('.display');
const millisecondsDisplay = document.querySelector('.milliseconds');
const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');
const resetBtn = document.querySelector('.reset-btn');
const saveBtn = document.querySelector('.save-btn');
const savedTimesList = document.getElementById('saved-times');

function startTimer() {
    stopTimer(); // Detener el intervalo anterior antes de iniciar uno nuevo
    timer = setInterval(updateTimer, 10); // Actualiza cada 10 milisegundos
    updateDisplay(); // Asegura que se muestren los milisegundos al iniciar
    startBtn.disabled = true;
}

function stopTimer() {
    clearInterval(timer);
    startBtn.disabled = false;
    startBtn.textContent = "Continue"; // Cambia el texto a "Continue" al detener
}

function resetTimer() {
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
    startBtn.textContent = "Start";
    startBtn.disabled = false;
}

function updateTimer() {
    milliseconds++;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    updateDisplay();
}

function updateDisplay() {
    const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    display.textContent = formattedTime;
    millisecondsDisplay.textContent = `:${pad(milliseconds)}`;
}

function pad(number) {
    return (number < 10) ? '0' + number : number;
}

function saveTime() {
    if (hours === 0 && minutes === 0 && seconds === 0 && milliseconds === 0) {
        alert("No puedes guardar un tiempo con valor 0.");
        return;
    }
    savedTimes.push(`${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`);
    renderSavedTimes();
}

function renderSavedTimes() {
    savedTimesList.innerHTML = '';
    savedTimes.forEach(time => {
        const li = document.createElement('li');
        li.textContent = time;
        savedTimesList.appendChild(li);
    });
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
saveBtn.addEventListener('click', saveTime);