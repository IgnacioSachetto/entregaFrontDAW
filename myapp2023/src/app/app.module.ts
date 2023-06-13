import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimerComponenteComponent } from './primer-componente/primer-componente.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NuevoEspacioComponent } from './nuevo-espacio/nuevo-espacio.component';
import { EspacioComponent } from './espacio/espacio.component';
import { ReservanteComponent } from './reservante/reservante.component';
import { NuevoReservanteComponent } from './nuevo-reservante/nuevo-reservante.component'

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponenteComponent,
    HeaderComponent, // Asegúrate de incluir el componente HeaderComponent aquí
    FooterComponent,
    NuevoEspacioComponent,
    EspacioComponent,
    ReservanteComponent,
    NuevoReservanteComponent,
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
