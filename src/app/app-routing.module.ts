import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { ProductoComponent } from './producto/producto.component';
import { EnlistarProductoComponent } from './enlistar-producto/enlistar-producto.component';
import { EnlistarUsuariosComponent } from './enlistar-usuarios/enlistar-usuarios.component';

const routes: Routes = [

  {path : 'usuarios', component: UsuarioComponent},
  {path : 'productos', component: ProductoComponent},
  {path : 'enlistarproductos', component: EnlistarProductoComponent},
  {path : 'enlistarusuarios', component: EnlistarUsuariosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
