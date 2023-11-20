import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PruebaService {
  private apiUrl = 'http://localhost:3000/api/prueba';

  constructor(private http: HttpClient) {}

  obtenerDatos(): Observable<any>{
    return this.http.get<any>('http://localhost:3000/api/prueba');
  }
}