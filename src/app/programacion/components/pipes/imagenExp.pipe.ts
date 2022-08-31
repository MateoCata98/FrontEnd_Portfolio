import { Pipe, PipeTransform } from '@angular/core';
import { Experiencia } from '../../interfaces/experiencia.interface';

@Pipe({
  name: 'imagenExp'
})
export class ImagenPipeExp implements PipeTransform {

  transform( experiencia: Experiencia ): string {
    if( !experiencia.idExp && !experiencia.imgExp ){
      return 'assets/img/Trabajo.png';
    } else if ( experiencia.imgExp ){
      return experiencia.imgExp;
    }else {
      return `assets/img/${ experiencia.nombreE }.png`;
    }
  }

}