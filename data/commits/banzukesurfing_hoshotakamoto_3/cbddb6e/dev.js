global.$ = jest.fn(() => ({
    val: jest.fn(() => '1')
}));

test('check if startPlaying is defined and returns expected value', () => {
    const result = startPlaying()
    expect(result).toBe("You selected: 1");