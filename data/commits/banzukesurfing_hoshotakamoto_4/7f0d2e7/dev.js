const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const dom = new JSDOM('<!doctype html><html><body></body></html>', {
    url: "http://localhost/",
    resources: "usable",
    runScripts: "dangerously",
});

global.window = dom.window;
global.document = dom.window.document;
global.localStorage = dom.window.localStorage;
const { startPlaying, switchUser, backfillResults, initialize } = require('./game');
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
    initialize();
    document.querySelector('#rikishi').value = '1';

// More tests for switchUser() and backfillResults()...