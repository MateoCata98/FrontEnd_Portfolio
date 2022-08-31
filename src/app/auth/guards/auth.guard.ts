import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AutenticacionService } from '../services/autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  
  constructor( private autenticacionService: AutenticacionService,
               private router: Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
      return this.autenticacionService.verificacion()
      .pipe(
        tap( estaAutenticado =>{
          if( !estaAutenticado ){
            this.router.navigate(['.auth/login']);
          }
        })
      )
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | boolean {
      
      return this.autenticacionService.verificacion()
      .pipe(
        tap( estaAutenticado =>{
          if( !estaAutenticado ){
            this.router.navigate(['.auth/login']);
          }
        })
      )
      
  }
}

