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
    
    // Create a Game instance without initializing it
    game = new Game(false);
    
    // Now initialize manually
    game.initialize();
});