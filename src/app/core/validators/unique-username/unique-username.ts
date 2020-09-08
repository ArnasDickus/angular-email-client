import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, ValidationErrors, Validator } from '@angular/forms';
import { catchError, map } from '@node_modules/rxjs/internal/operators';
import { of } from '@node_modules/rxjs';

@Injectable({ providedIn: 'root' })
export class UniqueUsername implements Validator {
  private url = 'https://api.angular-email.com';
  constructor(private http: HttpClient) {
  }

  public validate = (control: FormControl): ValidationErrors | null => {
    const { value } = control;
    return this.http.post<any>(`${this.url}/auth/username`, {
      username: value
    }).pipe(
      map((values) => {
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
