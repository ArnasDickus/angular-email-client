import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface UsernameAvailableResponse {
  available: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'https://api.angular-email.com';

  constructor(
    private http: HttpClient
  ) {
  }

  public usernameAvailable(username): any {
    return this.http.post<UsernameAvailableResponse>(`${this.url}/auth/username`, {
      username
    });
  }
}
