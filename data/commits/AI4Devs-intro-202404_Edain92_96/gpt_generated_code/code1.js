const movePlayer = (direction) => {
  const newRow = playerPos.row + direction.y;
  const newCol = playerPos.col + direction.x;

  if (newRow === exitPos.row && newCol === exitPos.col) {
    clearTimeout(timeoutId);
    alert("¡Has ganado!");
    resetGame();
    return;
  }

  if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && !cells[newRow][newCol].classList.contains("wall")) {
    // Eliminar la clase correct-cell de la celda actual del jugador
    cells[playerPos.row][playerPos.col].classList.remove("correct-cell");
    
    cells[playerPos.row][playerPos.col].classList.remove("player");
    playerPos.row = newRow;
    playerPos.col = newCol;
    cells[playerPos.row][playerPos.col].classList.add("player");

    // Colorear la celda con un verde suave si es una posición correcta
    cells[newRow][newCol].classList.add("correct-cell");
  }
};