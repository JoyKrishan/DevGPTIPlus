function startPlaying() {
    var rikishi = $('#rikishi').val();
    var message = "You selected: " + rikishi;
    return message;
}

module.exports = { startPlaying };