import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoComponent } from './producto/producto.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { EnlistarProductoComponent } from './enlistar-producto/enlistar-producto.component';
import { EnlistarUsuariosComponent } from './enlistar-usuarios/enlistar-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    UsuarioComponent,
    EnlistarProductoComponent,
    EnlistarUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
