import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private apiUrl = 'http://localhost:3000/usuarios';

  private TOKEN_KEY = 'miToken';

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

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  removeToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isLoggedIn(): Observable<boolean> {
    const token = localStorage.getItem(this.TOKEN_KEY);
    return of(!!token); // Devuelve true si el token existe, false de lo contrario
  }

  private isTokenExpired(token: string): boolean {
    return false;
  }

  obtenerUsuarioPorId(userId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${userId}`);
  }

  
}