document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.getElementById("grid-container");
    const scoreDisplay = document.getElementById("score");
    const startButton = document.getElementById("start-button");
    const resetButton = document.getElementById("reset-button");

    let grid = [];
    let score = 0;

    // Inicializar el juego
    function init() {
        score = 0;
        scoreDisplay.textContent = "Puntuación: " + score;
        grid = Array.from({ length: 4 }, () => Array.from({ length: 4 }, () => 0));
        renderGrid();
        addRandomTile();
        addRandomTile();
    }

    // Renderizar el tablero
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

    // Obtener el color del fondo para cada número
    function getColor(value) {
        switch (value) {
            case 0: return "#cdc1b4";
            case 2: return "#eee4da";
            case 4: return "#ede0c8";
            // Agrega más casos para números mayores
            default: return "#cdc1b4";
        }
    }

    // Agregar una nueva ficha aleatoria (2 o 4)
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

    // Iniciar juego al hacer clic en el botón de inicio
    startButton.addEventListener("click", () => {
        init();
    });

    // Reiniciar juego al hacer clic en el botón de reinicio
    resetButton.addEventListener("click", () => {
        init();
    });

    // Inicializar el juego al cargar la página
    init();
});