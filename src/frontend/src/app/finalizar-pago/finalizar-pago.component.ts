import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../registro.service';
import { ProductosService } from '../productos.service';
import { Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-finalizar-pago',
  templateUrl: './finalizar-pago.component.html',
  styleUrls: ['./finalizar-pago.component.css']
})
export class FinalizarPagoComponent implements OnInit {

  usuarioID: string = localStorage.getItem('userId') ?? '';

  ticket: any = {
    usuarioID: this.usuarioID,
    datosPago: '',
    metodoPago: 'Tarjeta de crédito',
    Productos: []
  };
  precio: any;
  Productos: any=[];

  constructor(private productoService: ProductosService, private registroService: RegistroService, private router: Router) { }

  ngOnInit(): void {
    this.productoService.obtenerPrecio(this.usuarioID).subscribe(
      precio => {
        this.precio = precio[0].precio;
        this.Productos = precio[0].Productos;
  
        this.ticket = {
          usuarioID: this.usuarioID,
          datosPago: '',
          metodoPago: 'Tarjeta de crédito',
          Productos: this.Productos,
          precio: this.precio
        };
      },
      error => {
        console.error('Error al obtener el precio:', error);
      }
    );
  }

  finalizarPago() {
    if (!this.precio || !this.Productos) {
      console.error('Error: Datos insuficientes para finalizar el pago.');
      return;
    }
  
    console.log('Datos del formulario:', this.ticket);
  
    this.productoService.confirmarPago(this.ticket)
      .pipe(
        switchMap(response => {
          console.log('Registro exitoso', response);
          return this.productoService.borrarCarrito(this.usuarioID);
        })
      )
      .subscribe(
        () => {
          console.log('Carrito borrado exitosamente');
          this.router.navigate(['/gracias']);
        },
        error => {
          console.error('Error al borrar el carrito', error);
        }
      );
  }

  isAuthenticated(): boolean {
    return this.registroService.isAuthenticated();
  }
}