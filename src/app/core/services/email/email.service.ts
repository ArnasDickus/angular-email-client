import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailSummary } from '@core/interfaces/email-summary';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private url = 'https://api.angular-email.com';

  constructor(
    private http: HttpClient
  ) { }

  public getEmails(): any {
    return this.http.get<EmailSummary[]>(`${this.url}/emails`);
  }
}

