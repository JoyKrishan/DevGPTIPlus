let player;
let aliens = [];
let bullets = [];
let score = 0;
let gameOver = false;
let gameWon = false;

function setup() {
    createCanvas(800, 600);
    player = new Player();
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 3; j++) {
            aliens.push(new Alien(i * 80 + 80, j * 60 + 40));
        }
    }
}

function draw() {
    background(0);

    if (gameOver) {
        textSize(32);
        fill(255, 0, 0);
        text("Game Over! Score: " + score, width / 2 - 140, height / 2);
        noLoop();  // Detiene la ejecución del bucle draw
    } else if (gameWon) {
        textSize(32);
        fill(0, 255, 0);
        text("You Win! Score: " + score, width / 2 - 130, height / 2);
        noLoop();  // Detiene la ejecución del bucle draw
    } else {
        player.display();
        player.move();

        for (let i = bullets.length - 1; i >= 0; i--) {
            bullets[i].move();
            bullets[i].display();
            for (let j = aliens.length - 1; j >= 0; j--) {
                if (bullets[i].hits(aliens[j])) {
                    aliens.splice(j, 1);
                    bullets.splice(i, 1);
                    score += 10;
                    break;
                }
            }
        }

        let edge = false;

        for (let i = aliens.length - 1; i >= 0; i--) {
            aliens[i].move();
            aliens[i].display();
            if (aliens[i].x > width - aliens[i].r || aliens[i].x < aliens[i].r) {
                edge = true;
            }
            if (aliens[i].y + aliens[i].r >= player.y - 30) {  // Ajuste para detectar contacto con el jugador
                gameOver = true;
            }
        }

        if (edge) {
            for (let alien of aliens) {
                alien.shiftDown();
            }
        }

        if (aliens.length === 0) {
            gameWon = true;
        }

        // Mover gradualmente los alienígenas hacia abajo
        for (let alien of aliens) {
            alien.descend();  // Llamada a la función para mover los alienígenas hacia abajo gradualmente
        }
    }
}

function keyPressed() {
    if (keyCode === RIGHT_ARROW) {
        player.setDirection(1);
    } else if (keyCode === LEFT_ARROW) {
        player.setDirection(-1);
    }

    if (keyCode === 32) {  // Espacio para disparar
        bullets.push(new Bullet(player.x, height - 20));
    }
}

class Player {
    constructor() {
        this.x = width / 2;
        this.y = height - 20;  // Establece la posición y del jugador
        this.xdir = 0;
    }

    display() {
        fill(255);
        rectMode(CENTER);
        rect(this.x, this.y, 20, 60);
    }

    setDirection(dir) {
        this.xdir = dir;
    }

    move() {
        this.x += this.xdir * 5;
        this.x = constrain(this.x, 20, width - 20);
    }
}

class Alien {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 25;
    }

    display() {
        fill(255, 0, 0);
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }

    move() {
        this.x += random(-1, 1);  // Movimiento horizontal ligero
    }

    shiftDown() {
        this.y += 40; // Mueve hacia abajo cada vez que toca un borde
    }

    descend() {
        this.y += 0.5; // Mover gradualmente hacia abajo en cada ciclo de draw
    }
}

class Bullet {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    display() {
        fill(50, 250, 50);
        noStroke();
        ellipse(this.x, this.y, 12, 12);
    }

    move() {
        this.y -= 10;
    }

    hits(alien) {
        let d = dist(this.x, this.y, alien.x, alien.y);
        return d < 25;
    }
}