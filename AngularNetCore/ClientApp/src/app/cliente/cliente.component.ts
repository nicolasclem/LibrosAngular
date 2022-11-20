import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Cliente } from '../modelos/cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-cliente-component',
  templateUrl: './cliente.component.html'
})

export class ClienteComponent
{


    nombreQuery!: string;

    emailQuery!: string;

  constructor(private route: ActivatedRoute, private api: ClienteService)
  {
    this.route.queryParams.subscribe(params => {
      this.nombreQuery = params['nombre'];
      this.emailQuery = params['email'];
      });
  }
  public Alta()
  {
    const cliente: Cliente = {nombre:'nico',email:'nico@test.com',pass:'123456'}

    this.api.createCliente(cliente).subscribe();


  }
}

