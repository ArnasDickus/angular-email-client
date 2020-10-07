import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@node_modules/@ng-bootstrap/ng-bootstrap';
import { EmailCreateComponent } from '@features/inbox/components/email-create/email-create.component';

@Component({
  selector: 'app-email-sidebar',
  templateUrl: './email-sidebar.component.html',
  styleUrls: ['./email-sidebar.component.scss']
})
export class EmailSidebarComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    public activeModal: NgbModal
  ) { }

  ngOnInit(): void {
  }

  public openModal(): void {
    this.modalService.open(EmailCreateComponent, {
      size: 'lg'
    });
  }

}
