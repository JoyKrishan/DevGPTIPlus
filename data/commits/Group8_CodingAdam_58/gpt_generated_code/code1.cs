using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;
using System;
using System.Collections.Generic;

namespace Incursion.Pieces
{
    public class UnitType : IEquatable<UnitType>
    {
        public static int IndexCounter = 0;
        private int rectX;
        private int rectY;

        public int Index { get; private set; } = 0;
        public int FramesX { get; private set; }
        public int FramesY { get; private set; }
        public float Melee { get; private set; } = 0;
        public float Ranged { get; private set; }
        public float Speed { get; private set; }
        public float Defense { get; private set; }
        public int Logistics { get; private set; }
        public int Influence { get; private set; }
        public int Accuracy { get; private set; }
        public int Amount { get; private set; }
        public Texture2D Texture { get; private set; }
        public List<UnitType> Weaknesses { get; private set; } = new List<UnitType>();

        public UnitType()
        {
            Texture = TextureManager.placeholder;
            Logistics = 0;
        }

        public UnitType(float melee, float ranged, float speed, float defense, int influence, int accuracy, int amount, int logPoint, Texture2D texture, int framesX, int framesY)
        {
            Melee = melee;
            Ranged = ranged;
            Speed = speed;
            Defense = defense;
            Influence = influence;
            Accuracy = accuracy;
            Amount = amount;
            Texture = texture;
            FramesX = framesX;
            FramesY = framesY;
            Logistics = logPoint;
            Index = IndexCounter++;
        }

        public void AddWeakness(UnitType unitType)
        {
            if (!Weaknesses.Contains(unitType))
                Weaknesses.Add(unitType);
        }

        public bool Equals(UnitType other)
        {
            return other?.Index == Index;
        }
    }
}