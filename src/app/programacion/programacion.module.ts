import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramacionComponent } from './pages/programacion/programacion.component';

import { EducacacionEditarComponent } from './pages/educacacion-editar/educacacion-editar.component';
import { EducacacionCertificadosComponent } from './pages/educacacion-certificados/educacacion-certificados.component';
import { ExperienciaComponent } from './pages/experiencia/experiencia.component';
import { ExperienciaEditarComponent } from './pages/experiencia-editar/experiencia-editar.component';
import { HabilidadesComponent } from './pages/habilidades/habilidades.component';
import { ProgramacionRoutingModule } from './programacion.routing.module';
import { EducacionComponent } from './pages/educacion/educacion.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';

import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ImagenPipe } from './components/pipes/imagen.pipe';
import { ImagenPipeExp } from './components/pipes/imagenExp.pipe';




@NgModule({
  declarations: [
    ProgramacionComponent,
    EducacionComponent,
    EducacacionEditarComponent,
    EducacacionCertificadosComponent,
    ExperienciaComponent,
    ExperienciaEditarComponent,
    HabilidadesComponent,
    ProyectosComponent,
    ImagenPipe,
    ImagenPipeExp
  ],
  imports: [
    CommonModule,
    ProgramacionRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    PrimeNgModule,
    NgChartsModule,
    ProgramacionRoutingModule
  ]
})
export class ProgramacionModule { }
