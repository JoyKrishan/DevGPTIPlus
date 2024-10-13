void searchSubstrings(std::unordered_map<std::string, int> &foundSubstrings, std::unordered_map<std::string, int> wordList,
// Displays all found substrings and their counts
void displaySubstrings(const std::unordered_map<std::string, int> &substringCounts);
    // Data structures to store word frequency and substring counts
    std::cout << "Enter target string: ";
    std::string targetString;
    std::cin >> targetString;
    std::cout << "Enter list of words (type 'END' to finish):\n";
    int wordLength = wordFrequencyMap.begin()->first.size();
    // Search for substrings
    while (targetString.size() >= wordLength)
        // Iterate through the word frequency map
            // Find the position of the word in the target string
            auto foundPosition = targetString.find(mapIter->first);
                searchSubstrings(substringCountMap, wordFrequencyMap, targetString, foundPosition, wordLength, mapIter->first);
        targetString.erase(0, wordLength);
    // Display the found substrings
        displaySubstrings(substringCountMap);
// Recursive function to search for substrings
void searchSubstrings(std::unordered_map<std::string, int> &substringCounts, std::unordered_map<std::string, int> wordList,
    // Update the index
    // Update the current substring
    // Find the next word
        if (nextWord == listIter->first)
            searchSubstrings(substringCounts, wordList, targetString, index, wordLength, currentSubstring + nextWord);
// Displays all found substrings and their counts
void displaySubstrings(const std::unordered_map<std::string, int> &substringCounts)
    for (const auto &pair : substringCounts)
        std::cout << pair.first << " - Count: " << pair.second << '\n';