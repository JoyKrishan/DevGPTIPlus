        const game = new Game(false);
        const spy = jest.spyOn(game, 'initialize');
        expect(spy).toBeCalled();
        // Define a mock function for initGame
        const mockInitGame = jest.fn(() => {
            let game = new Game(false);
            game.initialize = mockInitialize;
            game.initialize();
        });
        // Replace the original methods with the mock functions
        initGame = mockInitGame;
        // Check if initGame has been called
        expect(mockInitGame).toBeCalled();

