#include <iostream>

// Function to fill an array with multiples of five
// Parameters:
//   array: an integer array to be filled with multiples of five
//   size: the size of the array
void fillArrayWithMultiplesOfFive(int array[], int size) {
    for (int i = 0; i < size; ++i) {
        // Assigning multiples of five to array elements
        array[i] = i * 5;
    }
}

int main() {
    // Define the size of the array
    const int arraySize = 10;
    // Declare an array to store the multiples of five
    int numbers[arraySize];

    // Call the function to fill the array with multiples of five
    fillArrayWithMultiplesOfFive(numbers, arraySize);

    // Display the elements of the array
    for (int i = 0; i < arraySize; ++i) {
        // Output each element separated by a space
        std::cout << numbers[i] << " ";
    }
    // Move to the next line after displaying all elements
    std::cout << std::endl;

    return 0;
}