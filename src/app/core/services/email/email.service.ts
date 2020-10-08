import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailSummary } from '@core/interfaces/email-summary';
import { Observable } from '@node_modules/rxjs';
import { Email } from '@core/interfaces/email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private url = 'https://api.angular-email.com';

  constructor(
    private http: HttpClient
  ) { }

  public getEmails(): Observable<EmailSummary[]> {
    return this.http.get<EmailSummary[]>(`${this.url}/emails`);
  }

  public getEmail(id: string): Observable<Email> {
    return this.http.get<Email>(`${this.url}/emails/${id}`);
  }

  public sendEmail(email: Email): Observable<Email> {
    return this.http.post<Email>(`${this.url}/emails`, email);
  }
}

