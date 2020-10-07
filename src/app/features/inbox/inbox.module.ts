import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { EmailCreateComponent } from './components/email-create/email-create.component';
import { EmailReplayComponent } from './components/email-replay/email-replay.component';
import { EmailIndexComponent } from './components/email-index/email-index.component';
import { EmailShowComponent } from './pages/email-show/email-show.component';
import { InboxPlaceholderComponent } from './components/inbox-placeholder/inbox-placeholder.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EmailSidebarComponent } from './components/email-sidebar/email-sidebar.component';
import { EmailLayoutComponent } from './components/email-layout/email-layout.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    EmailCreateComponent,
    EmailReplayComponent,
    EmailIndexComponent,
    EmailShowComponent,
    InboxPlaceholderComponent,
    NotFoundComponent,
    EmailLayoutComponent,
    EmailSidebarComponent],
  exports: [
  ],
  imports: [
    CommonModule,
    InboxRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ]
})
export class InboxModule { }
