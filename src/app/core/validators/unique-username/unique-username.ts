import { Injectable } from '@angular/core';

import { FormControl, ValidationErrors, Validator } from '@angular/forms';
import { catchError, map } from '@node_modules/rxjs/internal/operators';
import { of } from '@node_modules/rxjs';
import {AuthService} from '@core/services/auth/auth.service';

@Injectable({ providedIn: 'root' })
export class UniqueUsername implements Validator {
  private url = 'https://api.angular-email.com';
  constructor(
    private authService: AuthService
  ) {
  }

  public validate = (control: FormControl): ValidationErrors | null => {
    const { value } = control;
    return this.authService.usernameAvailable(value)
   .pipe(
      map((values: any) => {
        if (values.available) {
          return null;
        }
      }),
      catchError((error) => {
        if (error.error.username) {
          // Shortcut for creating new observable.
          return of({ nonUniqueUsername: true});
        } else {
          return of({ noConnection: true });
        }
      })
    );
  }
}
