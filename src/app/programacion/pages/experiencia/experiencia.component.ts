import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../../interfaces/experiencia.interface';
import { ExperienciaService } from '../../services/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
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
export class ExperienciaComponent implements OnInit {

  experiencia: Experiencia[] = [];

  constructor( private experienciaService: ExperienciaService ) { }

  ngOnInit(): void {
    
    this.experienciaService.getExperiencia()
    .subscribe ( experiencia => this.experiencia = experiencia);
  }
  
}
