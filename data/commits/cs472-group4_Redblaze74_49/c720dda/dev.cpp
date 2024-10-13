#include "sorting.h"
#include <iostream>
#include <utility>

// Function Definitions
void bubbleSort(int numbers[], int arraySize){
    for(int i = 0; i < arraySize-1; i++){
        for(int j = 0; j < arraySize-i-1; j++){
            if(numbers[j] > numbers[j + 1]){
                std::swap(numbers[j], numbers[j + 1]);
            }
        }
    }
}
void print(const int numbers[], int arraySize){
    for(int i = 0; i < arraySize; i++){
        std::cout << numbers[i];
        if(i < arraySize - 1){
            std::cout << ", ";
        }
    }
    std::cout << std::endl;
}