import { Component } from '@angular/core';

interface MenuItem{
  ruta: string;
  texto: string;
  icono:string;
}

@Component({
  selector: 'app-programacion',
  templateUrl: './programacion.component.html',
  styles:[`
  li {
    cursor: pointer;
    font-size: 15px;
  }
  .fondo{
    background-color:rgb(0, 0, 0);
  }
  .logo{
    height: 25px;
    width: 25px;
  }
  .programacion{
    position:absolute;
    display:block;
  }
  `]
})
export class ProgramacionComponent {

  menu: MenuItem [] = [
    { ruta:'/mateo/programacion/educacion', texto :'Educación', icono: 'menu_book'},
    { ruta:'/mateo/programacion/experiencia', texto :'Exp.Laboral', icono: 'work'},
    { ruta:'/mateo/programacion/certificados', texto :'Certificados', icono: 'book'},
    { ruta:'/mateo/programacion/habilidades', texto :'Habilidades', icono: 'settings_accessibility'},
    { ruta:'/mateo/programacion/proyectos', texto :'Proyectos', icono: 'topic'}
   ] 

}
