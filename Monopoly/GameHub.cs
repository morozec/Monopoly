using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace Monopoly
{
    public class GameHub : Hub
    {
        public async Task Join(int gameId)
        {
            await Clients.Others.SendCoreAsync("joined", new object[]{gameId});
        }

        public async Task Turn(int newPos)
        {
            await Clients.Others.SendCoreAsync("turn", new object[] { newPos});
        }
    }
}