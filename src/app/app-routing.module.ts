import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { PerfilEmpleadoComponent } from './components/perfil-empleado/perfil-empleado.component';
import { SubordinadoComponent } from './components/subordinado/subordinado.component';

const routes: Routes = [
  {
    path:"", component:LoginComponent
  },
  {
    path:"home",component:HomeComponent
  },
  {
    path:"detalle/:id", component:DetalleComponent
  },
  {
    path:"perfilempleado", component:PerfilEmpleadoComponent
  },
  {
    path:"subordinados", component:SubordinadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
