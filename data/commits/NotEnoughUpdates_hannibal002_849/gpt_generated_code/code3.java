Set<Long> keysCopy = new HashSet<>(blocksClicked.keySet());
for (Long key : keysCopy) {
    if (key <= currentTime - 1500) {
        blocksClicked.remove(key);
    }
}