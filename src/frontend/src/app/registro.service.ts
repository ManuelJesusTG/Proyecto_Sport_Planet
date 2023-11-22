import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private apiUrl = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) {}

  registrarUsuario(usuario: any): Observable<any> {

    console.log(usuario)

    const jsonUsuario = JSON.stringify(usuario);

    const headers = { 'Content-Type': 'application/json' };

    
    return this.http.post(`${this.apiUrl}/register`, jsonUsuario, { headers });
  }

  logearUsuario(usuario: any): Observable<any> {

    console.log(usuario)

    const jsonUsuario = JSON.stringify(usuario);

    const headers = { 'Content-Type': 'application/json' };

    
    return this.http.post(`${this.apiUrl}/login`, jsonUsuario, { headers });
  }
}