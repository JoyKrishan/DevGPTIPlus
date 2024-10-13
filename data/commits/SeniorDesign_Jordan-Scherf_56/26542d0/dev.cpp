#include <iostream>
#include <unordered_set>

int collatzConjecture(int num, std::unordered_set<int>& visited) {
    std::cout << num << " ";

    if (visited.find(num) != visited.end()) {
        std::cout << "(Repeat Point)" << std::endl;
        return num;
    }


    visited.insert(num);

    if (num % 2 == 0) {
        return collatzConjecture(num / 2, visited);
    } else {
        return collatzConjecture(3 * num + 1, visited);
    }
}

int main() {
    int userInput;

    std::cout << "Enter a positive integer: ";
    std::cin >> userInput;

    if (userInput <= 0) {
        std::cerr << "Invalid input. Please enter a positive integer." << std::endl;
        return 1;
    }

    std::unordered_set<int> visitedNumbers;
    std::cout << "Collatz Conjecture sequence: ";
    collatzConjecture(userInput, visitedNumbers);

    return 0;
}