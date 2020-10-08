import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.scss']
})
export class EmailCreateComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  public onSubmit(): void {
    console.log(this.form);
    console.log('submit');
  }

  // public showErrors(): ValidationErrors {
  //   // const { dirty, touched, errors } = this.control;
  //   return dirty && touched && errors;
  // }

  private buildForm(): void {
    this.form = this.formBuilder.group( {
      receiver: ['', [
        Validators.required,
        Validators.email]],
      subject: ['', [
        Validators.required,
        Validators.maxLength(20)]],
      post: ['', [Validators.required]]
    });
  }

}
