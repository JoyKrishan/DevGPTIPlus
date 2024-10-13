   infile >> partyAmount;
   infile.ignore();
   for (int j = 0; j < partyAmount; j++) {
       getline(infile, candidate);
       getline(infile, party);
       parties[candidate] = party;
   }