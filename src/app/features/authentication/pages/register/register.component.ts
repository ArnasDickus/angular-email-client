import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatchPassword } from '@core/validators/match-password/match-password';
import { UniqueUsername } from '@core/validators/unique-username/unique-username';
import { AuthService } from '@core/services/auth/auth.service';

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
    private uniqueUsername: UniqueUsername,
    private authService: AuthService
  ) { }

  public ngOnInit(): void {
    this.buildForm();
  }

  public onSubmit(): void {
    if (this.form.invalid) {
      return;
    }
    this.authService.signup(this.form.value)
      .subscribe((response) => {
        console.log(response);
      });
    console.log(this.form.value);
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
