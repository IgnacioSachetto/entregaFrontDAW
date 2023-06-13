import { Component } from '@angular/core';
import { UsuariosService } from './service/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private servicioUsuario : UsuariosService) { 
  }
  titulo = 'Mi primera App 2023';
  edad = 10;
  nombres = [];

public aumentarEdad(){
  this.servicioUsuario.getDatos().subscribe(
    (rta) => {
      this.nombres = rta['data'];
    },
    (error) => {
    }
  );
  this.edad++;
};

public disminuirEdad(){
  this.edad--;
};

}
