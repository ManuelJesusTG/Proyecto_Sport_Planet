import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from '../productos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {

  productos: Observable<any[]> = new Observable<any[]>();

  constructor(private productoService: ProductosService, private router: Router) {}

  ngOnInit(): void {
    this.productos = this.productoService.obtenerProductos();
  }  

  irAProducto(id: string) {
    this.router.navigate(['/producto', id]);
  }

}
