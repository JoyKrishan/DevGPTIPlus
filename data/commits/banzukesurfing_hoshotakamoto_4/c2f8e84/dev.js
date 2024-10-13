    var rikishi = document.querySelector('#rikishi').value;
        user = 'admin';
        picks = {};
    if ([0, 2, 4, 6, 8, 10].includes(currentContest)) {
    var newUser = document.querySelector('#userSwitch').value;
    document.querySelector('#user').textContent = 'Current user: ' + newUser;;
    var contestName = document.querySelector('#backfillContest').value;
    var rikishi = document.querySelector('#backfillRikishi').value;
function initialize() {
    var userElement = document.querySelector('#user');
    if (userElement) {
        userElement.textContent = 'Current user: ' + user;
    }
}

initialize();
module.exports = { startPlaying, switchUser, backfillResults, initialize };