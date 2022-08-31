import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcercaDeComponent } from './pages/acercaDe/acerca-de/acerca-de.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { AcercaDeEditarComponent } from './pages/acercaDe/acerca-de-editar/acerca-de-editar.component';





const rutas : Routes = [
    {
      path:'',
      component: HomeComponent,
      children:[
        {
          path:'',
          component: PrincipalComponent
        },
        {
          path:'acerca-de',
          component: AcercaDeComponent
        },
        {
          path:'acerca-de/editar/:id',
          component: AcercaDeEditarComponent
        },
        {
          path:'programacion',
          loadChildren: () => import('../programacion/programacion.module').then ( m => m.ProgramacionModule)
        },
        {
          path:'contacto',
          component: ContactoComponent
        },
        {
          path:'**',
          redirectTo: 'principal'
        }
      ]
    }
  ];



@NgModule({
    declarations: [],
    imports: [
      RouterModule.forChild ( rutas )
    ],
    exports: [
      RouterModule
    ]
  })
  export class MateoRoutingModule { }
  