import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategoriaComponent} from '../categoria/categoria.component';
import {FichaClinicaComponent} from '../ficha-clinica/ficha-clinica.component';
import {PacienteComponent} from '../paciente/paciente.component';
import {ReservaComponent} from '../reserva/reserva.component';
import {ServiciosAdminComponent} from '../serviciosAdmin/serviciosAdmin.component';
import {SubCategoriaComponent} from '../sub-categoria/sub-categoria.component';
import {DashboardComponent} from './dashboard.component';
import {ReportesComponent} from '../reportes/reportes.component'
import {Servicio9Component} from "../servicio9/servicio9.component";
import {FisioterapeutaComponent} from "../fisioterapeuta/fisioterapeuta.component";

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      {path: 'categoria', component: CategoriaComponent},

      {path: 'subCategoria', component: SubCategoriaComponent},
      {path: 'paciente', component: PacienteComponent},
      {path: 'fichaclinica', component: FichaClinicaComponent},
      {path: 'reserva', component: ReservaComponent},
      {path: 'reportes', component: ReportesComponent},
      {path: 'servicios', component: Servicio9Component},
      {path: 'serviciosAdmin', component: ServiciosAdminComponent},
      {path: 'horarioExcepcion', component: FisioterapeutaComponent}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
