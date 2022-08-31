import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/programacion/interfaces/educacion.interface';
import { EducacionService } from 'src/app/programacion/services/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styles:[`
  .foto{
    height: 125px;
    width: 125px;
  }
  .sombra{
    box-shadow: 2px 5px 5px #000000;
  }
  .fondo {
    background-color: rgb(30, 30, 30);
  }
  .tamaño{
    min-width: 380px;
  }
`]
})
export class EducacionComponent implements OnInit {

 
  educacion: Educacion[] = []; 

  constructor( private educacionService: EducacionService ){}

  ngOnInit(): void {
  this.educacionService.getEducacion()
    .subscribe ( educacion => this.educacion = educacion);
  }
}
