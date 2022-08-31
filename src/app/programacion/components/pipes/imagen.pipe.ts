import { Pipe, PipeTransform } from '@angular/core';
import { Educacion } from '../../interfaces/educacion.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform( educacion: Educacion ): string {
    if( !educacion.id && !educacion.img ){
      return 'assets/img/no-image.png';
    } else if ( educacion.img ){
      return educacion.img;
    }else {
      return `assets/img/${ educacion.nombreI }.png`;
    }
  }

}
