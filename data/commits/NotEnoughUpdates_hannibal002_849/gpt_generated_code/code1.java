import java.util.LinkedList;

public class ItemCooldowns {
    // ...

    // Instead of using a TreeMap, use a LinkedList to store BlockData
    public static LinkedList<BlockData> blocksClicked = new LinkedList<>();

    // ...

    public static void checkForBlockChange(BlockPos pos, IBlockState blockState) {
        BlockData oldBlockData = null;

        // Iterate through the LinkedList and remove outdated BlockData
        long currentTime = System.currentTimeMillis();
        while (!blocksClicked.isEmpty() && currentTime - blocksClicked.getFirst().timestamp > 1500) {
            blocksClicked.removeFirst();
        }

        // Search for the BlockData matching the given position
        for (BlockData value : blocksClicked) {
            if (value.blockPos.equals(pos)) {
                oldBlockData = value;
                break; // Found, no need to continue searching
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
}