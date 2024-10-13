   for (auto& [candidate, voteCount] : votes) {
       if (voteCount > maxVotes) {
           winner = parties[candidate];
           maxVotes = voteCount;
           tie = false;
       } else if (voteCount == maxVotes) {
           tie = true;
       }
   }