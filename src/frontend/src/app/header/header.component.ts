import { Component } from '@angular/core';
import { RegistroService } from '../registro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private registroService: RegistroService, private router: Router) {}

  isAuthenticated(): boolean {
    return this.registroService.isAuthenticated();
  }

  logout(): void {
    this.registroService.removeToken();
    this.router.navigate(['/']);
  }

}
