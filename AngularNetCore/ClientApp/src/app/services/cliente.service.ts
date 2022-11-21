import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Resultado } from '../modelos/resultado';
import { Cliente } from '../modelos/cliente';

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

  createCliente(cliente: Cliente): Observable<Resultado>
  {
    return this.peticion.post<Resultado>(this.url, cliente);
  }
  editCliente(cliente: Cliente): Observable<Resultado>
  {
    return this.peticion.put<Resultado>(this.url, cliente);
  }
  deleteCliente(email: string): Observable<Resultado>
  {
    return this.peticion.delete<Resultado>(this.url + '/'+email);
  }
}
