import { Component } from '@angular/core';
import { RegistroService } from '../registro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {

  usuario: any;
  nuevosDatos: any={};

  constructor(private registroService: RegistroService, private router: Router) {}

  ngOnInit(): void {

    this.registroService.isLoggedIn().subscribe(isLoggedIn => {
      if (!isLoggedIn) {

        // Para reedireccionar si no ha iniciado sesion

        this.router.navigate(['/']);
      }
      
    });

    const userId = localStorage.getItem('userId');
    console.log(this.nuevosDatos)
    if (userId !== null) {
      this.registroService.obtenerUsuarioPorId(userId).subscribe(
        (response) => {
          this.usuario = response;
          this.nuevosDatos = {
            nombre: this.usuario.nombre,
            correo: this.usuario.correo,
            contrasenia: '',
            direccion: this.usuario.direccion,
            numero: this.usuario.numero
          }
        },
        (error) => {
          console.error('Error al obtener la información del usuario:', error);
        }
    )}

  }

  actualizarUsuario() {
    const userId = localStorage.getItem('userId');
    console.log(this.nuevosDatos)
    if (userId !== null) {
      this.registroService.obtenerUsuarioPorId(userId).subscribe(
        (response) => {
          this.usuario = response;
          this.usuario.contrasenia = '•'.repeat(10);
        },
        (error) => {
          console.error('Error al obtener la información del usuario:', error);
        }
      );


    this.registroService.actualizarUsuario(userId, this.nuevosDatos).subscribe(
      response => {
        console.log('Usuario actualizado correctamente:', response);
      },
      error => {
        console.error('Error al actualizar el usuario:', error);
      }
    );
  }
}
}
