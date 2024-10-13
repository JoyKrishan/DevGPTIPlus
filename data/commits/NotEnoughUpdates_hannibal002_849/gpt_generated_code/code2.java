public static void checkForBlockChange(BlockPos pos, IBlockState blockState) {
    BlockData oldBlockData = null;

    // Create a copy of the key set of 'blocksClicked'
    Set<Long> keysCopy = new HashSet<>(blocksClicked.keySet());

    for (Long key : keysCopy) {
        BlockData value = blocksClicked.get(key);

        if (value.blockPos.equals(pos)) {
            oldBlockData = value;
            blocksClicked.remove(key); // Modify the original map safely
        }
    }

    if (oldBlockData != null) {
        IBlockState oldState = oldBlockData.blockState;
        if ((oldState.getBlock() == Blocks.log || oldState.getBlock() == Blocks.log2) &&
            blockState.getBlock() == Blocks.air) {
            onBlockMined();
        }
    }
}