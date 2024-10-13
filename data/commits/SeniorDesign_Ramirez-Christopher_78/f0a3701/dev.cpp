#include <iostream>

using namespace std;

int main() {
    // Declare variables
    int num; // Input number
    cout << "Enter a number: ";
    cin >> num; // Take input from user
    cout << "\n\n";
    
    int oldNum; // Variable to store original number
    int remaining; // Variable to keep track of remaining number
    int divSum = 0; // Variable to store sum of divisors

    // Calculate sum of proper divisors of input number
    remaining = num;
    for (int i = 1; i <= remaining; ++i) {
        if (remaining == i) {
            break;
        }
        if (num % i == 0) {
            divSum += i; // Add divisor to sum
            remaining = num / i; // Update remaining number
            if (i != (num / i) && (num / i) != num) {
                divSum += num / i; // Add other divisor to sum if not equal to input number
            }
        }
    }

    // Store original number, update number with sum of divisors
    oldNum = num;
    num = divSum;
    remaining = divSum;
    divSum = 0;

    // Calculate sum of proper divisors of new number (sum of divisors)
    for (int i = 1; i <= remaining; ++i) {
        if (remaining == i) {
            break;
        }
        if (num % i == 0) {
            divSum += i; // Add divisor to sum
            remaining = num / i; // Update remaining number
            if (i != (num / i) && (num / i) != num) {
                divSum += num / i; // Add other divisor to sum if not equal to new number
            }
        }
    }

    // Check if sum of divisors of new number equals original number
    if (divSum == oldNum) {
        cout << "AMICABLE NUMBER!"; // Print message if amicable number
    }

    return 0;
}