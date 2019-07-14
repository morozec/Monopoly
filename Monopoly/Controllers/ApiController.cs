using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Monopoly.Controllers
{
    [Route("api")]
    public class ApiController : Controller
    {
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

        //[HttpGet]
        //[Route("private-scoped")]
        //[Authorize("read:messages")]
        //public IActionResult Scoped()
        //{
        //    return Json(new
        //    {
        //        Message = "Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this."
        //    });
        //}
    }
}