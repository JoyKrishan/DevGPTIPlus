}

//Refactored code
public Position MovePlayer(string direction)
{
   var player = GetPlayer();
   player.Move(direction);
   return player.NewPosition;
}