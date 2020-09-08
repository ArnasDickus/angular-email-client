import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatchPassword } from '@core/validators/match-password/match-password';
import { UniqueUsername } from '@core/validators/unique-username/unique-username';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private matchPassword: MatchPassword,
    private uniqueUsername: UniqueUsername
  ) { }

  public ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.form = this.formBuilder.group( {
      username: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern(/^[a-z0-9]+$/)
      ], [this.uniqueUsername.validate]],
      password: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]],
      passwordConfirmation: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
  ]]
    }, { validators: [this.matchPassword.validate]});
  }

}
