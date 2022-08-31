import { Component, OnInit } from '@angular/core';
import { Persona } from '../../../interfaces/persona.interface';
import { PersonaService } from '../../../services/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styles: [`
  .ismagen {
    min-height: 280px;
    min-width: 250px;
  }
  .imasgen2 {
    min-height: 450px;
    min-width: 250px;
  }
  .right {
   text-align:right
  }
.titulo{
  font-size: 25px;
}
.texto{
  text-align: justify;
}
.descripcion{
  font-size: 17px;
}
.icono {
      color: rgb(124, 138, 183);
}
  `]
})
export class AcercaDeComponent implements OnInit {

  persona: Persona = {
    nombre: '',
    apellido: '',
    profesion: '',
    descripcion: '',
    descripcionDos: '',
    descripcionTres: '',
    imgUno: '',
    imgDos: ''

  }

  constructor( private personaService: PersonaService ) { }

  ngOnInit(): void {
    this.personaService.getPersona()
    .subscribe( persona => this.persona = persona );
  }

}
