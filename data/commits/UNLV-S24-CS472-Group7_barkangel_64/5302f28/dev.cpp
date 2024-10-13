void efficientSelectionSort(int arr[], int n) {
    for (int i = 0; i < n - 1; ++i) {
        int minIndex = i;
        for (int j = i + 1; j < n; ++j) {
            if (arr[j] < arr[minIndex]) {
        // Swap arr[i] and arr[minIndex]
        int temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;

        std::cout << arr[i];
            std::cout << " ";
    std::cout << std::endl;


    efficientSelectionSort(arr, n);
    std::cout << "Sorted array: \n";