import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../registro.service';
import { ProductosService } from '../productos.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  productosCarrito: any[] = [];
  usuarioId: string = localStorage.getItem('userId') ?? '';
  precio: Observable<any[]> = new Observable<any[]>();

  constructor(private productoService: ProductosService, private registroService: RegistroService) { }

  ngOnInit(): void {
    if (this.usuarioId) {
      this.obtenerProductosCarrito();
    }
    this.precio = this.productoService.obtenerPrecio(this.usuarioId);
  }


  obtenerProductosCarrito(): void {
    this.productoService.obtenerProductosCarrito(this.usuarioId).subscribe(
      productos => {
        this.productosCarrito = productos.map(producto => ({
          _id: producto._id,
          nombre: producto.nombre,
          descripcion: producto.descripcion,
          precio: producto.precio,
          stock: producto.stock,
          categoria: producto.categoria,
          stock_status: producto.stock_status,
          marca: producto.marca,
          talla: producto.talla,
          imagen: `https://proyectosportplanet-production.up.railway.app/productos/obtener-imagen/${producto.imagen}`
        }));
      },
      error => {
        console.error('Error al obtener productos del carrito:', error);
      }
    );
  }



  eliminarProducto(productoId: string): void {
    this.productoService.eliminarProductoCarrito(this.usuarioId, productoId).subscribe(
      () => {
        this.obtenerProductosCarrito();
      },
      (error) => {
        console.error('Error al eliminar producto del carrito:', error);
      }
    );
  }

  isAuthenticated(): boolean {
    return this.registroService.isAuthenticated();
  }

}