var level = 3;
	#minus one for dictionary referencing
	var dicLevel = level - 1
	# get the level completing dictionary entry
	var levelStatus = PlayerInventory.levels
	# check if unlocked
	if (levelStatus[dicLevel][1] <= 0):
		# if not unlocked disable button interactions
		# and change text to signify its locked and why
		disabled = true
		text = "Level " + str(level) + "\nLocked"
		tooltip_text = "Complete " + levelStatus[dicLevel - 1][0] + " to unlock"