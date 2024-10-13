#include <iostream>
#include <vector>
#include <cstdlib>
#include <ctime>

using namespace std;

/**
 * @brief Function to partition the array around a pivot element.
 * 
 * This function takes the last element of the array as the pivot, places the pivot element
 * at its correct position in the sorted array, and places all smaller elements (smaller than pivot)
 * to the left of the pivot and all greater elements to the right of the pivot.
 * 
 * @param arr The vector to be sorted.
 * @param low The starting index of the array.
 * @param high The ending index of the array.
 * @return int Index of the pivot element after partition.
 */
int partition(vector<int>& arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;

    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return i + 1;
}

/**
 * @brief Function to perform quicksort on a given array.
 * 
 * This function implements the Quicksort algorithm to sort the elements of a vector in non-decreasing order.
 * It recursively divides the array into sub-arrays and sorts them independently.
 * 
 * @param arr The vector to be sorted.
 * @param low The starting index of the array.
 * @param high The ending index of the array.
 */
void quicksort(vector<int>& arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quicksort(arr, low, pi - 1);
        quicksort(arr, pi + 1, high);
    }
}

int main() {
    srand(time(0)); // Seed for random number generation
    vector<int> arr; // Vector to hold the array elements
    int n = 10; // Size of the array

    // Filling the array with random integers
    for (int i = 0; i < n; i++) {
        arr.push_back(rand() % 100); // Generate random integers between 0 and 99
    }

    // Sorting the array using Quicksort algorithm
    quicksort(arr, 0, n - 1);

    // Displaying the sorted array
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;

    return 0;
}