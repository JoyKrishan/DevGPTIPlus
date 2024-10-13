
describe('Game', () => {
    beforeEach(() => {
        // Clear localStorage before each test
        localStorage.clear();
    });

    it('should render localStorage on initialization', () => {
        // Set something in localStorage
        localStorage.setItem('test', 'testValue');

        const game = new Game(true);

        // Check if the initialize function has been called and content is rendered
        // Here, it assumes that you have a way to check whether the content is rendered on the page
        expect(game.initialize).toBeCalled();
    });

    it('should always call initialize on window load', () => {
        // Define a mock function for the initialize method
        const mockInitialize = jest.fn();

        // Replace the original method with the mock function
        Game.prototype.initialize = mockInitialize;

        // Simulate window load
        require('./game.js');

        // Check if initialize has been called
        expect(mockInitialize).toBeCalled();
    });
});
