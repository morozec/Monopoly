using System.Collections.Generic;
using System.Threading.Tasks;
using DbRepository.Repositories.Game;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Model;
using Monopoly.Services;
using Monopoly.ViewModels;

namespace Monopoly.Controllers
{
    [Route("api")]
    public class ApiController : Controller
    {
        private readonly IGameRepository _gameRepository;
        private readonly IGameService _gameService;

        public ApiController(IGameRepository gameRepository, IGameService gameService)
        {
            _gameRepository = gameRepository;
            _gameService = gameService;
        }

        [HttpGet]
        [Route("private")]
        [Authorize]
        public IActionResult Private()
        {
            return Json(new
            {
                Message = "Hello from a private endpoint! You need to be authenticated to see this."
            });
        }

        [HttpPost]
        [Route("addPlayer")]
        [Authorize]
        public async Task<int> AddPlayer([FromBody] Player player)
        {
            return await _gameRepository.AddPlayer(player);
        }

        [HttpPost]
        [Route("join")]
        [Authorize]
        public async Task JoinToGame([FromBody] JoiningPlayer joiningPlayer)
        {
            await _gameService.Join(joiningPlayer);
        }

        [HttpPost]
        [Route("game")]
        [Authorize]
        public async Task<int> AddGame([FromBody]Game game)
        {
            return await _gameRepository.AddGame(game);
        }

        [HttpGet]
        [Route("games")]
        [Authorize]
        public async Task<List<Game>> GetGames()
        {
            return await _gameRepository.GetGames();
        }

        [HttpGet]
        [Route("players")]
        [Authorize]
        public async Task<List<Player>> GetGamePlayers(int gameId)
        {
            return await _gameRepository.GetGamePlayers(gameId);
        }
    }
}