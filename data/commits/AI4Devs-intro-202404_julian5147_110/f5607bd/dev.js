document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.getElementById("grid-container");
    const scoreDisplay = document.getElementById("score");
    const startButton = document.getElementById("start-button");
    const resetButton = document.getElementById("reset-button");
    const saveButton = document.getElementById("save-button");
    const loadButton = document.getElementById("load-button");

    let grid = [];
    let score = 0;

    function init() {
        score = 0;
        scoreDisplay.textContent = "Puntuación: " + score;
        grid = Array.from({ length: 4 }, () => Array.from({ length: 4 }, () => 0));
        renderGrid();
        addRandomTile();
        addRandomTile();
    }

    function renderGrid() {
        gridContainer.innerHTML = "";
        grid.forEach(row => {
            row.forEach(tile => {
                const cell = document.createElement("div");
                cell.className = "cell";
                cell.textContent = tile === 0 ? "" : tile;
                cell.style.backgroundColor = getColor(tile);
                gridContainer.appendChild(cell);
            });
        });
    }

    function getColor(value) {
        switch (value) {
            case 0: return "#cdc1b4";
            case 2: return "#eee4da";
            case 4: return "#ede0c8";
            case 8: return "#f2b179";
            case 16: return "#f59563";
            case 32: return "#f67c5f";
            case 64: return "#f65e3b";
            case 128: return "#edcf72";
            case 256: return "#edcc61";
            case 512: return "#edc850";
            case 1024: return "#edc53f";
            case 2048: return "#edc22e";
            // Agrega más casos para números mayores
            default: return "#3c3a32";
        }
    }

    function addRandomTile() {
        const emptyCells = [];
        grid.forEach((row, rowIndex) => {
            row.forEach((tile, colIndex) => {
                if (tile === 0) {
                    emptyCells.push({ row: rowIndex, col: colIndex });
                }
            });
        });
        if (emptyCells.length > 0) {
            const { row, col } = emptyCells[Math.floor(Math.random() * emptyCells.length)];
            grid[row][col] = Math.random() < 0.9 ? 2 : 4;
        }
        renderGrid();
    }

    function move(direction) {
        let moved = false;
        switch (direction) {
            case "up":
                // Implementa el movimiento hacia arriba
                for (let j = 0; j < 4; j++) {
                    for (let i = 1; i < 4; i++) {
                        for (let k = i; k > 0; k--) {
                            if (grid[k][j] !== 0) {
                                if (grid[k - 1][j] === 0 || grid[k - 1][j] === grid[k][j]) {
                                    grid[k - 1][j] += grid[k][j];
                                    score += grid[k][j];
                                    grid[k][j] = 0;
                                    moved = true;
                                }
                                break;
                            }
                        }
                    }
                }
                break;
            case "down":
                // Implementa el movimiento hacia abajo
                for (let j = 0; j < 4; j++) {
                    for (let i = 2; i >= 0; i--) {
                        for (let k = i; k < 3; k++) {
                            if (grid[k][j] !== 0) {
                                if (grid[k + 1][j] === 0 || grid[k + 1][j] === grid[k][j]) {
                                    grid[k + 1][j] += grid[k][j];
                                    score += grid[k][j];
                                    grid[k][j] = 0;
                                    moved = true;
                                }
                                break;
                            }
                        }
                    }
                }
                break;
            case "left":
                // Implementa el movimiento hacia la izquierda
                for (let i = 0; i < 4; i++) {
                    for (let j = 1; j < 4; j++) {
                        for (let k = j; k > 0; k--) {
                            if (grid[i][k] !== 0) {
                                if (grid[i][k - 1] === 0 || grid[i][k - 1] === grid[i][k]) {
                                    grid[i][k - 1] += grid[i][k];
                                    score += grid[i][k];
                                    grid[i][k] = 0;
                                    moved = true;
                                }
                                break;
                            }
                        }
                    }
                }
                break;
            case "right":
                // Implementa el movimiento hacia la derecha
                for (let i = 0; i < 4; i++) {
                    for (let j = 2; j >= 0; j--) {
                        for (let k = j; k < 3; k++) {
                            if (grid[i][k] !== 0) {
                                if (grid[i][k + 1] === 0 || grid[i][k + 1] === grid[i][k]) {
                                    grid[i][k + 1] += grid[i][k];
                                    score += grid[i][k];
                                    grid[i][k] = 0;
                                    moved = true;
                                }
                                break;
                            }
                        }
                    }
                }
                break;
        }
        if (moved) {
            addRandomTile();
            renderGrid();
            checkWin();
            checkLose();
        }
    }
    

    function checkWin() {
        // Verifica si el jugador ha alcanzado el número 2048
        if (grid.some(row => row.includes(2048))) {
            alert("¡Felicidades! ¡Has ganado!");
            // Puedes agregar más acciones aquí, como reiniciar el juego
        }
    }

    function checkLose() {
        // Verifica si no hay movimientos válidos disponibles
        if (!grid.some(row => row.includes(0))) {
            let gameOver = true;
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 3; j++) {
                    if (grid[i][j] === grid[i][j + 1] || grid[j][i] === grid[j + 1][i]) {
                        gameOver = false;
                        break;
                    }
                }
                if (!gameOver) break;
            }
            if (gameOver) {
                alert("¡Juego terminado! ¡Inténtalo de nuevo!");
                // Puedes agregar más acciones aquí, como reiniciar el juego
            }
        }
    }

    startButton.addEventListener("click", () => {
        init();
    });

    resetButton.addEventListener("click", () => {
        init();
    });

    saveButton.addEventListener("click", () => {
        localStorage.setItem("2048Grid", JSON.stringify(grid));
        localStorage.setItem("2048Score", score);
        alert("Juego guardado correctamente.");
    });

    loadButton.addEventListener("click", () => {
        const savedGrid = JSON.parse(localStorage.getItem("2048Grid"));
        const savedScore = localStorage.getItem("2048Score");
        if (savedGrid && savedScore !== null) {
            grid = savedGrid;
            score = parseInt(savedScore);
            scoreDisplay.textContent = "Puntuación: " + score;
            renderGrid();
        } else {
            alert("No se encontraron datos guardados.");
        }
    });

    document.addEventListener("keydown", event => {
        switch (event.key) {
            case "ArrowUp":
                move("up");
                break;
            case "ArrowDown":
                move("down");
                break;
            case "ArrowLeft":
                move("left");
                break;
            case "ArrowRight":
                move("right");
                break;
        }
    });

    init();
});