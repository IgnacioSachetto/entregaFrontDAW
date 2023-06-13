import { Component } from '@angular/core';
import { UsuariosService } from './service/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private servicioUsuario: UsuariosService, private router: Router) {
  }

  titulo = 'Mi primera App 2023';
  edad = 10;
  nombres = [];
  mostrarComponenteNuevoEspacio: boolean = false;

  public aumentarEdad() {
    this.servicioUsuario.getDatos().subscribe(
      (rta) => {
        this.nombres = rta['data'];
      },
      (error) => {
        // Manejo de error
      }
    );
    this.edad++;
  }

  public disminuirEdad() {
    this.edad--;
  }

  isEspacioRoute(): boolean {
    return this.router.url.includes('espacio');
  }

  redirigirANuevoEspacio() {
    this.router.navigate(['espacio']);
  }

  redirigirANuevoReservante() {
    this.router.navigate(['reservante']);
  }

  isReservanteRoute(): boolean {
    return this.router.url.includes('espacio');
  }


}
