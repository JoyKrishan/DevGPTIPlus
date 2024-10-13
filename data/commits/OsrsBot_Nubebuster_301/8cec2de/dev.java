import net.runelite.client.modified.RuneLite;
				methods.mouse.drag((int) comp.getCenter().getX(), (int) comp.getCenter().getY());
	 * <code>false</code>.
	 * <code>false</code>.
	 * or -1 if the slot is empty.
				//TODO this is always true. Who is the author?
	 * <code>false</code>.
		if (item == null) return false;
	 * <code>false</code>.
	 * <code>false</code> if not (e.g., if item is undroppable)
	 * Checks whether your inventory contains the provided item ID.
	 * provided; otherwise <code>false</code>.
	 * Checks whether your inventory contains the provided item name.
	 * provided; otherwise <code>false</code>.
	 * Checks whether your inventory contains all of the provided item
	 * the item IDs provided; otherwise <code>false</code>.
	 * Checks whether your inventory contains all of the provided item
	 * the item IDs provided; otherwise <code>false</code>.
	 * Checks whether your inventory contains at least one of the
	 * otherwise <code>false</code>.
	 * Checks whether your inventory contains at least one of the
	 * otherwise <code>false</code>.
	 * Checks whether your inventory is full.
	 * <code>false</code>.
	 * Checks whether your inventory is empty.
	 * <code>false</code>.
	 * Checks whether an inventory item is selected.
	 * <code>false</code>.
		if (itemID == -1 || itemID == EMPTY_SLOT_ITEM_ID) return false;
		if (open() && !item.doAction("Use")) return false;
	 * otherwise <code>false</code>.
	 * @param getLast  Optional: <code>true</code> get the last item in the inventory instead of the first one
	 * otherwise <code>false</code>.
		} else {
	 * @param name       The first item to use.
	 * otherwise <code>false</code>.
	 * RSItem and RSObject; otherwise <code>false</code>.
	 * RSItem and RSObject; otherwise <code>false</code>.
		} else {
	 * @param name   The item name to use on the object.
	 * RSItem and RSObject; otherwise <code>false</code>.
	 * <code>Point</code>.
	 * selected.


				methods.runeLite.getInjector().getInstance(ScheduledExecutorService.class).submit(() -> {
		RuneLite.getInjector().getInstance(DrawManager.class).requestNextFrameListener(imageCallback);
	 * @param img   the client image
	 * <code>RSItem[0]</code>.
				items.add(new RSItem(methods, invItems[i], cachedItems[i]));

				RSItem[] addItems = new RSItem[filterItems.length + 1];
	 * @param names         The item names to exclude.
	 * @param names         the item names to include