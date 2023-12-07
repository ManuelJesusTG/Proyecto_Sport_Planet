import { Component } from '@angular/core';
import { RegistroService } from '../registro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  usuario: any;
  
  constructor(private registroService: RegistroService, private router: Router) {}

  ngOnInit(): void {

    this.registroService.isLoggedIn().subscribe(isLoggedIn => {
      if (!isLoggedIn) {

        // Para reedireccionar si no ha iniciado sesion

        this.router.navigate(['/']);
      }
    });


    const userId = localStorage.getItem('userId');
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
    } else {
      console.error('El ID del usuario no está presente en el localStorage');
    }
  }
}
