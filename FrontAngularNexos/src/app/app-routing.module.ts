import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PacienteComponent } from './componentes/paciente/paciente.component';


const routes: Routes = [
  {path: 'inicio', component: InicioComponent },
  {path: 'paciente', component: PacienteComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
