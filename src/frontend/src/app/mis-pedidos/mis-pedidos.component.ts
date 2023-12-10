import { Component } from '@angular/core';
import { ProductosService } from '../productos.service';
import { RegistroService } from '../registro.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mis-pedidos',
  templateUrl: './mis-pedidos.component.html',
  styleUrls: ['./mis-pedidos.component.css']
})
export class MisPedidosComponent {

  usuarioID: string = localStorage.getItem('userId') ?? '';
  ticketsUsuario: any[] = [];

  constructor(private productoService: ProductosService, private registroService: RegistroService) {}

  ngOnInit(): void {
    this.obtenerTicketsUsuario();
  }

  obtenerTicketsUsuario() {
    this.productoService.obtenerTicketsUsuario(this.usuarioID).subscribe(
      tickets => {
        console.log('Tickets del usuario:', tickets);
        this.ticketsUsuario = tickets;
      },
      error => {
        console.error('Error al obtener los tickets del usuario:', error);
      }
    );
  }

}
