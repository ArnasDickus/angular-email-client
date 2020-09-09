import { Component, OnInit } from '@angular/core';
import { Allroutes } from '@core/enums/allroutes.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public homeRoute = Allroutes.HOME;
  public inboxRoute = Allroutes.INBOX;
  public logoutRoute = Allroutes.LOGOUT;
  public loginRoute = Allroutes.LOGIN;
  public registerRoute = Allroutes.REGISTER;

  constructor() { }

  ngOnInit(): void {
  }

}
