using System.Collections.Generic;

namespace Model
{
    public class Property
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public ICollection<PlayerProperty> PlayerProperties { get; } = new List<PlayerProperty>();
    }
}