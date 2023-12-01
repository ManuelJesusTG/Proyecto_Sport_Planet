import { Component } from '@angular/core';
import { RegistroService } from '../registro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  mostrarError = false;

  usuario: any = {};

  constructor(private registroService: RegistroService, private router: Router) {}

  LogearUsuario(){
    this.mostrarError = false;

    console.log('Datos del formulario:', this.usuario);

    this.registroService.logearUsuario(this.usuario)
      .subscribe(
        response => {
          console.log('Inicio exitoso', response);

          // Cambiar cookies por JWT

          const headers = response.headers;
          const myCookie = headers.get('Set-Cookie');
          localStorage.setItem('miCookie', myCookie);

          this.router.navigate(['/']);
        },
        error => {
          console.error('Error en el Inicio de sesion', error);
          this.mostrarError = true;
        }
      );
  }
}
