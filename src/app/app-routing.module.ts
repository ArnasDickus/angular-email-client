import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Allroutes } from '@core/enums/allroutes.enum';

const routes: Routes = [
  {
    path: '',
    redirectTo: `${Allroutes.LOGIN}`,
    pathMatch: 'full' ,
  },

  {
    path: '',
    loadChildren: () => import('./features/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: '**',
    loadChildren: () => import('./features/not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
