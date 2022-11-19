using System;
using System.Collections.Generic;

namespace AngularNetCore.Modelos
{
    public partial class Pedido
    {
        public Pedido()
        {
            DetallePedidos = new HashSet<DetallePedido>();
        }

        public int Id { get; set; }
        public int IdCliente { get; set; }
        public decimal Total { get; set; }
        public DateTime FechaPedido { get; set; }

        public virtual Cliente IdClienteNavigation { get; set; } = null!;
        public virtual ICollection<DetallePedido> DetallePedidos { get; set; }
    }
}
