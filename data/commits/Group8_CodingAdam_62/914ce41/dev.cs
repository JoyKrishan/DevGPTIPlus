    public class PixelPainter
        // Access the map instance from Main

        // Array to store colors for painting territories

        // Initialize the PaintArray based on map dimensions
        public void Load()
        {
            int arraySize = map.PaintLayer.Width * map.PaintLayer.Height;
            PaintArray = new Color[arraySize];
        }

        // Convert territories to a format suitable for painting on the map
            // Check if there are any pending territory updates
            if (map.territoryUpdateQueue.Count <= 0)

            // Iterate through each coordinate in the update queue
            foreach (Point coords in new List<Point>(map.territoryUpdateQueue))

                // Update the territory and get the owner's color
                    int arrayIndex = x + y * map.width;
                    Color territoryColor = Main.Instance.players[map.territory[x, y].Owner].playerColor;
                    PaintArray[arrayIndex] = territoryColor;

                    // Remove the coordinate from the update queue

            // Reset the update queue if it's empty

            // Update the map's paint layer with the new data
}