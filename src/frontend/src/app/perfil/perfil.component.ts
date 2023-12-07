import { Component } from '@angular/core';
import { RegistroService } from '../registro.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  usuario: any;
  
  constructor(private registroservice: RegistroService) {}

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
    if (userId !== null) {
      this.registroservice.obtenerUsuarioPorId(userId).subscribe(
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
