using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DbRepository.Context;
using Microsoft.EntityFrameworkCore;
using Model;

namespace DbRepository.Repositories.Game
{
    public class GameRepository : BaseRepository, IGameRepository
    {
        public GameRepository(string connectionString, IRepositoryContextFactory contextFactory) : base(connectionString, contextFactory)
        {
        }

        public async Task<int> AddPlayer(Player player)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                context.Players.Add(player);
                await context.SaveChangesAsync();
                return player.Id;
            }
        }

        public async Task JoinToGame(int playerId, int gameId)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                var contextPlayer = context.Players.Single(p => p.Id == playerId);
                var game = context.Games.Single(g => g.Id == gameId);
                contextPlayer.Game = game;
                await context.SaveChangesAsync();
            }
        }

        public Task MakeTurn(Player player)
        {
            throw new System.NotImplementedException();
        }

        public async Task UpdatePlayer(Player player)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                var contextPlayer = context.Players.Single(p => p.Id == player.Id);
                contextPlayer.Money = player.Money;
                contextPlayer.Position = player.Position;
                await context.SaveChangesAsync();
            }
        }

        public async Task<List<Model.Game>> GetGames()
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                return await context.Games.ToListAsync();
            }
        }

        public async Task AddGame(Model.Game game)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                context.Games.Add(game);
                var gameCreator = context.Players.Single(p => p.Id == game.CreatorId);
                gameCreator.Game = game;
                await context.SaveChangesAsync();
            }
        }

        public async Task<List<Player>> GetGamePlayers(int gameId)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                return await context.Players.Where(p => p.Game.Id == gameId).ToListAsync();
            }
        }
    }
}