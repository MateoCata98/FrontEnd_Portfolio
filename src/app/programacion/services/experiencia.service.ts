import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experiencia } from '../interfaces/experiencia.interface';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  private beseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }


  getExperiencia(): Observable<Experiencia[]>{
   return this.http.get<Experiencia[]>(`${ this.beseUrl }/experiencia/lista`);
  }

  getExperienciaPorId( idExp:string ):Observable<Experiencia>{
    return this.http.get<Experiencia>(`${ this.beseUrl }/experiencia/buscar/${ idExp }`);
  }

  agregarExperiencia( experiencia: Experiencia): Observable<Experiencia> {
    return this.http.post<Experiencia>(`${ this.beseUrl }/experiencia/create`, experiencia);
  }

  actualizarExperiencia( idExp: string, experiencia: Experiencia): Observable<Experiencia> {
    return this.http.put<Experiencia>(`${ this.beseUrl }/experiencia/update/${ idExp }`, experiencia);
  }

  borrarExperiencia( idExp: string): Observable<any> {
    return this.http.delete<any>(`${ this.beseUrl }/experiencia/borrar/${ idExp }`);
  }
}
