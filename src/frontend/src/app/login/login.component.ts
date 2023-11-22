import { Component } from '@angular/core';
import { RegistroService } from '../registro.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario: any = {};

  constructor(private registroService: RegistroService) {}

  LogearUsuario(){
    console.log('Datos del formulario:', this.usuario);

    this.registroService.logearUsuario(this.usuario)
      .subscribe(
        response => {
          console.log('Inicio exitoso', response);
        },
        error => {
          console.error('Error en el Inicio', error);
        }
      );
  }
}
