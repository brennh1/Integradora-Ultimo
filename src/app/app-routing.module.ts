import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Componentes/home/home.component';
import { AdministradorComponent } from './Componentes/home/administrador/administrador.component';
import { ComentariosComponent } from './Componentes/home/comentarios/comentarios.component';
import { ControlUsuariosComponent } from './Componentes/home/control-usuarios/control-usuarios.component';
import { DocentesComponent } from './Componentes/home/docentes/docentes.component';
import { LoginComponent } from './Componentes/home/login/login.component';
import { UsuarioComponent } from './Componentes/home/usuario/usuario.component';
import { VerificacionComponent } from './Componentes/home/verificacion/verificacion.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'admin',component:AdministradorComponent},
  {path:'comen',component:ComentariosComponent},
  {path:'control',component:ControlUsuariosComponent},
  {path:'doce',component:DocentesComponent},
  {path:'login',component:LoginComponent},
  {path:'usu',component:UsuarioComponent},
  {path:'veri',component:VerificacionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
