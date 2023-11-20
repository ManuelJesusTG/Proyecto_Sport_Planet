import { Component, OnInit } from '@angular/core';
import { PruebaService } from '../prueba.service'; // Ajusta la ruta según la ubicación de tu servicio

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {

  prueba: any = {};
  error: any;

  constructor(private pruebaService: PruebaService) {}

  ngOnInit() {
    this.pruebaService.obtenerDatos().subscribe(
      (data: any) => {
      this.prueba = data;
    },
    (error) => {
      console.error('Error al obtener la cadena', error);
    }
  );
}
}