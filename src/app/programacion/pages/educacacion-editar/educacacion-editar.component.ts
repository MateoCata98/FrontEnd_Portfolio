import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmarComponent } from 'src/app/programacion/components/confirmar/confirmar.component';
import { Educacion } from 'src/app/programacion/interfaces/educacion.interface';
import { EducacionService } from 'src/app/programacion/services/educacion.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-educacacion-editar',
  templateUrl: './educacacion-editar.component.html',
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
export class EducacacionEditarComponent implements OnInit {

 
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

  educacion: Educacion={
    nombreI:   '',
    titulo:    '',
    img: '',   
    informacion:'', 
    fecha: '',    
    modalidad: ''
  }
  
  constructor( private educacionService: EducacionService,
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
         switchMap( ({id}) => this.educacionService.getEducacionPorId(id))
         )
       .subscribe( educacion => this.educacion = educacion);
    }

  guardar(){
    if( this.educacion.titulo.trim().length === 0 ){
    return;
    } 

    if (this.educacion.id) {

       this.educacionService.actualizarEducacion( this.educacion.id, this.educacion )
      .subscribe( educacion => {
        this.router.navigate(['/mateo/programacion/educacion']);
        this.mostrarSnakbar('Registro actualizado');
      })

    }else {

          this.educacionService.agregarEducacion( this.educacion )
          .subscribe( educacion => {
           this.router.navigate(['/mateo/programacion/educacion']);
           this.mostrarSnakbar('Registro creado');
          })
          }
  }

  borrarEducacion(){

    const dialog = this.dialog.open( ConfirmarComponent, {
      width: '250px',
      data: this.educacion
    });
     
    dialog.afterClosed().subscribe(
      (result) => {
        if( result ){
          this.educacionService.borrarEducacion( this.educacion.id! )
           .subscribe( resp => {
             this.router.navigate(['/mateo/programacion/educacion']);
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
 

