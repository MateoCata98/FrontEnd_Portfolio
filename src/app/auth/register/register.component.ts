import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from '../services/autenticacion.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles:[`
  form{
    height: 410px;
    width: 350px;
  }
  .registro{
    width: 325px;
  }
  input{
    font-size: 18px;
  }
  `]
})
export class RegisterComponent {
 
  miFormulario: FormGroup = this.fb.group({
    nombre:['',Validators.required],
    nombreUsuario:['',Validators.required],
    email:['', Validators.required],
    password: ['',Validators.required]
  });
  constructor( private fb: FormBuilder,
      private router: Router,
      private autenticacionService: AutenticacionService){}

registro(){
  const {nombre, nombreUsuario, email, password} = this.miFormulario.value;
  this.autenticacionService.registro(nombre, nombreUsuario, email, password)
  .subscribe( resp =>
      this.router.navigateByUrl('/auth/login'))
    }
}


