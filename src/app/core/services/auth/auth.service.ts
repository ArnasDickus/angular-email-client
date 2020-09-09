import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignupCredentials } from '@core/interfaces/signup-credentials';
import { UsernameAvailableResponse } from '@core/interfaces/username-available-response';
import { SignupResponse } from '@core/interfaces/signup-response';
import {Observable} from '@node_modules/rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
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

  public signup(credentials: SignupCredentials): Observable<SignupResponse> {
    return this.http.post<SignupResponse>(
      `${this.url}/auth/signup`, credentials
    );
  }
}
