import { Component, OnInit } from '@angular/core';
import { faSearch } from '@node_modules/@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  public faSearch = faSearch;
  constructor() { }

  ngOnInit(): void {
  }

}
