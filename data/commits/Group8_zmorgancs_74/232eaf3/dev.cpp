bool reversi::makeMove(int x, int y, bool turn)
{
	char currentCharacter;
	char playerIcon;
	char opponentIcon;
	int aroundRow = 0;
	int aroundCollumn = 0;
	int continueRow = 0;
	int continueCollumn = 0;

	// Player 1 input check
	if(turn == true)
	{

		playerIcon = '#';
		opponentIcon = '$';

		currentCharacter = getCharacterOnBoard(x,y);

		//nested for loops to check around the array position the player chooses
		//checking for (x-1,y)(x,y)(x+1,y)(x,y-1) etc in all 8 directions
		for(aroundRow = -1; aroundRow <= 1; aroundRow++)
		{
			for(aroundCollumn = -1; aroundCollumn <= 1; aroundCollumn++)
			{
				//makes sure that the loop doesnt check the current square or
				//out of bounds array positions
				if((aroundRow == 0 && aroundCollumn == 0) || x + aroundRow < 0 || y + aroundCollumn < 0 || 
					x + aroundRow >= DIMENSION || y + aroundCollumn >= DIMENSION)
				{
					continue;
				}

				currentCharacter = getCharacterOnBoard(x + aroundRow, y + aroundCollumn);
				//ignoring the array spaces in the previous if statement, we now continue in the valid directions
				if(currentCharacter == opponentIcon)
				{
					//Moves the array position to the valid opponent icon that was just found
					continueRow = x + aroundRow;
					continueCollumn = y + aroundCollumn;

					while(continueRow >= 0 || continueRow < DIMENSION || continueCollumn >= 0 || continueCollumn < DIMENSION)
					{
						//continues in direction from nested for loop at the start of this if statement
						continueRow += aroundRow;
						continueCollumn += aroundCollumn;

						currentCharacter = getCharacterOnBoard(continueRow,continueCollumn);
						if(currentCharacter == '_')
						{
							continue;
						}
						else if(currentCharacter == opponentIcon)
						{
							continue;
						}
						else if(currentCharacter == playerIcon)
						{
							//once the program has found a range of spaces to flip, it works backwards via a for loop until
							//it gets back to the initial '_' space that the player input
							for(continueRow -= aroundRow, continueCollumn -= aroundCollumn; currentCharacter != '_';
								continueRow -= aroundRow, continueCollumn -= aroundCollumn)
								{
									//as it moves back it flips any non '_' spaces
									currentCharacter = getCharacterOnBoard(continueRow, continueCollumn);
									if(currentCharacter != '_')
									{
										updateBoard(continueRow,continueCollumn, playerIcon);
									}
									if(currentCharacter == '_')
									{
										updateBoard(x,y, playerIcon);
										return true;
									}

								}
						}
						break;
					}
				}
			}
		}
		return false;
	}
	// Player 2 input check
	if(turn == false)
	{
		playerIcon = '$';
		opponentIcon = '#';

		currentCharacter = getCharacterOnBoard(x,y);

		for(aroundRow = -1; aroundRow <= 1; aroundRow++)
		{
			for(aroundCollumn = -1; aroundCollumn <= 1; aroundCollumn++)
			{
				if((aroundRow == 0 && aroundCollumn == 0) || x + aroundRow < 0 || y + aroundCollumn < 0 || 
					x + aroundRow >= DIMENSION || y + aroundCollumn >= DIMENSION)
				{
					continue;
				}
				currentCharacter = getCharacterOnBoard(x + aroundRow, y + aroundCollumn);

				if(currentCharacter == opponentIcon)
				{
					continueRow = x + aroundRow;
					continueCollumn = y + aroundCollumn;

					while(continueRow >= 0 || continueRow < DIMENSION || continueCollumn >= 0 || continueCollumn < DIMENSION)
					{
						continueRow += aroundRow;
						continueCollumn += aroundCollumn;

						currentCharacter = getCharacterOnBoard(continueRow,continueCollumn);
						if(currentCharacter == '_')
						{
							continue;
						}
						else if(currentCharacter == opponentIcon)
						{
							continue;
						}
						else if(currentCharacter == playerIcon)
						{
							for(continueRow -= aroundRow, continueCollumn -= aroundCollumn; currentCharacter != '_';
								continueRow -= aroundRow, continueCollumn -= aroundCollumn)
								{
									currentCharacter = getCharacterOnBoard(continueRow, continueCollumn);
									if(currentCharacter != '_')
									{
										updateBoard(continueRow,continueCollumn, playerIcon);
									}
									if(currentCharacter == '_')
									{
										updateBoard(x,y, playerIcon);
										return true;
									}

								}
						}
						break;
					}
				}
			}
		}
		return false;
	}
}