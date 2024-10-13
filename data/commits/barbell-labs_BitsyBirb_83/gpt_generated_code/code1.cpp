#include <iostream>
#include <string>

std::string findMonth(int index) {
    const int startingIndices[] = {0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334};
    const char* monthNames[] = {"JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"};

    for (int i = 0; i < 12; ++i) {
        if (index >= startingIndices[i] && index < startingIndices[i + 1]) {
            return monthNames[i];
        }
    }

    return ""; // Handle out-of-range input
}

int findDay(const std::string& month, int index) {
    const int startingIndices[] = {0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334};

    for (int i = 0; i < 12; ++i) {
        if (month == findMonth(startingIndices[i])) {
            return index - startingIndices[i] + 1;
        }
    }

    return -1; // Handle invalid month input
}

int main() {
    int index;
    std::cout << "Enter the index (1-365): ";
    std::cin >> index;

    if (index < 1 || index > 365) {
        std::cerr << "Invalid index.\n";
        return 1;
    }

    std::string month = findMonth(index);
    int date = findDay(month, index);

    std::cout << "Month: " << month << "\n";
    std::cout << "Day in month: " << date << "\n";

    return 0;
}