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
        public DbSet<Property> Properties { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<PlayerProperty>()
                .HasKey(t => new {t.PlayerId, t.PropertyId});
        }

    }
}