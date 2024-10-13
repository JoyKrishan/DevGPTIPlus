using Incursion.client;
using Incursion.World;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Input;
using System;
using System.Diagnostics;
using Incursion.Helpers;
using System.Collections.Generic;

namespace Incursion.Drawing
{
    public class PixelPainter
    {
        // Access the map instance from Main
        private Map map => Main.Instance.Map;

        // Array to store colors for painting territories
        private Color[] PaintArray;

        // Initialize the PaintArray based on map dimensions
        public void Load()
        {
            int arraySize = map.PaintLayer.Width * map.PaintLayer.Height;
            PaintArray = new Color[arraySize];
        }

        // Convert territories to a format suitable for painting on the map
        public void ConvertTerritoriesToPaint()
        {
            // Check if there are any pending territory updates
            if (map.territoryUpdateQueue.Count <= 0)
            {
                return;
            }

            // Iterate through each coordinate in the update queue
            foreach (Point coords in new List<Point>(map.territoryUpdateQueue))
            {
                int x = coords.X;
                int y = coords.Y;

                // Update the territory and get the owner's color
                if (!map.territory[x, y].Update())
                {
                    int arrayIndex = x + y * map.width;
                    Color territoryColor = Main.Instance.players[map.territory[x, y].Owner].playerColor;
                    PaintArray[arrayIndex] = territoryColor;

                    // Remove the coordinate from the update queue
                    map.territoryUpdateQueue.Remove(coords);
                }
            }

            // Reset the update queue if it's empty
            if (map.territoryUpdateQueue.Count <= 0)
            {
                map.territoryUpdateQueue = new HashSet<Point>();
            }

            // Update the map's paint layer with the new data
            map.PaintLayer.SetData(PaintArray);
        }
    }
}