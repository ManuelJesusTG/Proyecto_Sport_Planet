import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { RegisterComponent } from './register/register.component';


import { PruebaService } from './prueba.service';
import { RegistroService } from './registro.service';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { AvisoComponent } from './aviso/aviso.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { CookiesComponent } from './cookies/cookies.component';
import { EditarComponent } from './editar/editar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CatalogoComponent,
    RegisterComponent,
    LoginComponent,
    PerfilComponent,
    NosotrosComponent,
    AvisoComponent,
    PrivacidadComponent,
    CookiesComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    ,HttpClientModule, NgbModule, FormsModule
  ],
  providers: [PruebaService,RegistroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
