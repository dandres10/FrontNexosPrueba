import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Agregados
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//fin Agregados

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PuntosAccesoPaciente } from './transversales/constantes/serviciosRest/Paciente/PuntosAccesoPaciente';
import { PacienteComponent } from './componentes/paciente/paciente.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { EditarComponent } from './componentes/paciente/editar/editar.component';
import { VerpacienteComponent } from './componentes/paciente/verpaciente/verpaciente.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PacienteComponent,
    InicioComponent,
    EditarComponent,
    VerpacienteComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    PuntosAccesoPaciente],
  bootstrap: [AppComponent]
})
export class AppModule { }
