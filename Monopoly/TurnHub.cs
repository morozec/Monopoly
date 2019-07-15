using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace Monopoly
{
    public class TurnHub : Hub
    {
        public async Task SendToAll(string message)
        {
            await Clients.All.SendCoreAsync("turn", new object[]{message});
        }
    }
}