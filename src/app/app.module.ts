import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimerComponenteComponent } from './primer-componente/primer-componente.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NuevoEspacioComponent } from './nuevo-espacio/nuevo-espacio.component';
import { ReservanteComponent } from './reservante/reservante.component';
import { NuevoReservanteComponent } from './nuevo-reservante/nuevo-reservante.component';
import { ModificarEspacioComponent } from './modificar-espacio/modificar-espacio.component';
import { ModificarReservanteComponent } from './modificar-reservante/modificar-reservante.component';
import { NuevoRolComponent } from './nuevo-rol/nuevo-rol.component';
import { ModificarRolComponent } from './modificar-rol/modificar-rol.component';
import { NuevaReservaComponent } from './nueva-reserva/nueva-reserva.component'

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponenteComponent,
    HeaderComponent, // Asegúrate de incluir el componente HeaderComponent aquí
    FooterComponent,
    NuevoEspacioComponent,
    ReservanteComponent,
    NuevoReservanteComponent,
    ModificarEspacioComponent,
    ModificarReservanteComponent,
    NuevoRolComponent,
    ModificarRolComponent,
    NuevaReservaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
