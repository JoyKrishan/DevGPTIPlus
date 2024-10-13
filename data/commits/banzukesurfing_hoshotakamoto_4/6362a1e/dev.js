require('jest-localstorage-mock'); // import the local storage mock

beforeEach(() => {
    localStorage.clear(); // clear localStorage before each test
});

    localStorage.setItem('user', 'testUser');
    localStorage.setItem('testUser', JSON.stringify({ 'July 2023': '1' })); // Assume a previous pick
    const result = startPlaying();
    expect(result).toBe("You selected: 1\nPrevious Picks: {\"July 2023\":\"1\"}");