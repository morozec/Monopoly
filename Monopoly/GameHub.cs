using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace Monopoly
{
    public class GameHub : Hub
    {
        public async Task Join(int gameId, object joinedUser)
        {
            await Clients.Others.SendCoreAsync("joined", new object[]{gameId, joinedUser});
        }

        public async Task Turn(int newPos, int newMoney, object[] properties)
        {
            await Clients.Others.SendCoreAsync("turn", new object[] { newPos, newMoney, properties});
        }
    }
}