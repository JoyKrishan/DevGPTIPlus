#include <iostream>
using namespace std;

// Function to perform a complex mathematical operation
int complex_operation(int x, int y) {
    // Calculate 'a'
    int a = (x / 2) * y;
    a = a + (x % 3);

    // Calculate 'b'
    int b = x;
    b = b + (y / 2);

    // Calculate 'c'
    int c = x * y;
    c = c + (x / y);

    // Calculate intermediate result
    int result = a * b;

    // Final result calculation
    result = result / c;

    return result;
}

int main() {
    // Input values
    int x = 10, y = 5;

    // Perform complex operation and store the result
    int result = complex_operation(x, y);

    // Output the result
    cout << "Result of complex operation: " << result << endl;

    return 0;
}