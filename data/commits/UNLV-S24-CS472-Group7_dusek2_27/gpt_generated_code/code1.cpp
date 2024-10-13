#include <iostream>
#include <unordered_map>
#include <string>

// Searches for all possible substrings that can be formed by concatenating words from the word list within the target string
void findSubstrings(std::unordered_map<std::string, int>& substringCounts, std::unordered_map<std::string, int> wordList, 
                    const std::string& targetString, int startIndex, int wordLength, const std::string& currentSubstring = "");

// Displays all found substrings and their counts
void displaySubstrings(const std::unordered_map<std::string, int>& substringCounts);

int main() {
    std::unordered_map<std::string, int> wordFrequencyMap;
    std::unordered_map<std::string, int> substringCountMap;

    std::cout << "Enter target string: ";
    std::string targetString;
    std::cin >> targetString;

    std::cout << "Enter list of words (type 'END' to finish):\n";
    std::string word;
    while (std::cin >> word && word != "END") {
        wordFrequencyMap[word]++;
    }

    if (wordFrequencyMap.empty()) {
        std::cout << "Word list is empty.\n";
        return 0;
    }

    int wordLength = wordFrequencyMap.begin()->first.size();

    std::cout << "List of substrings:\n";
    findSubstrings(substringCountMap, wordFrequencyMap, targetString, 0, wordLength);

    if (substringCountMap.empty()) {
        std::cout << "No substrings found.\n";
    } else {
        displaySubstrings(substringCountMap);
    }
    return 0;
}

void findSubstrings(std::unordered_map<std::string, int>& substringCounts, std::unordered_map<std::string, int> wordList, 
                    const std::string& targetString, int startIndex, int wordLength, const std::string& currentSubstring) {
    if (startIndex + wordLength > targetString.size()) return;

    std::string foundWord = targetString.substr(startIndex, wordLength);
    if (wordList.find(foundWord) != wordList.end()) {
        std::string newSubstring = currentSubstring + foundWord;
        wordList[foundWord]--;
        if (wordList[foundWord] == 0) {
            wordList.erase(foundWord);
        }

        if (wordList.empty()) {
            substringCounts[newSubstring]++;
        } else {
            findSubstrings(substringCounts, wordList, targetString, startIndex + wordLength, wordLength, newSubstring);
        }
    }
}

void displaySubstrings(const std::unordered_map<std::string, int>& substringCounts) {
    for (const auto& pair : substringCounts) {
        std::cout << pair.first << " - Count: " << pair.second << '\n';
    }
}