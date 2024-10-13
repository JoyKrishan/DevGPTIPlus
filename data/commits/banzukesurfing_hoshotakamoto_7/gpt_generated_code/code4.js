initialize() {
    var userElement = document.querySelector('#user');
    if (userElement) {
        userElement.textContent = 'Current user: ' + this.user;
    }
    this.displayBackfilledResults(); // Display the initial results
}