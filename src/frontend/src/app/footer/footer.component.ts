import { Component } from '@angular/core';
import { RegistroService } from '../registro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(private registroService: RegistroService, private router: Router) {}

  isAuthenticated(): boolean {
    return this.registroService.isAuthenticated();
  }

}
