import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from '@core/services/email/email.service';
import { switchMap } from '@node_modules/rxjs/internal/operators';
import { Email } from '@core/interfaces/email';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.scss']
})
export class EmailShowComponent implements OnInit {
  public email: Email;

  constructor(
    private activatedRoute: ActivatedRoute,
    private emailService: EmailService
  ) { }

  public ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(({ id }) => {
        return this.emailService.getEmail(id);
    })
    ).subscribe((email) => {
      console.log(email);
      this.email = email;
    });
  }
}
