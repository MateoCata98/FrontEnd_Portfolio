import { Component } from '@angular/core';


import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from '../services/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
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
export class LoginComponent {

 miFormulario: FormGroup = this.fb.group({
  nombreUsuario:['',Validators.required],
  password: ['',Validators.required]
 });

 constructor( private fb: FormBuilder,
              private router: Router,
              private autenticacionService: AutenticacionService){}

 login(){
  const {nombreUsuario, password} = this.miFormulario.value;
  this.autenticacionService.login(nombreUsuario, password)
  .subscribe( ok =>{
    if (ok !== false){
      this.router.navigateByUrl('/mateo');
    } 
  });
 }
}
