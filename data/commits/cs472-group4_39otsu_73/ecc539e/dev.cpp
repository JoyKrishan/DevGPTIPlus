#include <iostream>
#include <fstream>
#include <string>
#include <vector>

bool wordLadder(std::string word, std::string wordFinal, 
                const std::vector<std::string>& words,
                std::vector<std::string>& ladder);

bool isRedundant(std::string word, std::vector<std::string>& ladder);

void deleteDeadEnds(std::vector<std::string>& ladder);

void reverseLadder(std::vector<std::string>& ladder);

std::vector<std::string> deadEnds;

int main(int argc, char* argv[])
{
    std::vector<std::string> wordBank;
    std::vector<std::string> ladder;
	std::ifstream inFile;
	std::string word, target;
	int status = 0;

	if (argc != 2) {
		status = 1;
	}else {

		inFile.open(argv[1]);

		while (!inFile.eof()) {

			std::string input;
			inFile >> input;
			wordBank.push_back(input);
			if (inFile.eof())
				break;

		}

		std::cin >> word >> target;

		ladder.push_back(word);
		bool found = false;
		int past_size = -1;
		while (!found) {
			found = wordLadder(word, target, wordBank, ladder);

			if (found) {
				break;
			}else {
				if (past_size == ladder.size()) {
					std::cout << "Solution Does Not Exist\n";
					break;
				}
				ladder.pop_back();
				
				past_size = ladder.size();
			}
		}
		//deleteDeadEnds(ladder);
		
		if (ladder.back() != target)
			ladder.clear();

		if(!ladder.empty())
			for (auto word : ladder)
				std::cout << word << '\n';
	}

    return 0;
}

bool wordLadder(std::string word, std::string wordFinal, const std::vector<std::string>& words,std::vector<std::string>& ladder)
{
	// base case
	if (word == wordFinal) {
		return true;
	}
	// general case
	std::string strcomp;
	int counter = 0;
	for (auto begin = words.begin(); begin != words.end(); begin++) {
		strcomp = *begin;
		counter = 0;
		if (isRedundant(*begin, ladder)) {
			continue;
		}

		for (int i = 0; i < word.length(); i++) {
			if (word[i] == strcomp[i]) 
				counter++;
		}

		if (counter == word.length() - 1) {
			ladder.push_back(*begin);
			//std::cout << *begin << "\n";
			bool found = wordLadder(*begin, wordFinal, words, ladder);
			if (found) {
				return true;
			}else {
				ladder.pop_back();
			}
		}
		
	}

	return false;
}

bool isRedundant(std::string word, std::vector<std::string>& ladder)
{
	bool redundant = false;

	if (!ladder.empty()) {
		for (auto begin = ladder.begin(); begin != ladder.end(); begin++) {
			if (word.compare(*begin) == 0) {
				redundant = true;
			}
		}
	}


	return redundant;
}

void deleteDeadEnds(std::vector<std::string>& ladder)
{
	std::vector<std::string> copy;
	auto location = ladder.begin();

	for (auto end = ladder.end() -1; end != ladder.begin(); end--) {
		int counter = 0;
		std::string curr = *end;
		std::string next = *(end - 1);

		for (int i = 0; i < curr.length(); i++) {
			if (curr[i] == next[i]) {
				counter++;
			}
		}

		if (counter != curr.length() - 1) {
			location = end;
			break;
		}
		if (next == "chord")
			std::cout <<"foundchord\n";
	}

	for (auto x = location; x != ladder.end(); x++) {
		copy.push_back(*x);
	}
	ladder.clear();
	ladder = copy;
}

void reverseLadder(std::vector<std::string>& ladder)
{
	std::vector<std::string> copy;

	for (auto end = ladder.end() - 1; end != ladder.begin(); end--) {
		copy.push_back(*end);
	}

	ladder = copy;
}