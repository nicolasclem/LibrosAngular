import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-productos-component',
  templateUrl: './productos.component.html'
})

export class ProductoComponent implements OnInit
{
  public listaProductos!: any[];

  constructor(private api: ProductoService) {

    
  }

  ngOnInit(): void {
    this.dameProductos()
  }
  dameProductos()
  {
    this.api.getProductos().subscribe(res => {

      this.listaProductos = res.objetoGenerico
   

    })
  }
}
