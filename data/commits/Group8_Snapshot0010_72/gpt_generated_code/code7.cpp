   infile >> voteAmount;
   infile.ignore();
   for (int j = 0; j < voteAmount; j++) {
       getline(infile, vote);
       votes[vote]++;
   }