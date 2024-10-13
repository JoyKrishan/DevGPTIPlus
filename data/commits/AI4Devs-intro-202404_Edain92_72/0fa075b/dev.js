window.onload = function() {
    // Define elements
    var stopwatch = document.getElementById('stopwatch');
    var startStopButton = document.getElementById('startStopButton');
    var clearButton = document.getElementById('clearButton');
  
    // Initialize state
    var time = 0;
    var intervalId = null;
    var isRunning = false;
  
    // Update the stopwatch
    function updateDisplay() {
      var hours = Math.floor(time / 3600);
      var minutes = Math.floor((time % 3600) / 60);
      var seconds = time % 60;
      stopwatch.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
  
    // Start or stop the stopwatch
    function toggleTimer() {
      if(isRunning) {
        clearInterval(intervalId);
        startStopButton.textContent = 'Start';
      } else {
        intervalId = setInterval(function() {
          time++;
          updateDisplay();
        }, 1000);
        startStopButton.textContent = 'Stop';
      }
      isRunning = !isRunning;
    }
  
    // Clear the stopwatch
    function clearTimer() {
      if(isRunning) {
        toggleTimer(); // stop the timer if it's running
      }
      time = 0;
      updateDisplay();
    }
  
    // Add event listeners to buttons
    startStopButton.addEventListener('click', toggleTimer);
    clearButton.addEventListener('click', clearTimer);
  
    // Initialize the display
    updateDisplay();
  };
  