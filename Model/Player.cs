﻿using System.Collections.Generic;

namespace Model
{
    public class Player
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Game Game { get; set; }
        public int Position { get; set; }
        public int Money { get; set; }

        public ICollection<PlayerProperty> PlayerProperties { get; } = new List<PlayerProperty>();
    }
}