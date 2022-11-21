import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../modelos/cliente';
import { ClienteService } from '../services/cliente.service';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-cliente-component',
  templateUrl: './cliente.component.html'
})

export class ClienteComponent {

  altaForm!: FormGroup;
  enviado= false;

  constructor(private api: ClienteService, private formBuilder: FormBuilder, private router: Router)
  {
  
  }
  ngOnInit(): void
  {
    this.altaForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      pass: ['', Validators.required]
    })
  }

  get f(): { [key: string]: AbstractControl }
  {
    return this.altaForm.controls;
  }
  public Alta()
  {
    this.enviado = true;
    if (this.altaForm.invalid)
    {
      console.log("Invalido");
      return;
    }

    console.log("valido");
    let cliente: Cliente =
    {
      nombre: this.altaForm.controls['nombre'].value,
      email: this.altaForm.controls['email'].value,
      pass: this.altaForm.controls['pass'].value
    }

    this.api.createCliente(cliente).subscribe(res =>
    {
      if (res.error != null && res.error != '') {
        console.log(res.error)
      }
      else
      {
        console.log("todo es correcto")
        this.router.navigate(['/login']);
      }

    });

   
    

  }
 

 
}
//MODIFICAR #####################################
  //  this.api.editCliente(cliente).subscribe(res => {
  //    if (res.error != null && res.error != '') {
  //      console.log(res.error)
  //    }
  //    else {
  //      console.log("todo es correcto")

  //    }
  //  });

//ELIMINAR###############################

//this.api.deleteCliente(this.altaForm.controls['email'].value).subscribe(res => {
//  if (res.error != null && res.error != '') {
//    console.log(res.error)
//  }
//  else {
//    console.log("eliminado")

//  }

//});
