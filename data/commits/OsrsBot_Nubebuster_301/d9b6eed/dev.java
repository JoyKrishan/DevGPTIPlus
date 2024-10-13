	public int getCurrentLevel(final Skill skill) {
		return getCurrentLevel(skill.ordinal());
	}
		/**
         * Gets the player's current level in a skill based on their experience in
         * that skill.
         *
         * @param index The index of the skill.
         * @return The real level of the skill.
         * @see #getRealLevel(int)
         */
		return getRealLevel(getCurrentExp(skill.ordinal()));