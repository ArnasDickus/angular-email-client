import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Email} from '@core/interfaces/email';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmailService} from '@core/services/email/email.service';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.scss']
})
export class EmailShowComponent implements OnInit {
  public email: Email;
  public form: FormGroup;
  public reply = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private emailService: EmailService
  ) {
    this.activatedRoute.data.subscribe(({ email }) => {
      this.email = email;
    });
  }

  public ngOnInit(): void {
    this.buildForm();
  }

  public onReply(): void {
    this.reply  = !this.reply;
  }

  public onSubmit(): void {
    console.log(this.form.getRawValue());
    this.emailService.sendEmail(this.form.getRawValue()).subscribe(() => {
      this.reply = false;
    });
  }

  private buildForm(): void {
    this.form = this.formBuilder.group( {
      to: [{ value: this.email.from, disabled: true, },
        Validators.required,
        Validators.email],
      subject: ['', [
        Validators.required,
        Validators.maxLength(20)]],
      text: ['', [Validators.required]]
    });
  }

}
