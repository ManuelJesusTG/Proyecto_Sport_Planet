import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private apiUrl = 'http://localhost:3000/productos';
  private api = 'http://localhost:3000/'

  constructor(private http: HttpClient) {}

  obtenerProductos(): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}`)
  }

  subirProductoConImagen(producto: any): Observable<any> {
    const formData = new FormData();
    formData.append('nombre', producto.nombre);
    formData.append('descripcion', producto.descripcion);
    formData.append('precio', producto.precio);
    formData.append('stock', producto.stock);
    formData.append('categoria', producto.categoria);
    formData.append('stock_status', producto.stock_status);
    formData.append('marca', producto.marca);
    formData.append('talla', producto.talla);
    formData.append('imagen', producto.imagen);

    return this.http.post(`${this.apiUrl}/subir-imagen-producto`, formData);

  }

  obtenerProductoPorId(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  agregarAlCarrito(productoId: string): Observable<any> {
    const userId = localStorage.getItem('userId');
    const url = `${this.api}carritos/agregar-al-carrito`;
    const data = { usuarioId: userId, productoId };
    return this.http.post<any>(url, data);
  }

  obtenerProductosCarrito(usuarioId: string): Observable<any[]> {
    const url = `${this.api}carritos/api/productos/${usuarioId}`;
    return this.http.get<any[]>(url);
  }

  obtenerPrecio(usuarioId: string): Observable<any[]> {
    const url = `${this.api}carritos/${usuarioId}`;
    return this.http.get<any[]>(url);
  }

  eliminarProductoCarrito(usuarioId: string, productoId: string): Observable<any> {
    const url = `${this.api}carritos/${usuarioId}/eliminar/${productoId}`;
    return this.http.delete(url);
  }

  confirmarPago(pago: any): Observable<any> {
    const url = `${this.api}tickets/`;
    console.log(pago)
    return this.http.post<any>(url, pago);
  }

  borrarCarrito(usuarioID: string): Observable<any> {
    const url = `${this.api}carritos/${usuarioID}`;
    return this.http.delete(url);
}

obtenerTicketsUsuario(usuarioID: string): Observable<any[]> {
    const url = `${this.api}tickets/${usuarioID}`;
    return this.http.get<any[]>(url);
  }


}
