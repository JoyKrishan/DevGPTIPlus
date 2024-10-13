import 'jest-localstorage-mock';
import User from './user.js';

let user;

beforeEach(() => {
    localStorage.clear();
    // set localStorage values
    localStorage.setItem('user', 'testUser');
    localStorage.setItem('testUser', JSON.stringify({ 'July 2023': '1' }));

    document.body.innerHTML = `
        <p id="user"></p>
        <select id="rikishi">
            <option value="1">Rikishi 1</option>
            <option value="2">Rikishi 2</option>
        </select>
        <button id="startPlayingButton">Start Playing</button>
        <button id="switchUserButton">Switch User</button>
        <input id="userSwitch" type="text">
        <input id="backfillContest" type="text">
        <input id="backfillRikishi" type="text">
        <button id="backfillResultsButton">Backfill Results</button>
        <div id="backfilledResults"></div>
        <p id="feedback"></p>
    `;
    user = new User('testUser');
});

test('check if user is defined and picks are correct', () => {
    const picks = user.getPicks();
    expect(picks).toEqual({ 'July 2023': '1' });
});

test('check if switchUser updates the user correctly', () => {
    user.switchUser('newUser');
    expect(localStorage.getItem('user')).toBe('newUser');
});

test('check if backfillResults updates the results correctly', () => {
    user.backfillResults('May 2023', '2');
    let picks = user.getPicks();
    expect(picks['May 2023']).toBe('2');
});