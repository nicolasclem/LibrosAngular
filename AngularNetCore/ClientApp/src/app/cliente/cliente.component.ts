import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-cliente-component',
  templateUrl: './cliente.component.html'
})

export class ClienteComponent
{


    nombreQuery!: string;

    emailQuery!: string;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.nombreQuery = params['nombre'];
      this.emailQuery = params['email'];
      });
  }
  public Alta() {

  }
}

