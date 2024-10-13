        this.provideFeedback('Backfilled results for ' + contestName + ' with ' + rikishi); // Provide feedback
        this.displayBackfilledResults(); // Display the updated results
    }

    displayBackfilledResults() {
        var picks = this.getPicks();
        var resultsElement = document.querySelector('#backfilledResults');

        // Clear previous results
        resultsElement.textContent = '';

        // Display each contest result
        for (var contest in picks) {
            var rikishi = picks[contest];
            var resultText = document.createTextNode(contest + ': ' + rikishi);
            var resultDiv = document.createElement('div');
            resultDiv.appendChild(resultText);
            resultsElement.appendChild(resultDiv);
        }
    }

    provideFeedback(message) {
        document.querySelector('#feedback').textContent = message;