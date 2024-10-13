test('check if switchUser updates the user in UI', () => {
    document.querySelector('#userSwitch').value = 'newUser';
    game.switchUser();
    expect(document.querySelector('#user').textContent).toBe('Current user: newUser');
});

test('check if backfillResults updates the results in UI', () => {
    document.querySelector('#backfillContest').value = 'August 2023';
    document.querySelector('#backfillRikishi').value = '2';
    game.backfillResults();
    let resultsElement = document.querySelector('#backfilledResults');
    expect(resultsElement.textContent).toContain('August 2023: 2');
});