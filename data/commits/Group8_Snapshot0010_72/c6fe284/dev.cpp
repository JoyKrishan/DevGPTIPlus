using namespace std;
int main() {
    // Variable declarations
    int cases = 0, partyAmount = 0, voteAmount = 0;
    string filename, party, candidate, vote, winner;
    int maxVotes = 0;
    bool tie = false;
    // File handling
    cout << "Enter filename: ";
    cin >> filename;
    ifstream infile(filename);
    for (int i = 0; i < cases; i++) {
        // Reset variables for each case
        unordered_map<string, int> votes;
        unordered_map<string, string> parties;
        // Read party information
        for (int j = 0; j < partyAmount; j++) {
            getline(infile, candidate);
            getline(infile, party);
        // Read vote information
        for (int j = 0; j < voteAmount; j++) {
            getline(infile, vote);
            votes[vote]++;
        // Find the winner or check for a tie
        for (auto& [candidate, voteCount] : votes) {
            if (voteCount > maxVotes) {
                winner = parties[candidate];
                maxVotes = voteCount;
            } else if (voteCount == maxVotes) {
        // Display results
        if (tie) {
            cout << "Case " << i + 1 << " results: Tie" << endl;
        } else {
            cout << "Case " << i + 1 << " results: " << winner << endl;
}