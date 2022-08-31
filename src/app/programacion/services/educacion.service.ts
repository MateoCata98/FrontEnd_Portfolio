import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Educacion } from '../interfaces/educacion.interface';


@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  private beseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }


  getEducacion(): Observable<Educacion[]>{
   return this.http.get<Educacion[]>(`${ this.beseUrl }/educacion/lista`);
  }

  getEducacionPorId( id:string ):Observable<Educacion>{
    return this.http.get<Educacion>(`${ this.beseUrl }/educacion/buscar/${ id }`);
  }

  agregarEducacion( educacion: Educacion): Observable<Educacion> {
    return this.http.post<Educacion>(`${ this.beseUrl }/educacion/create`, educacion);
  }

  actualizarEducacion( id: string, educacion: Educacion): Observable<Educacion> {
    return this.http.put<Educacion>(`${ this.beseUrl }/educacion/update/${ id }`, educacion);
  }

  borrarEducacion( id: string): Observable<any> {
    return this.http.delete<any>(`${ this.beseUrl }/educacion/borrar/${ id }`);
  }

}
