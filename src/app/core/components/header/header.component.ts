import { Component, Input, OnInit } from '@angular/core';
import { Allroutes } from '@core/enums/allroutes.enum';
import { BehaviorSubject } from '@node_modules/rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() loggedIn$: BehaviorSubject<boolean>;
  public inboxRoute = Allroutes.INBOX;
  public logoutRoute = Allroutes.LOGOUT;
  public loginRoute = Allroutes.LOGIN;
  public registerRoute = Allroutes.REGISTER;

  constructor() { }

  ngOnInit(): void {
  }

}
