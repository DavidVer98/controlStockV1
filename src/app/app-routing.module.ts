import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { SubCategoriaComponent } from './components/sub-categoria/sub-categoria.component';

import { PacienteComponent } from './components/paciente/paciente.component';
import { FichaClinicaComponent } from './components/ficha-clinica/ficha-clinica.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', loadChildren:() => import('./components/dashboard/dashboard.module').then(x=>x.DashboardModule)},
  // { path: 'categoria', component: CategoriaComponent },

  // { path: 'subCategoria', component: SubCategoriaComponent },
  // { path: 'paciente', component: PacienteComponent },
  // { path: 'fichaclinica', component: FichaClinicaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
