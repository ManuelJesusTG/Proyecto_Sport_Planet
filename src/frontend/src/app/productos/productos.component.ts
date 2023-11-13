import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../servicios/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  productos: string[] = [];;

  constructor(private productoService: ProductoService) {}

  ngOnInit() {
    const idProducto = 1; // Reemplaza con el ID del producto que deseas obtener
    this.productoService.obtenerProductoPorId(idProducto).subscribe(
      (data: string) => {
        this.productos = [data];
      },
      error => {
        console.error('Error al obtener el producto:', error);
      }
    );
  }
}