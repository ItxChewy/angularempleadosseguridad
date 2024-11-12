import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { ServiceAuth } from './service/auth.service';
import { MenuComponent } from './components/menu/menu.component';
import { ServiceEmpleados } from './service/empleados.service';
import { DetalleComponent } from './components/detalle/detalle.component';
import { PerfilEmpleadoComponent } from './components/perfil-empleado/perfil-empleado.component';
import { SubordinadoComponent } from './components/subordinado/subordinado.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    DetalleComponent,
    PerfilEmpleadoComponent,
    SubordinadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [provideHttpClient(),ServiceAuth,ServiceEmpleados],
  bootstrap: [AppComponent]
})
export class AppModule { }
