class Solution {
    public int ladderLength(String beginWord, String endWord, List<String> wordList) {
        // Create a set for faster word lookup
        Set<String> set = new HashSet<>(wordList);
        
        // If endWord is not in wordList, it's impossible to transform, return 0
        if(!set.contains(endWord)) return 0;
        
        // Initialize a queue for BFS traversal
        Queue<String> queue = new LinkedList<>();
        queue.add(beginWord); // Add the beginWord to the queue
        
        // Initialize a set to keep track of visited words
        Set<String> visited = new HashSet<>();
        
        // Start with 1 change (beginWord)
        int changes = 1;
        
        // Start BFS traversal
        while(!queue.isEmpty()){
            int size = queue.size(); // Size of the current level of BFS
            
            // Iterate through all words at the current level
            for(int i = 0; i < size; i++){
                String word = queue.poll(); // Remove the word from the queue
                
                // If the word is the endWord, return the number of changes
                if(word.equals(endWord)) return changes;
                
                // Explore all possible transformations of the word
                for(int j = 0; j < word.length(); j++){
                    for(int k = 'a'; k <= 'z'; k++){
                        char arr[] = word.toCharArray();
                        arr[j] = (char) k;
                        
                        String str = new String(arr); // Newly formed word
                        
                        // If the word exists in the wordList and has not been visited
                        if(set.contains(str) && !visited.contains(str)){
                            queue.add(str); // Add the word to the queue
                            visited.add(str); // Mark the word as visited
                        }
                    }
                }
            }
            // Move to the next level of BFS
            ++changes;
        }
        // If the endWord cannot be reached, return 0
        return 0;
    }
}