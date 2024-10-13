#include <cstring>
const int d = 256;  // The number of characters in the input alphabet

// Function to perform the Rabin-Karp pattern matching algorithm
    int m = strlen(pattern);  // Length of the pattern
    int n = strlen(text);     // Length of the text
    int p = 0;  // Hash value for pattern
    int t = 0;  // Hash value for text
    // Calculate (d^(m-1)) % q
    // Calculate initial hash values for pattern and text
    // Iterate through the text with a sliding window to find matches
        // Check if hash values match, then check character by character
            // If the inner loop completed, a match is found
        // Update the hash value for the next window in the text
            // Ensure the hash value is non-negative
