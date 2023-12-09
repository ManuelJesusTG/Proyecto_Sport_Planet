import { Component } from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent {

  producto = {
    nombre: '',
    descripcion: '',
    precio: 0,
    stock: 0,
    stock_status: false,
    categoria: '',
    marca: '',
    talla: '',
    imagen: null as File | null
  };

  subidaExitosa = false;
  errorEnSubida = false;

  constructor(private productosService: ProductosService) {}

  onFileChange(event: any): void {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.producto.imagen = fileList[0];
    }
  }
  

  onSubmit(): void {
    this.productosService.subirProductoConImagen(this.producto)
      .subscribe(
        (respuesta) => {
          console.log('Producto subido exitosamente:', respuesta);
          this.subidaExitosa = true;
          this.errorEnSubida = false;
        },
        (error) => {
          console.error('Error al subir el producto:', error);
          this.subidaExitosa = false;
          this.errorEnSubida = true;
        }
      );
  }

}
