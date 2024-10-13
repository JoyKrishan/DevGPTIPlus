function moveSnake() {
  let newHead = { x: snake[0].x, y: snake[0].y };

  // Update snake's head based on direction
  if (direction === "up") newHead.x--;
  else if (direction === "down") newHead.x++;
  else if (direction === "left") newHead.y--;
  else if (direction === "right") newHead.y++;

  // Check if the new head hits the walls or itself
  if (
    newHead.x < 0 ||
    newHead.x >= GRID_SIZE ||
    newHead.y < 0 ||
    newHead.y >= GRID_SIZE ||
    snake.some(segment => segment.x === newHead.x && segment.y === newHead.y)
  ) {
    clearInterval(gameInterval);
    alert("Game Over!");
    return;
  }

  snake.unshift(newHead);

  // Check if snake eats the food
  if (newHead.x === food.x && newHead.y === food.y) {
    const foodBox = document.getElementById(`box-${food.x}-${food.y}`);
    foodBox.classList.remove("food");
    generateFood();
    increaseSpeed(); // Increase speed when snake eats food
    updateScore(); // Update the score when snake eats food
  } else {
    const tail = snake.pop();
    const tailBox = document.getElementById(`box-${tail.x}-${tail.y}`);
    tailBox.classList.remove("snake");
  }

  // Move snake
  const newHeadBox = document.getElementById(`box-${newHead.x}-${newHead.y}`);
  newHeadBox.classList.add("snake");
}

function updateScore() {
  const scoreElement = document.getElementById("score");
  scoreElement.textContent = "Score: " + snake.length;
}