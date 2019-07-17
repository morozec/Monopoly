using System.Threading.Tasks;
using Monopoly.ViewModels;

namespace Monopoly.Services
{
    public interface IGameService
    {
        Task Join(JoiningPlayer joiningPlayer);
    }
}