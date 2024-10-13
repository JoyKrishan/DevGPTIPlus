// ...

function initialize() {
    var user = getUser();
    document.querySelector('#user').textContent = 'Current user: ' + user;
}

module.exports = { startPlaying, switchUser, backfillResults, initialize };