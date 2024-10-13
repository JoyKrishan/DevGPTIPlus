#include <iostream>

void fillArrayWithMultiplesOfFive(int array[], int size) {
    for (int i = 0; i < size; ++i) {
        array[i] = i * 5;
    }
}

int main() {
    const int arraySize = 10;
    int numbers[arraySize];

    fillArrayWithMultiplesOfFive(numbers, arraySize);

    for (int i = 0; i < arraySize; ++i) {
        std::cout << numbers[i] << " ";
    }
    std::cout << std::endl;

    return 0;
}