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
        (response: any) => {
          const token = response.token;
          const userId = response.userId;

          if (token && userId) {
            localStorage.setItem('miToken', token);
            localStorage.setItem('userId', userId);

            this.router.navigate(['/']);
          }
        },
        error => {
          console.error('Error en el Inicio de sesion', error);
          this.mostrarError = true;
        }
      );
  }

  ngOnInit(): void {
    this.registroService.isLoggedIn().subscribe(isLoggedIn => {
      if (isLoggedIn) {

        // Para reedireccionar si ya inicio sesión

        this.router.navigate(['/']);
      }
    });
}
}
