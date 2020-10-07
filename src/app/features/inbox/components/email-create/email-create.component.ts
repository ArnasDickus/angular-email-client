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
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  public onSubmit(): void {
    console.log('submit');
  }

  private buildForm(): void {
    this.form = this.formBuilder.group( {
      receiver: '',
      subject: '',
      post: ''
    });
  }

}
