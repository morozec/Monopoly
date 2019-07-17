using System.Collections.Generic;
using System.Threading.Tasks;
using Model;

namespace DbRepository.Repositories.Game
{
    public interface IGameRepository
    {
        Task<int> AddPlayer(Player player);
        Task JoinToGame(int playerId, int gameId);
        Task MakeTurn(Player player);

        Task<List<Model.Game>> GetGames();
        Task AddGame(Model.Game game);
        Task<List<Player>> GetGamePlayers(int gameId);
    }
}