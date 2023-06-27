import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoEspacioComponent } from './nuevo-espacio/nuevo-espacio.component';
import { ReservanteComponent } from './reservante/reservante.component';
import { ModificarEspacioComponent } from './modificar-espacio/modificar-espacio.component';
import { NuevoRolComponent } from './nuevo-rol/nuevo-rol.component';
import { ModificarRolComponent } from './modificar-rol/modificar-rol.component';
import { NuevaReservaComponent } from './nueva-reserva/nueva-reserva.component';

const routes: Routes = [
  { path: 'reservante', component: ReservanteComponent },
  { path: 'nuevo-espacio', component: NuevoEspacioComponent },
  { path: 'modificar-espacio', component: ModificarEspacioComponent },
  { path: 'nuevo-rol', component: NuevoRolComponent },
  { path: 'modificar-rol', component: ModificarRolComponent },
  { path: 'nueva-reserva', component: NuevaReservaComponent },


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
