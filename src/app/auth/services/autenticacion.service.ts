import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { JwtDto, Usuario, NuevoUsuario } from '../interfaces/jwt-dto';




@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private beseUrl: string = environment.baseUrl;
  private _usuario!: Usuario;

  get usuario(){
    return { ...this._usuario};
  }

  constructor(private http: HttpClient){}

  registro(nombre: string, nombreUsuario: string, email: string, password: string){
    const url = `${ this.beseUrl }/auth/nuevo`;
    const body = { nombre, nombreUsuario, email, password };
    return this.http.post<NuevoUsuario>(url, body)}


  login( nombreUsuario: string, password: string ){

    const url = `${ this.beseUrl }/auth/login`;
    const body = { nombreUsuario, password };

    return this.http.post<JwtDto>(url, body)
    .pipe(
      tap( resp => {
        if( resp.ok !== false ){
          localStorage.setItem('token', resp.token!);
          this._usuario ={
            nombreUsuario: resp.nombreUsuario!
          }
        }
      }),
      map( resp => resp.ok ),
      catchError ( err => of(false))
    );
  }

  


  logout(){
    localStorage.clear();
  }

  verificacion(): Observable<boolean>{ 
   
    if ( !localStorage.getItem('token')){
      return of(false); 
    }
    return of(true);
  }
}

