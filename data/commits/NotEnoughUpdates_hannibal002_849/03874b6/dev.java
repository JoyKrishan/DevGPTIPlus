import java.util.HashSet;
import java.util.Set;
		// Create a copy of the key set of 'blocksClicked'
		Set<Long> keysCopy = new HashSet<>(blocksClicked.keySet());

		for (Long key : keysCopy) {
			BlockData value = blocksClicked.get(key);

			if (value.blockPos.equals(pos)) {
				oldBlockData = value;
				blocksClicked.remove(key); // Modify the original map safely
			}