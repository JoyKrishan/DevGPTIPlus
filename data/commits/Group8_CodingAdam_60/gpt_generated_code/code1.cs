/*
 * Class: UnitRegistry
 * Description: This class manages the registration and creation of various unit types in the Incursion game.
 */
using Incursion.Helpers;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;
using System;

namespace Incursion.Pieces
{
    /*
     * Class: UnitRegistry
     * Description: This class manages the registration and creation of various unit types in the Incursion game.
     */
    internal static class UnitRegistry
    {
        /*
         * Field: Infantry
         * Type: UnitType
         * Description: Represents the infantry unit type in the game.
         */
        public static UnitType Infantry;

        /*
         * Field: Cavalry
         * Type: UnitType
         * Description: Represents the cavalry unit type in the game.
         */
        public static UnitType Cavalry;

        /*
         * Field: Tank
         * Type: UnitType
         * Description: Represents the tank unit type in the game.
         */
        public static UnitType Tank;

        /*
         * Field: Artillery
         * Type: UnitType
         * Description: Represents the artillery unit type in the game.
         */
        public static UnitType Artillery;

        /*
         * Method: Load
         * Parameters: GraphicsDevice device - The graphics device used for loading textures.
         * Description: Loads and initializes the various unit types with specific attributes and textures.
         */
        public static void Load(GraphicsDevice device)
        {
            Infantry = new UnitType(100.0f, 45.0f, 7.5f, 50.0f, 16, 30, 150, 2, TextureManager.Infantry, 2, 5);
            Cavalry = new UnitType(125.0f, 35.0f, 11.0f, 15.0f, 20, 24, 100, 2, TextureManager.Cavalry, 2, 8);
            Artillery = new UnitType(10.0f, 150.0f, 5.0f, 10.0f, 12, 40, 100, 1, TextureManager.Artillery, 2, 5);
            Tank = new UnitType(2, 7, 8, 8, 5, 16, 4, 5, TextureManager.tank, 1, 1);

            Infantry.AddWeakness(Artillery);
            Tank.AddWeakness(Artillery);
            Cavalry.AddWeakness(Infantry);
            Artillery.AddWeakness(Cavalry);
        }

        /*
         * Method: CreateSelection [Obsolete]
         * Parameters: GraphicsDevice device - The graphics device used for creating textures.
         *             int radius - The radius of the selection circle.
         * Description: [Obsolete] Creates a circular selection texture with a specified radius.
         */
        [Obsolete]
        private static Texture2D CreateSelection(GraphicsDevice device, int radius)
        {
            // Implementation details...
        }

        /*
         * Method: CreateMergeRad [Obsolete]
         * Parameters: GraphicsDevice device - The graphics device used for creating textures.
         *             int radius - The radius of the merging circle.
         * Description: [Obsolete] Creates a circular merge radius texture with a specified radius.
         */
        [Obsolete]
        private static Texture2D CreateMergeRad(GraphicsDevice device, int radius)
        {
            // Implementation details...
        }
    }
}