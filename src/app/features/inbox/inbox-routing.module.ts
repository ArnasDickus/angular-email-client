import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InboxPlaceholderComponent } from './components/inbox-placeholder/inbox-placeholder.component';
import { EmailShowComponent } from './components/email-show/email-show.component';
import { EmailResolverService } from '@core/resolvers/email/email-resolver.service';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'not-found',
        component: NotFoundComponent
      },

      {
        path: ':id', component: EmailShowComponent,
        resolve: {
          email: EmailResolverService
        }
      },

      {
        path: '', component: InboxPlaceholderComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxRoutingModule { }
