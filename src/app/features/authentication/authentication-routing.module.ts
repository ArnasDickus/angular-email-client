import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { Allroutes } from '../../core/enums/allroutes.enum';
import { LogoutComponent } from './pages/logout/logout.component';

const routes: Routes = [
  {
    path: Allroutes.REGISTER,
    component: RegisterComponent
  },
  {
    path: Allroutes.LOGIN,
    component: LoginComponent
  },
  {
    path: Allroutes.LOGOUT,
    component: LogoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
