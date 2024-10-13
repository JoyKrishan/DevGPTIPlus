export default class User {
    constructor(name) {
        this.name = name || this.getStoredUser();
    }

    getStoredUser() {
        let user = localStorage.getItem('user');
        if (!user) {
            user = 'admin';
            localStorage.setItem('user', user);
        }
        return user;
    }

    getPicks() {
        const picks = JSON.parse(localStorage.getItem(this.name));
        return picks || {};
    }

    updatePicks(rikishi) {
        const picks = this.getPicks();
        const currentContest = new Date().getMonth();
        if ([0, 2, 4, 6, 8, 10].includes(currentContest)) {
            const contestName = new Date().toLocaleString('default', { month: 'long' }) + ' ' + new Date().getFullYear();
            picks[contestName] = rikishi;
            localStorage.setItem(this.name, JSON.stringify(picks));
        }
    }

    backfillResults(contestName, rikishi) {
        const picks = this.getPicks();
        picks[contestName] = rikishi;
        localStorage.setItem(this.name, JSON.stringify(picks));
    }

    switchUser(newUser) {
        localStorage.setItem('user', newUser);
        this.name = newUser;
    }

    displayBackfilledResults() {
        const picks = this.getPicks();
        const resultsElement = document.querySelector('#backfilledResults');

        // Clear previous results
        resultsElement.textContent = '';

        // Display each contest result
        for (const contest in picks) {
            const rikishi = picks[contest];
            const resultText = document.createTextNode(contest + ': ' + rikishi);
            const resultDiv = document.createElement('div');
            resultDiv.appendChild(resultText);
            resultsElement.appendChild(resultDiv);
        }
    }
}