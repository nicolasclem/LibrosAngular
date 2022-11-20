using AngularNetCore.Modelos;
using AngularNetCore.Modelos.ViewModels;
using AngularNetCore.Utils;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Text;

namespace AngularNetCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientesController : ControllerBase
    {

        [HttpGet]
        public IActionResult GetCliente()
        {
            Resultado res = new Resultado();

            try
            {

            using (LibrosAngularNetCoreContext context = new LibrosAngularNetCoreContext())
            {
                var clientes = context.Clientes.ToList();
                res.ObjetoGenerico = clientes;
                

            }
            }
            catch (Exception ex)
            {

                res.Error = $"Error al obtener clientes! {ex.Message}";
            }

            return Ok(res);

        }

        [HttpPost]
        public IActionResult PostCliente(ClienteViewModel clienteFront)
        {
            Resultado res = new Resultado();

            try
            {
                byte[] KeyByte = new byte[] { 1, 2, 3, 4, 5, 6, 7, 8 };
                Encriptado encrypt = new Encriptado(KeyByte);

                using (LibrosAngularNetCoreContext context = new LibrosAngularNetCoreContext())
                {
                   Cliente cliente = new Cliente();
                    cliente.Nombre = clienteFront.Nombre;
                    cliente.Email = clienteFront.Email;
                    cliente.Password =Encoding.ASCII.GetBytes(encrypt.cifrar(clienteFront.pass, "ClaveSecreta"));
                    cliente.FechaAlta= DateTime.Now;

                    context.Clientes.Add(cliente);
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {

                res.Error = $"Error al dar de alta clientes! {ex.Message}";
            }

            return Ok(res);
        }
    }
}
