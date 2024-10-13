document.addEventListener('DOMContentLoaded', function () {
  const timerDisplay = document.getElementById('timer');
  const startButton = document.getElementById('start-btn');
  const stopButton = document.getElementById('stop-btn');
  const clearButton = document.getElementById('clear-btn');
  let countdownInput = document.getElementById('countdown-input');

  let timerInterval;
  let startTime;
  let endTime;
  let elapsedTime = 0;

  function startTimer() {
    if (countdownInput.disabled) {
      startTime = Date.now() - elapsedTime;
      timerInterval = setInterval(updateTimer, 10);
    } else {
      const inputTime = parseInputTime(countdownInput.value);
      if (inputTime === null) {
        alert('Please enter a valid time (HH:MM:SS)');
        return;
      }
      endTime = Date.now() + inputTime;
      timerInterval = setInterval(updateCountdown, 10);
    }
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
    countdownInput.disabled = false;
    startButton.disabled = false;
  }

  function updateTimer() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    timerDisplay.value = formatTime(elapsedTime);
  }

  function updateCountdown() {
    const currentTime = Date.now();
    const remainingTime = endTime - currentTime;
    if (remainingTime <= 0) {
      clearInterval(timerInterval);
      timerDisplay.value = '00:00:00:00';
      countdownInput.disabled = false;
      startButton.disabled = false;
    } else {
      timerDisplay.value = formatTime(remainingTime);
    }
  }

  function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);
    const centiseconds = Math.floor((milliseconds % 1000) / 10);
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(centiseconds).padStart(2, '0')}`;
  }

  function parseInputTime(input) {
    const timeParts = input.split(':');
    if (timeParts.length !== 3) return null;
    const hours = parseInt(timeParts[0]);
    const minutes = parseInt(timeParts[1]);
    const seconds = parseInt(timeParts[2]);
    if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) return null;
    return (hours * 3600 + minutes * 60 + seconds) * 1000;
  }

  document.querySelectorAll('input[name="mode"]').forEach((input) => {
    input.addEventListener('change', () => {
      countdownInput = document.getElementById('countdown-input');
      if (input.id === 'countdown-mode') {
        countdownInput.disabled = false;
      } else {
        countdownInput.disabled = true;
      }
    });
  });

  startButton.addEventListener('click', startTimer);
  stopButton.addEventListener('click', stopTimer);
  clearButton.addEventListener('click', clearTimer);
});