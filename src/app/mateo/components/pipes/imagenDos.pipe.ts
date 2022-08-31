import { Pipe, PipeTransform } from '@angular/core';
import { Persona } from '../../interfaces/persona.interface';


@Pipe({
  name: 'imagenDos'
})
export class ImagenDosPipe implements PipeTransform {

  transform( persona: Persona ): string {
    if ( persona.imgDos ){
      return persona.imgDos;
    }else {
      return `/assets/img/mateo-foto2.png`;
    }
  }

}