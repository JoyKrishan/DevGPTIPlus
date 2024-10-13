#include <iostream>
#include <string>
#include <fstream>
#include <iostream>
#include <unordered_map>
#include "hashMap.h"
using namespace std;

int main()
{
    int cases = 0;                                                              //Amount of cases
    int partyAmount = 0;                                                        //Amount of parties for a case
    int voteAmount = 0;                                                         //Amount of votes for a case
    std::ifstream infile;                                                       //used for reading in file
    string stringIn;                                                            //Basic string for for infile purposes
    std::string filename;                                                       //Holds the file name
    std::string party;                                                          //Name of Party
    std::string candidate;                                                      //Name of Candidate
    std::string vote;                                                           //The person who is voted for
    std::string winner;                                                         //The name of the winner
    int maxVotes = 0;                                                           //Current votes for most voted for candidate
    int currentVotes = 0;                                                       //Used to keep track of current votes while tallying votes
    bool tie = false;                                                           //Flag for if there is a tie


    //Gets the filename, opens it, and gets the number of cases
    std::cout << "Enter filename: ";
    std::cin >> filename;
    infile.open(filename);
    infile >> cases;

    //iterates through depending on the number of test cases
    for(int i = 0; i < cases; i++)
    {
        //resets flags and hashMaps for new case
        hashMap <std::string,int> votes;
        hashMap <std::string,std::string> parties;
        tie = false;

        //Gets the number of parties and adds each party into the parties hashMap with the candidate name as the key
        infile >> partyAmount;
        infile.ignore();
        for(int j = 0; j < partyAmount; j++)
        {
            getline(infile,candidate);
            getline(infile,party);
            parties[candidate] = party;
        }

        //gets the number of votes
        infile >> voteAmount;
        infile.ignore();

        //Gets all of the votes for the current case and stores each candidates votes in the votes hashMap with the candidate name as the key
        for(int j = 0; j < voteAmount; j++)
        {
            getline(infile,vote);
            currentVotes = votes[vote];
            currentVotes += 1;
            votes[vote] = currentVotes;
        }

        //Uses iterator to go through the hashMap to find the candidate with the most votes
        for(hashMap<string,int>::iterator it = votes.begin(); it != votes.end();it++)
        {
            //If the votes of the current hashPair is greater than current maxVote, update the winner and maxVotes
            //Also sets tie to false as there will no longer be a tie
            if(it.second() > maxVotes)
            {
                winner = parties[it.first()];
                maxVotes = votes[it.first()];
                tie = false;
            }
            //if the votes of the current hashPair is ever equal to maxVotes, then we have a tie
            else if(it.second() == maxVotes)
            {
                tie = true;
            }
        }

        //If the tie flag is checked, display tie, otherwise display the winner
        if(tie)
        {
            std::cout << "Case " << i+1 << " results: Tie" << std::endl;
        }
        else
        {
            std::cout << "Case " << i+1 << " results: " << winner << std::endl;
        }
    }

    return 0;
}