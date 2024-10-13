#include <iostream> 
#include <fstream>
#include <string>
#include "LL.h" // Assuming LL.h contains the definition of LL class.

int main(){
    // Prompt the user for a file name.
    // Read in the file into the linked list.

    // List to store the doubly linked list.
    LL<int> list;
    
    // Iterators to keep track of positioning.
    LL<int>::Iterator t1;    // Tracker 1
    LL<int>::Iterator t2;    // Tracker 2
    LL<int>::Iterator t3;    // Tracker 3
    LL<int>::Iterator print; // Iterator for printing the outcome.

    // File handling variables.
    std::ifstream inFile;    // File reading
    std::string fileName;    // Input File
    int input;               // Data input from file 
    bool isSorted = false;   // Flag indicating whether the array is sorted 

    // Prompt the user to enter the filename.
    std::cout << "Enter filename:";
    std::cin >> fileName;
    inFile.open(fileName);

    // Read in the integers from the file into the doubly linked list.
    while(inFile >> input){
        list.tailInsert(input);
    }
    inFile.close();

    // Sorting algorithm (Brick Sort aka OddEven Sorting)
    // Brick sort works in pairs. 
    while(!isSorted){
        isSorted = true; // Assume the list is sorted initially.

        // Even Sort: sorting even indexed elements.
        for(t1 = list.begin(); t1 != t2; t1++){
            t3 = t1;
            t3++;
            // Check if t3 reaches the end of the list (nullptr) to avoid out of bounds.
            if(t3 == t2){
                break;
            }
            // Compare adjacent elements and swap if necessary.
            if(*t1 > *t3){
                list.swapNodes(t1,t3);
                isSorted = false;
            }
            t1++;
            // Check if t1 reaches the end of the list (nullptr) to avoid out of bounds.
            if(t1 == t2){
                break;
            }
        }

        // Odd Sort: sorting odd indexed elements.
        t1 = list.begin();      // Start from the beginning of the list.
        t1++;                   // Move to the first odd-indexed element.

        // Inner loop for sorting.
        for(t1; t1 != t2; t1++){
            t3 = t1;            // Set t3 to the current position.
            t3++;               // Move t3 to the next position.
            
            // Check if t3 reaches the end of the list (nullptr) to avoid out of bounds.
            if(t3 == t2){
                break;
            }
            
            // Compare adjacent elements and swap if necessary.
            if(*t1 > *t3){
                list.swapNodes(t1,t3);
                isSorted = false;
            }

            t1++;
            // Check if t1 reaches the end of the list (nullptr) to avoid out of bounds.
            if(t1 == t2){
                break;
            }
        }
    }

    // Start printing from the beginning of the list.
    print = list.begin();

    // Print the sorted list.
    while(print != nullptr){
        std::cout << *print << "\n";
        print++;
    }
}