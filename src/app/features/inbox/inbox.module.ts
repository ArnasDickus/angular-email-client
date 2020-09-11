import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { EmailCreateComponent } from './components/email-create/email-create.component';
import { EmailReplayComponent } from './components/email-replay/email-replay.component';
import { EmailShowComponent } from './components/email-show/email-show.component';
import { EmailIndexComponent } from './components/email-index/email-index.component';
import { InboxPlaceholderComponent } from './components/inbox-placeholder/inbox-placeholder.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    HomeComponent,
    EmailCreateComponent,
    EmailReplayComponent,
    EmailShowComponent,
    EmailIndexComponent,
    InboxPlaceholderComponent],
  imports: [
    CommonModule,
    InboxRoutingModule,
    FontAwesomeModule
  ]
})
export class InboxModule { }
