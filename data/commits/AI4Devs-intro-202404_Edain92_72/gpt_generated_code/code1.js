const startButton = document.getElementById("startButton");
const gameContainer = document.getElementById("gameContainer");

const GRID_SIZE = 15;
let snake = [{ x: 0, y: 0 }];
let food = { x: 0, y: 0 };
let direction = "right";
let gameInterval;
let speed = 500; // Initial speed of the snake (in ms)

function initializeGame() {
  // Create grid
  for (let i = 0; i < GRID_SIZE; i++) {
    for (let j = 0; j < GRID_SIZE; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.id = `box-${i}-${j}`;
      gameContainer.appendChild(box);
    }
  }

  // Generate initial snake
  const initialSnakeBox = document.getElementById(`box-${snake[0].x}-${snake[0].y}`);
  initialSnakeBox.classList.add("snake");

  // Generate initial food
  generateFood();
}

function startGame() {
  startButton.style.display = "none";
  gameContainer.style.display = "block";
  initializeGame();
  gameInterval = setInterval(moveSnake, speed); // Start the game with the initial speed
}

function generateFood() {
  let x = Math.floor(Math.random() * GRID_SIZE);
  let y = Math.floor(Math.random() * GRID_SIZE);

  while (snake.some(segment => segment.x === x && segment.y === y)) {
    x = Math.floor(Math.random() * GRID_SIZE);
    y = Math.floor(Math.random() * GRID_SIZE);
  }

  food = { x, y };
  const foodBox = document.getElementById(`box-${food.x}-${food.y}`);
  foodBox.classList.add("food");
}

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
  } else {
    const tail = snake.pop();
    const tailBox = document.getElementById(`box-${tail.x}-${tail.y}`);
    tailBox.classList.remove("snake");
  }

  // Move snake
  const newHeadBox = document.getElementById(`box-${newHead.x}-${newHead.y}`);
  newHeadBox.classList.add("snake");
}

function increaseSpeed() {
  speed -= 50; // Decrease interval time by 50ms
  clearInterval(gameInterval); // Stop current interval
  gameInterval = setInterval(moveSnake, speed); // Start new interval with updated speed
}

document.addEventListener("keydown", e => {
  if (e.key === "ArrowUp" && direction !== "down") direction = "up";
  else if (e.key === "ArrowDown" && direction !== "up") direction = "down";
  else if (e.key === "ArrowLeft" && direction !== "right") direction = "left";
  else if (e.key === "ArrowRight" && direction !== "left") direction = "right";
});

startButton.addEventListener("click", startGame);