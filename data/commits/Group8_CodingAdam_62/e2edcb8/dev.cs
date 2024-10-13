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
    public class PixelPainter /// Make static?
    {
        private Map map => Main.Instance.Map;
        public void Load() {
            PaintArray = new Color[map.PaintLayer.Width * map.PaintLayer.Height];
        }
        private Color[] PaintArray;
        public void ConvertTerritoriesToPaint()
        {
            if(map.territoryUpdateQueue.Count <= 0)
            {
                return;
            }
            foreach (Point coords in map.territoryUpdateQueue)
            {
                int x = coords.X;
                int y = coords.Y;
                if (!map.territory[x, y].Update())
                {
                    int i = x + y * map.width;
                    Color color = Main.Instance.players[map.territory[x, y].Owner].playerColor;
                    PaintArray[i] = color;
                    map.territoryUpdateQueue.Remove(coords);
                }
            }
            if (map.territoryUpdateQueue.Count <= 0)
            {
                map.territoryUpdateQueue = new HashSet<Point>();
            }
            map.PaintLayer.SetData(PaintArray);
        }
    }
}