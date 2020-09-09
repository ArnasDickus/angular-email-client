import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() label: string;
  @Input() control: AbstractControl | FormControl;
  @Input() type: string;
  @Input() id: string;
  @Input() required: boolean;

  constructor() { }

  public ngOnInit(): void {
  }

  public showErrors(): ValidationErrors {
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors;
  }

}
