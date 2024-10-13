public int ladderLength(String beginWord, String endWord, List<String> wordList) {
    // Create a set from the wordList for faster lookup
    Set<String> set = new HashSet<>(wordList);
    
    // Check if endWord is not present in the wordList, return 0
    if (!set.contains(endWord)) 
        return 0;

    // Create a queue for BFS traversal
    Queue<String> queue = new LinkedList<>();
    // Add the beginWord to the queue to start the BFS traversal
    queue.add(beginWord);

    // Create a set to keep track of visited words
    Set<String> visited = new HashSet<>();
    // Mark the beginWord as visited
    visited.add(beginWord);
    
    // Initialize the number of changes needed to transform beginWord to endWord
    int changes = 1;
    
    // Begin BFS traversal
    while (!queue.isEmpty()) {
        int size = queue.size();
        // Process all words at the current level of BFS
        for (int i = 0; i < size; i++) {
            // Retrieve the current word from the queue
            String word = queue.poll();
            // If the current word equals endWord, return the number of changes needed
            if (word.equals(endWord)) 
                return changes;
            
            // Iterate through each character of the word
            for (int j = 0; j < word.length(); j++) {
                // Iterate through all possible characters from 'a' to 'z'
                for (int k = 'a'; k <= 'z'; k++) {
                    // Replace the j-th character of the word with the character represented by k
                    char[] arr = word.toCharArray();
                    arr[j] = (char) k;
                    // Form a new word after replacement
                    String str = new String(arr);
                    
                    // If the new word is present in the wordList and is not visited yet
                    if (set.contains(str) && !visited.contains(str)) {
                        // Add the new word to the queue for further exploration
                        queue.add(str);
                        // Mark the new word as visited
                        visited.add(str);
        // Increment the number of changes needed as we move to the next level in BFS
        ++changes;
    // If no transformation sequence is found, return 0
    return 0;
}