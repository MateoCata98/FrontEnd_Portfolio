import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MateoRoutingModule } from './mateo-routing.module';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AcercaDeComponent } from './pages/acercaDe/acerca-de/acerca-de.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';
import { PrincipalComponent } from './pages/principal/principal.component';

import { ConfirmarComponent } from '../programacion/components/confirmar/confirmar.component';

import { AcercaDeEditarComponent } from './pages/acercaDe/acerca-de-editar/acerca-de-editar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { NgChartsModule } from 'ng2-charts';
import { ImagenUnoPipe } from './components/pipes/imagenUno.pipe';
import { ImagenDosPipe } from './components/pipes/imagenDos.pipe';
import { ProgramacionRoutingModule } from '../programacion/programacion.routing.module';
import { FooterComponent } from './components/footer/footer.component';







@NgModule({
  declarations: [
    AcercaDeComponent,
    ContactoComponent,
    HomeComponent,
    PrincipalComponent,
    ConfirmarComponent,
    AcercaDeEditarComponent,
    ImagenUnoPipe,
    ImagenDosPipe,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MateoRoutingModule,
    ProgramacionRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    PrimeNgModule,
    NgChartsModule
  ]
})
export class MateoModule { }
