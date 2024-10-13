// ...

const { startPlaying, switchUser, backfillResults, initialize } = require('./game');

beforeEach(() => {
    localStorage.clear(); // clear localStorage before each test
    // Reset the HTML body before each test
    document.body.innerHTML = `
        <p id="user"></p>
        <select id="rikishi">
            <option value="1">Rikishi 1</option>
            <option value="2">Rikishi 2</option>
        </select>
        <input id="userSwitch" type="text">
        <input id="backfillContest" type="text">
        <input id="backfillRikishi" type="text">
    `;
    initialize(); // Call the initialization function here
});

// ...