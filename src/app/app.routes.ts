import { Routes } from '@angular/router';
import { ReservaComponent } from './components/reserva/reserva.component';
import { LoginComponent } from './components/login/login.component';
import { SolicitudComponent } from './components/solicitud/solicitud.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { MenuComponent } from './components/menu/menu.component';


export const routes: Routes = [
  {path:'', redirectTo:'/login',pathMatch:"full"},
{path:'login',component:LoginComponent},
{path:'solicitud',component:SolicitudComponent},
{path:'reserva',component:ReservaComponent},
{path:'administracion',component:AdministracionComponent},
{path:'menu',component:MenuComponent},
{path:'**',component:NotfoundComponent},


];
