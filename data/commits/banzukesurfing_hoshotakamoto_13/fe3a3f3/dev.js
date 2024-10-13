
    initialize() {
        this.displayBackfilledResults();
        document.querySelector("#user").textContent = 'Current user: ' + this.name;

        // Setup event listener for switching users
        document.querySelector("#switchUserButton").addEventListener('click', () => {
            const newUser = document.querySelector('#userSwitch').value;
            this.switchUser(newUser);
            document.querySelector("#user").textContent = 'Current user: ' + newUser;
        });
    }