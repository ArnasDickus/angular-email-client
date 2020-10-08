import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '@core/services/email/email.service';
import { NgbActiveModal } from '@node_modules/@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.scss']
})
export class EmailCreateComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private emailService: EmailService,
    public modal: NgbActiveModal
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  public onSubmit(): void {
    if (this.form.invalid) {
      return;
    }
    this.emailService.sendEmail(this.form.value).subscribe(() => {
      this.modal.close();
    });
  }

  private buildForm(): void {
    this.form = this.formBuilder.group( {
      to: ['', [
        Validators.required,
        Validators.email]],
      subject: ['', [
        Validators.required,
        Validators.maxLength(20)]],
      text: ['', [Validators.required]]
    });
  }
}
