#include <iostream>
#include <vector>

void merge(std::vector<int>& array, int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;

    std::vector<int> leftArray(n1), rightArray(n2);

    for (int i = 0; i < n1; ++i)
        leftArray[i] = array[left + i];
    for (int j = 0; j < n2; ++j)
        rightArray[j] = array[mid + 1 + j];

    int i = 0, j = 0, k = left;

    while (i < n1 && j < n2) {
        if (leftArray[i] <= rightArray[j])
            array[k++] = leftArray[i++];
        else
            array[k++] = rightArray[j++];
    }

    while (i < n1)
        array[k++] = leftArray[i++];
    while (j < n2)
        array[k++] = rightArray[j++];
}

void mergeSort(std::vector<int>& array, int begin, int end) {
    if (begin < end) {
        int mid = begin + (end - begin) / 2;
        mergeSort(array, begin, mid);
        mergeSort(array, mid + 1, end);
        merge(array, begin, mid, end);
    }
}

void printArray(const std::vector<int>& array) {
    for (int num : array)
        std::cout << num << " ";
    std::cout << std::endl;
}

int main() {
    std::vector<int> arr = {12, 11, 13, 5, 6, 7};
    std::cout << "Given array is:\n";
    printArray(arr);

    mergeSort(arr, 0, arr.size() - 1);

    std::cout << "\nSorted array is:\n";
    printArray(arr);

    return 0;
}