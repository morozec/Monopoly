namespace Model
{
    public class PlayerProperty
    {
        public int PlayerId { get; set; }
        public Player Player { get; set; }

        public int PropertyId { get; set; }
        public Property Property { get; set; }
    }
}