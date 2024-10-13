    var user = getUser();
    var picks = getPicks(user);
    var message = "You selected: " + rikishi + "\nPrevious Picks: " + JSON.stringify(picks);
    updatePicks(user, rikishi); // Update the picks with the new selection
function getUser() {
    // get user from local storage
    var user = localStorage.getItem('user');
    if (!user) {
        user = 'admin'; // default user is admin
        localStorage.setItem('user', user);
    }
    return user;
}

function getPicks(user) {
    // get picks from local storage
    var picks = JSON.parse(localStorage.getItem(user));
    if (!picks) {
        picks = {}; // initialize empty object if no picks
    }
    return picks;
}

function updatePicks(user, rikishi) {
    // update picks in local storage
    var picks = getPicks(user);
    var currentContest = new Date().getMonth();
    if ([0, 2, 4, 6, 8, 10].includes(currentContest)) { // If it's a contest month (Jan, Mar, May, Jul, Sep, Nov)
        var contestName = new Date().toLocaleString('default', { month: 'long' }) + ' ' + new Date().getFullYear();
        picks[contestName] = rikishi;
        localStorage.setItem(user, JSON.stringify(picks));
    }
}

function switchUser() {
    var newUser = $('#userSwitch').val();
    localStorage.setItem('user', newUser);
    $('#user').text('Current user: ' + newUser);
}

function backfillResults() {
    var user = getUser();
    var contestName = $('#backfillContest').val();
    var rikishi = $('#backfillRikishi').val();
    var picks = getPicks(user);
    picks[contestName] = rikishi;
    localStorage.setItem(user, JSON.stringify(picks));
}

$(document).ready(function() {
    var user = getUser();
    $('#user').text('Current user: ' + user);
});

module.exports = { startPlaying, switchUser, backfillResults };