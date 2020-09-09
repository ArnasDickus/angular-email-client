import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [InputComponent],
  exports: [
    InputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
// @ts-ignore
export class SharedModule { }
