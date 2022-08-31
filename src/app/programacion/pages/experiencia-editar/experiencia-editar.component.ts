import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';
import { Experiencia } from '../../interfaces/experiencia.interface';
import { ExperienciaService } from '../../services/experiencia.service';

@Component({
  selector: 'app-experiencia-editar',
  templateUrl: './experiencia-editar.component.html',
  styles:[`
   .foto{
    height: 350px;
    width: 350px;
  }
  .tamaño {
  min-height: 510px;
  width: 900px;
}
  `]
})
export class ExperienciaEditarComponent implements OnInit {

  modalidad = [
    {
      id: 'Virtual',
      desc: 'Virtual'
    },
    {
      id:'Presencial',
      desc:'Presencial'
    }
  ]

  experiencia: Experiencia={
    nombreE:   '',
    areaExp:    '',
    informacionExp:'', 
    fechaExp: '',    
    modalidadExp: '',
    imgExp: ''
  }
  
  constructor( private experienciaService: ExperienciaService,
               private activatedRoute: ActivatedRoute,
               private router: Router,
               private snackBar: MatSnackBar,
               public dialog: MatDialog) { }

  ngOnInit(): void {
    
    if( !this.router.url.includes('editar')){
      return;
    }
    
    this.activatedRoute.params
    .pipe(
      switchMap( ({idExp}) => this.experienciaService.getExperienciaPorId(idExp))
      )
      .subscribe( experiencia => this.experiencia = experiencia);
    }
    
    guardar(){
      if( this.experiencia.areaExp.trim().length === 0 ){
        return;
      } 
      
      if (this.experiencia.idExp) {
        
        this.experienciaService.actualizarExperiencia( this.experiencia.idExp, this.experiencia )
        .subscribe( experiencia => {
          this.router.navigate(['/mateo/programacion/experiencia']);
          this.mostrarSnakbar('Registro actualizado');
        })
        
    }else {
      
      this.experienciaService.agregarExperiencia( this.experiencia )
      .subscribe( experiencia => {
        this.router.navigate(['/mateo/programacion/experiencia']);
        this.mostrarSnakbar('Registro creado');
      })
    }
  }
  
  borrarExperiencia(){
    
    const dialog = this.dialog.open( ConfirmarComponent, {
      width: '250px',
      data: this.experiencia
    });
    
    dialog.afterClosed().subscribe(
      (result) => {
        if( result ){
          this.experienciaService.borrarExperiencia( this.experiencia.idExp! )
          .subscribe( resp => {
            this.router.navigate(['/mateo/programacion/experiencia']);
            this.mostrarSnakbar('Registro eliminado');
          })
        }
      }
      )
      
    }
    
    mostrarSnakbar( mensaje: string ){
      this.snackBar.open( mensaje,'📚',{
        duration: 2500
      });
    }
    
  }
  
  
  
  
 