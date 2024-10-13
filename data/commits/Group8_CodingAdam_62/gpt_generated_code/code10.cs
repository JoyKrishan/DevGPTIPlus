   if (map.territoryUpdateQueue.Count <= 0)
   {
       map.territoryUpdateQueue = new HashSet<Point>();
   }
   map.PaintLayer.SetData(PaintArray);