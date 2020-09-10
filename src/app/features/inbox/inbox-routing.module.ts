import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InboxPlaceholderComponent } from './components/inbox-placeholder/inbox-placeholder.component';
import {EmailShowComponent} from './components/email-show/email-show.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: ':id', component: EmailShowComponent
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
