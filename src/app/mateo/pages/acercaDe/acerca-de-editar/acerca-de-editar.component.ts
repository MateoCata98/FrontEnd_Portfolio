import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Persona } from '../../../interfaces/persona.interface';
import { PersonaService } from '../../../services/persona.service';

@Component({
  selector: 'app-acerca-de-editar',
  templateUrl: './acerca-de-editar.component.html',
  styles:[`
  .imgUno{
    height: 450px;
    width: 400px;
  }
  .imgDos{
    height: 350px;
    width: 250px;
  }
  .tamaño{
    height: 400px;
    width: 300px;
  }
  .margin{
    margin-top: 50%;
  }

  `]
})
export class AcercaDeEditarComponent implements OnInit {

  persona: Persona = {
    id: 1,
    nombre: '',
    apellido: '',
    profesion: '',
    descripcion: '',
    descripcionDos: '',
    descripcionTres: '',
    imgUno: '',
    imgDos: ''

  }
 
  constructor( private personaService : PersonaService,
               private router: Router,
               private snackBar: MatSnackBar  ) { }

  ngOnInit(): void {
    this.personaService.getPersona()
    .subscribe( persona => this.persona = persona );
  }

  actualizarPersona(){
      this.personaService.actualizarPersona( this.persona )
      .subscribe( persona => {
        this.router.navigate(['/mateo/acerca-de']);
        this.mostrarSnakbar('Editado correctamente');
       }); 
  }
    
  mostrarSnakbar( mensaje: string ){
    this.snackBar.open( mensaje,'✏️',{
      duration: 2500
    });
  }

  cancelar(){
    this.router.navigate(['/mateo/acerca-de']);
  }
}
