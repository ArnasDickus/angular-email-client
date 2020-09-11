import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@node_modules/@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-inbox-placeholder',
  templateUrl: './inbox-placeholder.component.html',
  styleUrls: ['./inbox-placeholder.component.scss']
})
export class InboxPlaceholderComponent implements OnInit {
  public faEnvelope = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }

}
