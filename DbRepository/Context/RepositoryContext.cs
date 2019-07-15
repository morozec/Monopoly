using Microsoft.EntityFrameworkCore;
using Model;

namespace DbRepository.Context
{
    public class RepositoryContext : DbContext
    {
        public RepositoryContext(DbContextOptions<RepositoryContext> options) : base(options)
        {
        }

        public DbSet<Player> Players { get; set; }
        public DbSet<Game> Games { get; set; }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    modelBuilder.Entity<Game>()
        //        .HasOne(p => p.Creator)
        //        .WithOne(i => i.Game)
        //        .HasForeignKey<Player>(b => b.GameForeignKey);
        //}
    }
}