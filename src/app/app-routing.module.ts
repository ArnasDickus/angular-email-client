import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Allroutes } from '@core/enums/allroutes.enum';
import { AuthGuard } from '@core/guards/auth.guard';

const routes: Routes = [
  // If not logged in. Redirect user to auth/login page.
  // If logged in redirect user to empty page.
  {
    path: '',
    loadChildren: () => import('./features/landing/landing.module').then(m => m.LandingModule)
  },

  {
    path: '',
    loadChildren: () => import('./features/authentication/authentication.module').then(m => m.AuthenticationModule)
  },

  {
    path: Allroutes.INBOX,
    canLoad: [AuthGuard],
    loadChildren: () => import('./features/inbox/inbox.module').then(m => m.InboxModule)
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
