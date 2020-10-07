import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailShowComponent } from './pages/email-show/email-show.component';
import { EmailResolverService } from '@core/resolvers/email/email-resolver.service';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EmailLayoutComponent } from './components/email-layout/email-layout.component';
import {Allroutes} from '../../core/enums/allroutes.enum';


const routes: Routes = [
  {
    path: '',
    component: EmailLayoutComponent,
    children: [
      {
        path: ':id', component: EmailShowComponent,
        resolve: {
          email: EmailResolverService
        }
      },
      {
        path: 'not-found',
        component: NotFoundComponent
      },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxRoutingModule { }
