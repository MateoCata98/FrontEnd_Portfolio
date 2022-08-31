import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../interfaces/persona.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
 
  private beseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getPersona(): Observable<Persona>{
    return this.http.get<Persona>(`${ this.beseUrl }/traer/persona/1`);
   }

   actualizarPersona( persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(`${ this.beseUrl }/editar`, persona);
  }
}
