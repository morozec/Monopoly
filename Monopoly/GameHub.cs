using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace Monopoly
{
    public class GameHub : Hub
    {
        public async Task Join()
        {
            await Clients.Others.SendCoreAsync("joined", new object[]{});
        }

        public async Task Turn()
        {
            await Clients.Others.SendCoreAsync("turn", new object[] { });
        }
    }
}