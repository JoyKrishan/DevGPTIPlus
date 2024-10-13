
test('check if provideFeedback updates the feedback in UI', () => {
    game.provideFeedback('Test feedback message');
    expect(document.querySelector('#feedback').textContent).toBe('Test feedback message');
});