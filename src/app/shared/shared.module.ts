import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { EditorComponent } from './components/editor/editor.component';
import {EditorModule} from 'primeng/editor';

@NgModule({
  declarations: [InputComponent, EditorComponent],
  exports: [
    InputComponent,
    EditorComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        EditorModule
    ]
})

export class SharedModule { }
