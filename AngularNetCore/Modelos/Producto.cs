using System;
using System.Collections.Generic;

namespace AngularNetCore.Modelos
{
    public partial class Producto
    {
        public Producto()
        {
            DetallePedidos = new HashSet<DetallePedido>();
        }

        public int Id { get; set; }
        public string Nombre { get; set; } = null!;
        public decimal Precio { get; set; }
        public string Descripcion { get; set; } = null!;

        public virtual ICollection<DetallePedido> DetallePedidos { get; set; }
    }
}
