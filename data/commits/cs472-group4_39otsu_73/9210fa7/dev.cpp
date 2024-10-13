/**
 * @file word_ladder.cpp
 * @brief Implements a function to find a word ladder between two words.
 *
 * This program finds a word ladder, a sequence of words where each word
 * in the sequence differs by exactly one character from the previous word,
 * from a given starting word to a final word. The program reads a word bank
 * from a file, takes input of the starting and final words, and prints the
 * word ladder if it exists.
 */

/// Global variable to store dead ends encountered during ladder traversal.
std::vector<std::string> deadEnds;

/**
 * @brief Finds a word ladder from a given starting word to a final word.
 *
 * @param word The current word in the ladder.
 * @param wordFinal The final word to reach.
 * @param words The word bank containing all possible words.
 * @param ladder The current word ladder sequence.
 * @return True if a word ladder is found, false otherwise.
 */
bool wordLadder(std::string word, std::string wordFinal,
/**
 * @brief Checks if a word is redundant in the ladder.
 *
 * @param word The word to check for redundancy.
 * @param ladder The current word ladder.
 * @return True if the word is redundant, false otherwise.
 */
/**
 * @brief Deletes dead ends encountered during ladder traversal.
 *
 * @param ladder The current word ladder.
 */
/**
 * @brief Reverses the word ladder.
 *
 * @param ladder The current word ladder.
 */
/**
 * @brief Main function to execute the word ladder program.
 *
 * Reads a word bank from a file, takes input of the starting and final words,
 * and prints the word ladder if it exists.
 *
 * @param argc Number of command-line arguments.
 * @param argv Array of command-line argument strings.
 * @return 0 on successful execution, non-zero on failure.
 */
    std::ifstream inFile;
    std::string word, target;
    int status = 0;

    // Check command-line arguments
    if (argc != 2) {
        status = 1;
    } else {
        inFile.open(argv[1]);

        // Read word bank from file
        while (!inFile.eof()) {
            std::string input;
            inFile >> input;
            wordBank.push_back(input);
            if (inFile.eof())
                break;
        }

        // Take input of starting and final words
        std::cin >> word >> target;

        ladder.push_back(word);
        bool found = false;
        int past_size = -1;

        // Find word ladder
        while (!found) {
            found = wordLadder(word, target, wordBank, ladder);

            if (found) {
                break;
            } else {
                if (past_size == ladder.size()) {
                    std::cout << "Solution Does Not Exist\n";
                    break;
                }
                ladder.pop_back();
                past_size = ladder.size();
            }
        }

        // Clear ladder if the final word is not reached
        if (ladder.back() != target)
            ladder.clear();

        // Print word ladder
        if (!ladder.empty())
            for (auto word : ladder)
                std::cout << word << '\n';
    }
bool wordLadder(std::string word, std::string wordFinal,
                const std::vector<std::string>& words,
                std::vector<std::string>& ladder)
    // Base case: final word reached
    if (word == wordFinal) {
        return true;
    }

    // General case: find adjacent words in the word bank
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
            bool found = wordLadder(*begin, wordFinal, words, ladder);
            if (found) {
                return true;
            } else {
                ladder.pop_back();
            }
        }
    }

    return false;
    // Check if the word is already in the ladder
    for (auto begin = ladder.begin(); begin != ladder.end(); begin++) {
        if (word.compare(*begin) == 0) {
            return true;
        }
    }
    return false;
    // Functionality not implemented
    // Could be implemented to remove dead ends encountered during ladder traversal
    // Functionality not used in current implementation
    // Could be implemented to reverse the word ladder
}