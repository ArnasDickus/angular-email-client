import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '@core/services/auth/auth.service';
import {Router} from '@angular/router';
import {Allroutes} from '@core/enums/allroutes.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
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

    this.authService.login(this.form.value)
      .subscribe({
        next: () => {
        //  Navigate
          this.router.navigateByUrl(`/${Allroutes.INBOX}`);

        },
        error: ({ error }) => {
          if (error.username || error.password) {
            this.form.setErrors({ credentials: true });
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
      ], ],
      password: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]],
    });
  }

}
