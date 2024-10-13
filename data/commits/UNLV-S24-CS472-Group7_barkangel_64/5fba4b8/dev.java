    
    /**
     * Method to sort an array using Heap Sort.
     * 
     * @param arr The array to be sorted.
     */
        
        // Build heap (rearrange array)
        
        // One by one extract an element from heap
            // Move current root to end
            
            // call heapify on the reduced heap
    
    /**
     * Heapify a subtree rooted with node i which is an index in arr[].
     * 
     * @param arr The array to be heapified.
     * @param n   Size of the heap.
     * @param i   The index of the root of the subtree to be heapified.
     */
        int largest = i; // Initialize largest as root
        int l = 2 * i + 1; // left = 2*i + 1
        int r = 2 * i + 2; // right = 2*i + 2
        
        // If left child is larger than root
        
        // If right child is larger than largest so far
        
        // If largest is not root
            
            // Recursively heapify the affected sub-tree
    
    /**
     * A utility function to print the array.
     * 
     * @param arr The array to be printed.
     */
    