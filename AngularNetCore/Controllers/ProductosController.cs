using AngularNetCore.Modelos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularNetCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductosController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetProductos()
        {
            Resultado res = new Resultado();
            try
            {
                using(LibrosAngularNetCoreContext context = new LibrosAngularNetCoreContext())
                {
                    var productos = context.Productos.ToList();
                    res.ObjetoGenerico = productos;
                }  

            }
            catch (Exception ex)
            {

                res.Error = $"se produjo un error al obtener los productos {ex.Message}";
            }

            return Ok(res);

        }
    }
}
