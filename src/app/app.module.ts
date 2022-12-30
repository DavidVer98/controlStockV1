import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {NavbarComponent} from './components/navbar/navbar.component';
import {CategoriaComponent} from './components/categoria/categoria.component';
import {CommonModule} from '@angular/common';

//http

import { HttpClientModule } from '@angular/common/http';
import { CategoriaModalComponent } from './components/categoriaModal/categoriaModal.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { SubCategoriaComponent } from './components/sub-categoria/sub-categoria.component';
import { SubCategoriaModalComponent } from './components/sub-categoria-modal/sub-categoria-modal.component';

import { PacienteComponent } from './components/paciente/paciente.component';
import { PacienteModalComponent } from './components/paciente-modal/paciente-modal.component';

import { FichaClinicaComponent } from './components/ficha-clinica/ficha-clinica.component';
import { FichaClinicaModalComponent } from './components/ficha-clinica-modal/ficha-clinica-modal.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReservaComponent } from './components/reserva/reserva.component';

import { ServiciosAdminComponent } from './components/serviciosAdmin/serviciosAdmin.component';
import { ServiciosModalComponent } from './components/servicios-modal/servicios-modal.component';


import { ReservaModalComponent } from './components/reserva-modal/reserva-modal.component';
import { BuscarfisioterapeutaComponent } from './components/buscarfisioterapeuta/buscarfisioterapeuta.component';
import {ReportesComponent} from './components/reportes/reportes.component';
import {Servicio9Component} from './components/servicio9/servicio9.component';
import {Servicio9ModalComponent} from './components/servicio9-modal/servicio9-modal.component';
import { BuscarclienteComponent } from './components/buscarcliente/buscarcliente.component';
import { FisioterapeutaComponent } from './components/fisioterapeuta/fisioterapeuta.component';
import { HorarioExcepcionModalComponent } from './components/horario-excepcion-modal/horario-excepcion-modal.component';



@NgModule({

  declarations: [
    AppComponent,
    NavbarComponent,
    CategoriaComponent,
    CategoriaModalComponent,
    SubCategoriaComponent,
    SubCategoriaModalComponent,
    PacienteComponent,
    PacienteModalComponent,
    FichaClinicaComponent,
    FichaClinicaModalComponent,
    LoginComponent,
    DashboardComponent,
    ReservaComponent,
    ReservaModalComponent,
    ReportesComponent,
    Servicio9Component,
    Servicio9ModalComponent,
    BuscarfisioterapeutaComponent,
    BuscarclienteComponent,
    ServiciosAdminComponent, 
    ServiciosModalComponent, FisioterapeutaComponent, HorarioExcepcionModalComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    DashboardModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
