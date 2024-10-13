#include <algorithm>
// Define a custom comparator function to sort bigrams alphabetically
bool compareBigrams(const Bigram& bg1, const Bigram& bg2) {
    // First, compare word1
    if (bg1.word1 != bg2.word1) {
        return bg1.word1 < bg2.word1;
    }
    // If word1 is the same, compare word2
    return bg1.word2 < bg2.word2;
}

void sortBi(BigramDictionary& dict) {
    // Use std::sort with the custom comparator
    std::sort(dict.bigrams, dict.bigrams + dict.numberOfElements, compareBigrams);