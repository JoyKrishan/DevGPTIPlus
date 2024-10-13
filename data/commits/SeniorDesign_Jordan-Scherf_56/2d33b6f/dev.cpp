// Function to perform the Collatz Conjecture and print the sequence
void collatzConjecture(int num) {
    std::unordered_set<int> visited; // Set to store visited numbers

    while (num != 1) {
        std::cout << num << " "; // Print the current number

        // Check for repeat points
        if (visited.find(num) != visited.end()) {
            std::cout << "(Repeat Point)" << std::endl;
            return;
        }

        visited.insert(num); // Mark the current number as visited

        // Update the current number based on Collatz Conjecture rules
        if (num % 2 == 0) {
            num /= 2;
        } else {
            num = 3 * num + 1;
        }
    std::cout << 1 << std::endl; // Print the final number in the sequence (1)
    // Get user input for the starting number
    // Validate user input
    // Perform Collatz Conjecture and print the sequence
    collatzConjecture(userInput);
