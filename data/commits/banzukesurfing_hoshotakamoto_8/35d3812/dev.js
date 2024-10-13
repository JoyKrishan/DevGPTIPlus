    constructor(initializeImmediately = false) {
        if (initializeImmediately) {
            this.initialize();
        }
        const rikishi = document.querySelector('#rikishi').value;
        const picks = this.getPicks();
        const message = "You selected: " + rikishi + "\nPrevious Picks: " + JSON.stringify(picks);
        let user = localStorage.getItem('user');
        const picks = JSON.parse(localStorage.getItem(this.user));
            return {};
        const picks = this.getPicks();
        const currentContest = new Date().getMonth();
            const contestName = new Date().toLocaleString('default', { month: 'long' }) + ' ' + new Date().getFullYear();
        const newUser = document.querySelector('#userSwitch').value;
        const contestName = document.querySelector('#backfillContest').value;
        const rikishi = document.querySelector('#backfillRikishi').value;
        const picks = this.getPicks();
        const picks = this.getPicks();
        const resultsElement = document.querySelector('#backfilledResults');
        for (const contest in picks) {
            const rikishi = picks[contest];
            const resultText = document.createTextNode(contest + ': ' + rikishi);
            const resultDiv = document.createElement('div');
        const userElement = document.querySelector('#user');
        // Add event listeners
        document.querySelector("#startPlayingButton").addEventListener('click', () => this.startPlaying());
        document.querySelector("#switchUserButton").addEventListener('click', () => this.switchUser());
        document.querySelector("#backfillResultsButton").addEventListener('click', () => this.backfillResults());
    }
    window.game = new Game();