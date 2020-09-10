import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterCredentials } from '@core/interfaces/signup-credentials';
import { UsernameAvailableResponse } from '@core/interfaces/username-available-response';
import { RegisterResponse } from '@core/interfaces/signup-response';
import { BehaviorSubject, Observable } from '@node_modules/rxjs';
import { tap } from '@node_modules/rxjs/internal/operators';
import { SignedInResponse } from '@core/interfaces/signed-in-response';
import { LoginCredentials } from '@core/interfaces/login-credentials';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loggedIn$ = new BehaviorSubject(null);
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

  public checkAuth(): any {
    return this.http.get<SignedInResponse>(`${this.url}/auth/signedin`)
      .pipe(
        tap(({ authenticated }) => {
          this.loggedIn$.next(authenticated);
        })
      );
  }

  public signOut(): any {
    return this.http.post(`${this.url}/auth/signout`, {})
      .pipe(
        tap(() => {
          this.loggedIn$.next(false);
        })
      );
  }

  public login(credentials: LoginCredentials): Observable<LoginCredentials> {
    return this.http.post<LoginCredentials>(`${this.url}/auth/signin`, credentials)
      .pipe(
        tap(() => {
          this.loggedIn$.next(true);
        })
      );
  }
}
