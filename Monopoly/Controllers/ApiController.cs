using System.Collections.Generic;
using System.Threading.Tasks;
using DbRepository.Repositories.Game;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Model;

namespace Monopoly.Controllers
{
    [Route("api")]
    public class ApiController : Controller
    {
        private readonly IGameRepository _gameRepository;

        public ApiController(IGameRepository gameRepository)
        {
            _gameRepository = gameRepository;
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
        [Route("player")]
        [Authorize]
        public async Task<int> AddPlayer([FromBody] Player player)
        {
            return await _gameRepository.AddPlayer(player);
        }

        [HttpPost]
        [Route("game")]
        [Authorize]
        public async Task AddGame([FromBody]Game game)
        {
            await _gameRepository.AddGame(game);
        }

        [HttpGet]
        [Route("games")]
        [Authorize]
        public async Task<List<Game>> GetGames()
        {
            return await _gameRepository.GetGames();
        }
    }
}