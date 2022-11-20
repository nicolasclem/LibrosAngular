import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Resultado } from '../modelos/resultado';

@Injectable
  ({
    providedIn: 'root'

  })


export class ClienteService
{
  url: string = 'https://localhost:7281/api/clientes'
  constructor(private peticion: HttpClient)
  {

  }

  getCliente(): Observable<Resultado>
  {
    return this.peticion.get<Resultado>(this.url);
  }
}
