import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../productos.service';
import { RegistroService } from '../registro.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productId: string | any;
  producto: any;

  constructor(private route: ActivatedRoute, private productoService: ProductosService, private registroService: RegistroService) {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
    });
  }

  ngOnInit(): void {
    this.productoService.obtenerProductoPorId(this.productId).subscribe(
      (data: any) => {
        this.producto = data;
      },
      (error: any) => {
        console.error('Error al obtener el producto:', error);
      }
    );
  }

  agregarAlCarrito(productoId: string): void {
    this.productoService.agregarAlCarrito(productoId).subscribe(
      (respuesta: any) => {
        console.log(respuesta.mensaje);
      },
      (error: any) => {
        console.error('Error al agregar al carrito:', error);
      }
    );
  }

  isAuthenticated(): boolean {
    return this.registroService.isAuthenticated();
  }
}