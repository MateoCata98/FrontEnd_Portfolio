import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EducacionComponent } from "./pages/educacion/educacion.component";


import { ExperienciaComponent } from "./pages/experiencia/experiencia.component";
import { ExperienciaEditarComponent } from "./pages/experiencia-editar/experiencia-editar.component";
import { EducacacionEditarComponent } from './pages/educacacion-editar/educacacion-editar.component';
import { EducacacionCertificadosComponent } from './pages/educacacion-certificados/educacacion-certificados.component';
import { HabilidadesComponent } from './pages/habilidades/habilidades.component';
import { ProgramacionComponent } from "./pages/programacion/programacion.component";
import { ProyectosComponent } from "./pages/proyectos/proyectos.component";



const rutas : Routes = [
    {
      path:'',
      component: ProgramacionComponent,
      children:[
                {
                  path:'',
                  component: EducacionComponent
                },
                {
                  path:'educacion/agregar',
                  component: EducacacionEditarComponent
                },
                {
                  path:'educacion/editar/:id',
                  component: EducacacionEditarComponent
                },
                {
                  path:'certificados',
                  component: EducacacionCertificadosComponent
                },
                {
                  path:'experiencia',
                  component: ExperienciaComponent
                },
                {
                  path:'experiencia/agregar',
                  component: ExperienciaEditarComponent
                },
                {
                  path:'experiencia/editar/:idExp',
                  component: ExperienciaEditarComponent
                },     
                {
                  path:'habilidades',
                  component: HabilidadesComponent
                },
                {
                  path:'proyectos',
                  component: ProyectosComponent
                },
                {
                  path:'**',
                  redirectTo: ''
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
  export class ProgramacionRoutingModule { }
  