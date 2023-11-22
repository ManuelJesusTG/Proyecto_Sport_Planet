import { Component } from '@angular/core';
import { RegistroService } from '../registro.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  usuario: any = {};

  constructor(private registroService: RegistroService) {}

  registrarUsuario() {
    console.log('Datos del formulario:', this.usuario);

    this.registroService.registrarUsuario(this.usuario)
      .subscribe(
        response => {
          console.log('Registro exitoso', response);
        },
        error => {
          console.error('Error en el registro', error);
        }
      );
  }
}
