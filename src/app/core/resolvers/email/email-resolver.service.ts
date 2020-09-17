import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Email } from '@core/interfaces/email';
import { EmailService } from '@core/services/email/email.service';
import { catchError } from '@node_modules/rxjs/internal/operators';
import { Allroutes } from '@core/enums/allroutes.enum';
import { EMPTY } from '@node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailResolverService implements Resolve<Email> {

  constructor(
    private emailService: EmailService,
    private router: Router
  ) { }

  public resolve(route: ActivatedRouteSnapshot ): any {
    const { id } = route.params;

    return this.emailService.getEmail(id).pipe(
      catchError(() => {
        this.router.navigateByUrl(`${Allroutes.INBOX}/${Allroutes.NOTFOUND}`);
        return EMPTY;
      })
    );
  }
}
