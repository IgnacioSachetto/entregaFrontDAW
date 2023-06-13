import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspacioComponent } from './espacio/espacio.component';
import { NuevoEspacioComponent } from './nuevo-espacio/nuevo-espacio.component';
import { ReservanteComponent } from './reservante/reservante.component';

const routes: Routes = [
  { path: 'espacio', component: EspacioComponent },
  { path: 'reservante', component: ReservanteComponent },
  { path: 'nuevo-espacio', component: NuevoEspacioComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
