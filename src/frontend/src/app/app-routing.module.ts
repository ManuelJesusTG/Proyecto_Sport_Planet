import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { ProductosComponent } from './productos/productos.component';
import { HomeComponent } from './home/home.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  { path: '' ,component: HomeComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'catalogo', component: CatalogoComponent},
  { path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  { path: 'perfil', component: PerfilComponent },

// Abajo del todo para redirigir
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
