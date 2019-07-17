using System.Threading.Tasks;
using DbRepository.Repositories.Game;
using Monopoly.ViewModels;

namespace Monopoly.Services
{
    public class GameService : IGameService
    {
        private readonly IGameRepository _gameRepository;

        public GameService(IGameRepository gameRepository)
        {
            _gameRepository = gameRepository;
        }

        public async Task Join(JoiningPlayer joiningPlayer)
        {
            await _gameRepository.JoinToGame(joiningPlayer.PlayerId, joiningPlayer.GameId);
        }
    }
}