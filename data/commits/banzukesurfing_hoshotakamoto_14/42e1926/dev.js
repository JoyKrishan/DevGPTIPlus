import User from './user.js';

        this.user = new User();
        const picks = this.user.getPicks();
        this.user.updatePicks(rikishi); // Update the picks with the new selection
        this.user.backfillResults(contestName, rikishi);
        this.user.displayBackfilledResults(); // Display the updated results
        this.user.initialize();