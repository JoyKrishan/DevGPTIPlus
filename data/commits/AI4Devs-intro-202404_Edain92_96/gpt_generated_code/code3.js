document.addEventListener("DOMContentLoaded", function() {
  const maze = document.getElementById("maze");
  const timeDisplay = document.getElementById("time");
  const cells = [];
  const rows = 20;
  const cols = 20;
  const cellWidth = maze.clientWidth / cols;
  const cellHeight = maze.clientHeight / rows;
  let playerPos = { row: 1, col: 0 };
  let timeoutId;
  let timeLeft = 60;

  const generateMaze = () => {
    maze.innerHTML = "";
    for (let row = 0; row < rows; row++) {
      cells[row] = [];
      for (let col = 0; col < cols; col++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = cellWidth + "px";
        cell.style.height = cellHeight + "px";
        cell.style.left = col * cellWidth + "px";
        cell.style.top = row * cellHeight + "px";
        if (Math.random() < 0.2) {
          cell.classList.add("wall");
        }
        maze.appendChild(cell);
        cells[row][col] = cell;
      }
    }
    cells[playerPos.row][playerPos.col].classList.add("player");
    cells[0][cols - 1].classList.add("end");
    cells[rows - 1][0].classList.add("start");
  };

  const movePlayer = (direction) => {
    const newRow = playerPos.row + direction.y;
    const newCol = playerPos.col + direction.x;
    if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && !cells[newRow][newCol].classList.contains("wall")) {
      cells[playerPos.row][playerPos.col].classList.remove("player");
      playerPos.row = newRow;
      playerPos.col = newCol;
      cells[playerPos.row][playerPos.col].classList.add("player");
      if (playerPos.row === 0 && playerPos.col === cols - 1) {
        clearTimeout(timeoutId);
        alert("¡Has ganado!");
        resetGame();
      }
    }
  };

  const updateTimer = () => {
    timeLeft--;
    if (timeLeft <= 0) {
      clearTimeout(timeoutId);
      alert("¡Has perdido!");
      resetGame();
    } else {
      timeDisplay.textContent = `Tiempo restante: ${timeLeft} segundos`;
    }
  };

  const resetGame = () => {
    clearTimeout(timeoutId);
    timeLeft = 60;
    updateTimer();
    generateMaze();
    playerPos = { row: 1, col: 0 };
    timeoutId = setInterval(updateTimer, 1000);
  };

  document.addEventListener("keydown", (event) => {
    switch(event.key) {
      case "ArrowUp":
        movePlayer({ x: 0, y: -1 });
        break;
      case "ArrowDown":
        movePlayer({ x: 0, y: 1 });
        break;
      case "ArrowLeft":
        movePlayer({ x: -1, y: 0 });
        break;
      case "ArrowRight":
        movePlayer({ x: 1, y: 0 });
        break;
    }
  });

  resetGame();
});