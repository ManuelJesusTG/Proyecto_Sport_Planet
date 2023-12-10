import { Component } from '@angular/core';
import { RegistroService } from '../registro.service';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

  productosCarrito: any[] = [];
  usuarioId: string = localStorage.getItem('userId') ?? '';

  constructor(private productoService: ProductosService, private registroService:RegistroService) { }

  ngOnInit(): void {
    if (this.usuarioId) {
      this.obtenerProductosCarrito();
    }
  }

  obtenerProductosCarrito(): void {
    this.productoService.obtenerProductosCarrito(this.usuarioId).subscribe(
      productos => {
        this.productosCarrito = productos;
      },
      error => {
        console.error('Error al obtener productos del carrito:', error);
      }
    );
    
  }
}
