// game.js

// ... existing code ...

export function initGame() {
    if (typeof window !== 'undefined') {
        window.game = new Game(true);
    }
}