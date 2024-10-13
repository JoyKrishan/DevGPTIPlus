using Incursion.Helpers;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;
using System;
using System.Linq;

namespace Incursion.Pieces
{
    internal static class UnitRegistry
    {
        public static UnitType Infantry;
        public static UnitType Cavalry;
        public static UnitType Tank;
        public static UnitType Artillery;
        public static void Load(GraphicsDevice device) { // abstract this maybe?
            Infantry = new UnitType(100.0f, 45.0f, 7.5f, 50.0f, 16, 30, 150, 2, TextureManager.Infantry, 2, 5);
            Cavalry = new UnitType(125.0f, 35.0f, 11.0f, 15.0f, 20, 24, 100, 2, TextureManager.Cavalry, 2, 8);
            Artillery = new UnitType(10.0f, 150.0f, 5.0f, 10.0f, 12, 40, 100, 1, TextureManager.Artillery, 2, 5);


            Tank = new UnitType(2, 7, 8, 8, 5, 16, 4, 5, TextureManager.tank, 1, 1);

            Infantry.AddWeakness(Artillery);
            Tank.AddWeakness(Artillery);
            Cavalry.AddWeakness(Infantry);
            Artillery.AddWeakness(Cavalry);
        }
        [Obsolete]
        private static Texture2D CreateSelection(GraphicsDevice device, int radius) {
            int diameter = (radius * 2 + 1); //Turn even number into odd number as that is better for drawing pixel circles
            Texture2D selection = new Texture2D(device, diameter, diameter);
            Color[] colors = new Color[diameter * diameter];
            Color bluish = new Color(127, 215, 245, 180);
            for (int i = 0; i < colors.Count(); i++)
            {
                int x = i % diameter;
                int y = i / diameter;
                if (Arithmetic.WithinExactDist(x, y, radius, radius, radius))
                    colors[i] = bluish;
            }
            selection.SetData(colors);
            return selection;
        }
        [Obsolete]
        private static Texture2D CreateMergeRad(GraphicsDevice device, int radius)
        {
            int halfed = radius / 2;
            Texture2D selection = new Texture2D(device, radius, radius);
            Color[] colors = new Color[radius * radius];
            Color bluish = new Color(127, 215, 245, 180);
            for (int i = 0; i < colors.Count(); i++)
            {
                int x = i % radius;
                int y = i / radius;
                if (Arithmetic.WithinRange(x, y, halfed, halfed, halfed))
                    colors[i] = bluish;
            }
            selection.SetData(colors);
            return selection;
        }
    }
}