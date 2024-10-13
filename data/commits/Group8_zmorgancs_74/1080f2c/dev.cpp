    char playerIcon;
    char opponentIcon;
    if(turn)
    {
        playerIcon = '#';
        opponentIcon = '$';
    }
    else
    {
        playerIcon = '$';
        opponentIcon = '#';
    }
    char currentCharacter;
    int aroundRow = 0;
    int aroundCollumn = 0;
    int continueRow = 0;
    int continueCollumn = 0;
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
                    if(currentCharacter != '_' && currentCharacter != playerIcon)
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