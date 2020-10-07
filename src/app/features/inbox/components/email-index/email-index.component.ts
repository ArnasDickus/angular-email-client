import { Component, OnInit } from '@angular/core';
import { EmailService } from '@core/services/email/email.service';
import { EmailSummary } from '@core/interfaces/email-summary';
import {Allroutes} from '@core/enums/allroutes.enum';

@Component({
  selector: 'app-email-index',
  templateUrl: './email-index.component.html',
  styleUrls: ['./email-index.component.scss']
})
export class EmailIndexComponent implements OnInit {
  public emails: EmailSummary[] = [];
  public allRoutesInbox = Allroutes.INBOX;

  constructor(
    private emailService: EmailService
  ) { }

  ngOnInit(): void {
    this.emailService.getEmails().subscribe((emails: EmailSummary[]) => {
      this.emails = emails;
    });
  }

}
