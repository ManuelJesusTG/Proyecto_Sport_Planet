import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { RegisterComponent } from './register/register.component';


import { PruebaService } from './prueba.service';
import { RegistroService } from './registro.service';
import { ProductosService } from './productos.service';

import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { AvisoComponent } from './aviso/aviso.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { CookiesComponent } from './cookies/cookies.component';
import { EditarComponent } from './editar/editar.component';
import { CommonModule } from '@angular/common';
import { NuevoProductoComponent } from './nuevo-producto/nuevo-producto.component';
import { ProductoComponent } from './producto/producto.component';
import { CarritoComponent } from './carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
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
    EditarComponent,
    NuevoProductoComponent,
    ProductoComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    ,HttpClientModule, NgbModule, FormsModule, CommonModule
  ],
  providers: [PruebaService,RegistroService,ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
