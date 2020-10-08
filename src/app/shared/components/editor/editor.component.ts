import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormControl} from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  @Input() id: string;
  @Input() label: string;
  @Input() control: AbstractControl | FormControl;

  constructor() { }

  ngOnInit(): void {
  }

}
