import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth/auth.service';
import { BehaviorSubject } from '@node_modules/rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'Angular Email ';
  public loggedIn$: BehaviorSubject<boolean>;

  constructor(
    private authService: AuthService
  ) {
    this.loggedIn$ = this.authService.loggedIn$;
  }

  public ngOnInit(): void {
  }

}
