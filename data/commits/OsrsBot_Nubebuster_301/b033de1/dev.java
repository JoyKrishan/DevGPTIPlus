				int id = inventory[r][c];
				if (id != -1 && id != EMPTY_SLOT_ITEM_ID) {
					boolean isInItems = false;
					for (int i : items) {
						isInItems |= (i == id);
					}
					if (!isInItems) {
						foundDroppable |= dropItem(c, r);