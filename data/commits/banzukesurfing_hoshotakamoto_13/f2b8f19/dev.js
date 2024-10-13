
test('check if initialize updates the user in UI and sets event listener', () => {
    user.initialize();
    expect(document.querySelector('#user').textContent).toBe('Current user: testUser');

    // Test switchUser event listener
    document.querySelector('#userSwitch').value = 'newUser';
    document.querySelector("#switchUserButton").click();
    expect(localStorage.getItem('user')).toBe('newUser');
    expect(document.querySelector('#user').textContent).toBe('Current user: newUser');
});
