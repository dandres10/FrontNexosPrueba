import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PacienteComponent } from './componentes/paciente/paciente.component';
import { EditarComponent } from './componentes/paciente/editar/editar.component';
import { VerpacienteComponent } from './componentes/paciente/verpaciente/verpaciente.component';
import { DoctorComponent } from './componentes/doctor/doctor.component';


const routes: Routes = [
  {path: 'inicio', component: InicioComponent },
  {path: 'paciente', component: PacienteComponent},
  {path: 'editarPaciente/:id', component: EditarComponent},
  {path: 'verPaciente/:id', component: VerpacienteComponent},
  {path: 'doctor', component: DoctorComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
