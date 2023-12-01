import { Component } from '@angular/core';
import { RegistroService } from '../registro.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  usuario: any = {};

  constructor(private registroService: RegistroService, private router: Router) {}

  registrarUsuario() {
    console.log('Datos del formulario:', this.usuario);

    this.registroService.registrarUsuario(this.usuario)
      .subscribe(
        response => {
          console.log('Registro exitoso', response);
          this.router.navigate(['/login']);
        },
        error => {
          console.error('Error en el registro', error);
        }
      );
  }
}
