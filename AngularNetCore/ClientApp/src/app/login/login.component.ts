import { Component } from '@angular/core';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html'
})

export class LoginComponent {
  constructor(private api: ClienteService)
  {
    api.getCliente().subscribe(res => {
      console.log(res)

    });
  }
}
