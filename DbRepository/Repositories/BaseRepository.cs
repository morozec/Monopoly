using DbRepository.Context;

namespace DbRepository.Repositories
{
    public abstract class BaseRepository
    {
        protected string ConnectionString { get; set; }
        protected IRepositoryContextFactory ContextFactory { get; set; }

        protected BaseRepository(string connectionString, IRepositoryContextFactory contextFactory)
        {
            ConnectionString = connectionString;
            ContextFactory = contextFactory;
        }
    }
}