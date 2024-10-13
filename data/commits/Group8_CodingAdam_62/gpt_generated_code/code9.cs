   int i = x + y * map.width;
   Color color = Main.Instance.players[map.territory[x, y].Owner].playerColor;
   PaintArray[i] = color;
   map.territoryUpdateQueue.Remove(coords);