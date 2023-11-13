import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl = 'http://localhost:3000/productos'; // Reemplaza con la URL correcta de tu backend

  constructor(private http: HttpClient) {}

  obtenerProductoPorId(id: number): Observable<string> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<string>(url, { responseType: 'text' as 'json' });
  }

  // Puedes agregar más métodos según sea necesario, por ejemplo, obtener un solo producto, agregar productos, etc.
}