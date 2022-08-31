import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';



const routes: Routes = [
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then ( m => m.AuthModule)
  },
  {
    path:'mateo',
    loadChildren: () => import('./mateo/mateo.module').then ( m => m.MateoModule),
    canLoad: [ AuthGuard ],
    canActivate: [ AuthGuard ]
  },
  {
    path:'programacion',
    loadChildren: () => import('./programacion/programacion.module').then ( m => m.ProgramacionModule)
  },
  {
    path:'**',
    redirectTo: 'auth'
  }
]


@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports:[ RouterModule ]
})
export class AppRoutingModule { }
