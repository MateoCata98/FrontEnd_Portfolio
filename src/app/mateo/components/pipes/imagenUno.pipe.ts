import { Pipe, PipeTransform } from '@angular/core';
import { Persona } from '../../interfaces/persona.interface';


@Pipe({
  name: 'imagenUno'
})
export class ImagenUnoPipe implements PipeTransform {

  transform( persona: Persona ): string {
    if ( persona.imgUno ){
      return persona.imgUno;
    }else {
      return `/assets/img/mateo-foto.png`;
    }
  }

}