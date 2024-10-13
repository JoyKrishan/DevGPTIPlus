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
}

// Resto de funciones ...

startBtn.addEventListener('click', startTimer);