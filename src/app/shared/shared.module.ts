import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import {ReactiveFormsModule} from '@angular/forms';
import {InboxModule} from '../features/inbox/inbox.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [InputComponent],
  exports: [
    InputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InboxModule,
    RouterModule
  ]
})
// @ts-ignore
export class SharedModule { }
