import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterCredentials } from '@core/interfaces/signup-credentials';
import { UsernameAvailableResponse } from '@core/interfaces/username-available-response';
import { RegisterResponse } from '@core/interfaces/signup-response';
import { BehaviorSubject, Observable} from '@node_modules/rxjs';
import { tap } from '@node_modules/rxjs/internal/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loggedIn$ = new BehaviorSubject(false);
  private url = 'https://api.angular-email.com';

  constructor(
    private http: HttpClient
  ) {
  }

  public usernameAvailable(username): Observable<UsernameAvailableResponse> {
    return this.http.post<UsernameAvailableResponse>(`${this.url}/auth/username`, {
      username
    });
  }

  public register(credentials: RegisterCredentials): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(
      `${this.url}/auth/signup`, credentials
    ).pipe(
      tap(() => {
        this.loggedIn$.next(true);
      })
    );
  }
}
