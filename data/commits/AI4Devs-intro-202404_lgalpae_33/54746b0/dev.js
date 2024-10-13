document.addEventListener('DOMContentLoaded', function () {
    const timerContainer = document.getElementById('timerContainer');
    const cronometroBtn = document.getElementById('cronometroBtn');
    const cuentaAtrasBtn = document.getElementById('cuentaAtrasBtn');

    cronometroBtn.addEventListener('click', function () {
        showCronometro();
    });

    cuentaAtrasBtn.addEventListener('click', function () {
        showCuentaAtras();
    });

    function showCronometro() {
        timerContainer.innerHTML = `
            <div class="timer">
                <h2>Cronómetro</h2>
                <div id="timeDisplay">00:00:00</div>
                <button id="startStopBtn" style="background-color: green;">Start</button>
                <button id="clearBtn" style="background-color: red;">Clear</button>
            </div>
        `;

        const timeDisplay = document.getElementById('timeDisplay');
        const startStopBtn = document.getElementById('startStopBtn');
        const clearBtn = document.getElementById('clearBtn');

        let timerInterval;
        let seconds = 0;
        let isRunning = false;

        startStopBtn.addEventListener('click', function () {
            if (isRunning) {
                clearInterval(timerInterval);
                startStopBtn.textContent = 'Continue';
                startStopBtn.style.backgroundColor = 'blue';
                isRunning = false;
            } else {
                timerInterval = setInterval(function () {
                    seconds++;
                    const formattedTime = formatTime(seconds);
                    timeDisplay.textContent = formattedTime;
                }, 1000);
                startStopBtn.textContent = 'Pause';
                startStopBtn.style.backgroundColor = 'green';
                isRunning = true;
            }
        });

        clearBtn.addEventListener('click', function () {
            clearInterval(timerInterval);
            seconds = 0;
            timeDisplay.textContent = '00:00:00';
            startStopBtn.textContent = 'Start';
            startStopBtn.style.backgroundColor = 'green';
            isRunning = false;
        });
    }

    function showCuentaAtras() {
        timerContainer.innerHTML = `
            <div class="timer">
                <h2>Cuenta atrás</h2>
                <div>
                    <input type="number" id="hoursInput" class="timeInput" placeholder="Horas" min="0" max="99">
                    <input type="number" id="minutesInput" class="timeInput" placeholder="Minutos" min="0" max="59">
                    <input type="number" id="secondsInput" class="timeInput" placeholder="Segundos" min="0" max="59">
                </div>
                <div id="buttonContainer">
                    <button id="setBtn" style="background-color: green;">Set</button>
                    <button id="clearBtn" style="background-color: grey;">Clear</button>
                </div>
                <div id="timeDisplay">00:00:00</div>
            </div>
        `;

        const hoursInput = document.getElementById('hoursInput');
        const minutesInput = document.getElementById('minutesInput');
        const secondsInput = document.getElementById('secondsInput');
        const setBtn = document.getElementById('setBtn');
        const clearBtn = document.getElementById('clearBtn');
        const timeDisplay = document.getElementById('timeDisplay');
        const buttonContainer = document.getElementById('buttonContainer');

        setBtn.addEventListener('click', function () {
            const hours = parseInt(hoursInput.value) || 0;
            const minutes = parseInt(minutesInput.value) || 0;
            const seconds = parseInt(secondsInput.value) || 0;
            const totalSeconds = hours * 3600 + minutes * 60 + seconds;

            displayTime(totalSeconds);
            buttonContainer.innerHTML = `
                <button id="startBtn" style="background-color: green;">Start</button>
                <button id="restartBtn" style="background-color: red;">Restart</button>
            `;
            startCountdown(totalSeconds);
        });

        clearBtn.addEventListener('click', function () {
            hoursInput.value = '';
            minutesInput.value = '';
            secondsInput.value = '';
            timeDisplay.textContent = '00:00:00';
        });

        function displayTime(totalSeconds) {
            const hours = Math.floor(totalSeconds / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const remainingSeconds = totalSeconds % 60;
            const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(remainingSeconds)}`;
            timeDisplay.textContent = formattedTime;
        }

        function startCountdown(totalSeconds) {
            const startBtn = document.getElementById('startBtn');
            const restartBtn = document.getElementById('restartBtn');
            let remainingSeconds = totalSeconds;
            let countdownInterval;

            startBtn.addEventListener('click', function () {
                if (countdownInterval) {
                    clearInterval(countdownInterval);
                    countdownInterval = null;
                    startBtn.textContent = 'Start';
                } else {
                    countdownInterval = setInterval(function () {
                        remainingSeconds--;
                        if (remainingSeconds < 0) {
                            clearInterval(countdownInterval);
                            timeDisplay.textContent = '00:00:00';
                            startBtn.textContent = 'Start';
                        } else {
                            const formattedTime = formatTime(remainingSeconds);
                            timeDisplay.textContent = formattedTime;
                        }
                    }, 1000);
                    startBtn.textContent = 'Pause';
                }
            });

            restartBtn.addEventListener('click', function () {
                clearInterval(countdownInterval);
                remainingSeconds = totalSeconds;
                const formattedTime = formatTime(totalSeconds);
                timeDisplay.textContent = formattedTime;
            });
        }
    }

    function formatTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
        return `${pad(hours)}:${pad(minutes)}:${pad(remainingSeconds)}`;
    }

    function pad(number) {
        return number < 10 ? '0' + number : number;
    }
});