using System.Collections.Generic;
using System.Threading.Tasks;
using Model;

namespace DbRepository.Repositories.Game
{
    public interface IGameRepository
    {
        Task<List<Model.Game>> GetGames();
        Task<List<Player>> GetGamePlayers(int gameId);
    }
}