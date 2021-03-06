import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatchPassword } from '@core/validators/match-password/match-password';
import { UniqueUsername } from '@core/validators/unique-username/unique-username';
import { AuthService } from '@core/services/auth/auth.service';
import {Router} from '@angular/router';
import {Allroutes} from '@core/enums/allroutes.enum';

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
    private authService: AuthService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.buildForm();
  }

  public onSubmit(): void {
    if (this.form.invalid) {
      return;
    }
    this.authService.register(this.form.value).subscribe({
      next: (response): any => {
        this.router.navigateByUrl(`/${Allroutes.INBOX}`);
      },
      error: (err) => {
        if (!err.status) {
          this.form.setErrors({ noConnection: true });
        } else {
          this.form.setErrors({ unknownError: true });
        }
      }
    });
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
