// JavaScript logic goes here
document.addEventListener("DOMContentLoaded", function () {
  // Initialize game variables
  let currentPlayer = "X";
  let grid = document.getElementById("grid");
  let playerDisplay = document.getElementById("player-display");
  let winnerModal = new bootstrap.Modal(document.getElementById('winnerModal'));

  // Function to create a grid cell
  function createCell() {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.addEventListener("click", handleCellClick);
      return cell;
  }

  // Function to create the game grid
  function createGrid() {
      for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
              const cell = createCell();
              cell.dataset.row = i;
              cell.dataset.col = j;
              grid.appendChild(cell);
          }
      }
  }

  // Function to handle cell click
  function handleCellClick(event) {
      const cell = event.target;
      if (!cell.textContent) {
          cell.textContent = currentPlayer;
          if (checkWinner()) {
              let winnerMessage = `Player ${currentPlayer} wins!`;
              document.getElementById('winnerMessage').innerText = winnerMessage;
              winnerModal.show();
              startNewGame();
          } else {
              currentPlayer = currentPlayer === "X" ? "O" : "X";
              playerDisplay.textContent = `Player's ${currentPlayer} Turn`;
          }
      }
  }

  // Function to check if there's a winner
  function checkWinner() {
      const cells = Array.from(document.querySelectorAll(".cell"));
      const winningCombos = [
          [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
          [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
          [0, 4, 8], [2, 4, 6] // Diagonals
      ];
      for (const combo of winningCombos) {
          const [a, b, c] = combo;
          if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
              return true;
          }
      }
      return false;
  }

  // Function to start a new game
  function startNewGame() {
      Array.from(grid.children).forEach(cell => {
          cell.textContent = "";
      });
      currentPlayer = "X";
      playerDisplay.textContent = `Player's ${currentPlayer} Turn`;
  }

  // Function to handle undo button click
  function handleUndoClick() {
      // You can implement undo functionality here
      // For simplicity, let's just start a new game
      startNewGame();
  }

  // Add event listeners
  document.getElementById("new-game-btn").addEventListener("click", startNewGame);
  document.getElementById("undo-btn").addEventListener("click", handleUndoClick);

  // Initialize the game
  createGrid();
  startNewGame();
});