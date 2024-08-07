import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Componentes/home/home.component';
import { AdministradorComponent } from './Componentes/home/administrador/administrador.component';
import { ComentariosComponent } from './Componentes/home/comentarios/comentarios.component';
import { ControlUsuariosComponent } from './Componentes/home/control-usuarios/control-usuarios.component';
import { DocentesComponent } from './Componentes/home/docentes/docentes.component';
import { LoginComponent } from './Componentes/home/login/login.component';
import { UsuarioComponent } from './Componentes/home/usuario/usuario.component';
import { VerificacionComponent } from './Componentes/home/verificacion/verificacion.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdministradorComponent,
    ComentariosComponent,
    ControlUsuariosComponent,
    DocentesComponent,
    LoginComponent,
    UsuarioComponent,
    VerificacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
