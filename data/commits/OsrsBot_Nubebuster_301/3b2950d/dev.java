		for (int i = 0; i < ret.length; i++)
				case 0 -> item.doAction(itemCount > 1 ? "Deposit-All" : "Deposit-1");
				case 1 -> item.doClick();
				case 5 -> item.doAction("Deposit-" + number);
				default -> {
				}
	 * @param name   The name of the item.
				case 0 -> item.doAction(itemCount > 1 ? "Deposit-All" : "Deposit-1");
				case 1 -> item.doClick();
				case 5 -> item.doAction("Deposit-" + number);
				default -> {
				}
	 *
	 * @param index Gets the bank tab at the specified index
	 * @return The bank tab
					if (item.getName().contains(name2) && item.getComponent().getName().equals(name2)) {
	 * Checks whether the bank is open.
	 * Checks whether the deposit box is open.
						if (unreachableBanker.getLocation().equals(location)) {
	}

		if (isOpen()) return true;
				} else {
	 * <code>false</code>.
		if (!isOpen()) return false;
		if (!isOpen()) return false;
		if (!isOpen()) return false;
		if (!isOpen()) return false;
		if (!isOpen()) return false;
		if (!isOpen()) return false;
		if (rsi == null) return false;
		if (item == null) return false;
			case 0 -> action = "Withdraw-All";
			case 1, 5, 10 -> action = defaultAction;
			default -> {
				} else if (item.doAction("Withdraw-X")) {
			}
	/**
	 * Tries to withdraw-all an item.
	 *
	 * @param itemID The ID of the item.
	 * @return <code>true</code> on success.
	 */
	public boolean withdrawAll(final int itemID) {
		return withdraw(itemID, 0);
	}
	 * @param name  The name of the item.
	 * @param count The number to withdraw.
		if (!isOpen()) return false;
		if (rsi == null) return false;
		if (item == null) return false;
			case 0 -> action = "Withdraw-All";
			case 1, 5, 10 -> action = defaultAction;
			default -> {
				} else if (item.doAction("Withdraw-X")) {
			}
	/**
	 * Tries to withdraw-all an item.
	 *
	 * @param name The name of the item.
	 * @return <code>true</code> on success.
	 */
	public boolean withdrawAll(final String name) {
		return withdraw(name, 0);
	}


						item.getName().toLowerCase().contains(name.toLowerCase())) {