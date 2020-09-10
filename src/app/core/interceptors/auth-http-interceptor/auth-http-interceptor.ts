import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from '@node_modules/rxjs';


@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>,
            next: HttpHandler):
            Observable<HttpEvent<any>> {
    // Modify, or log the outgoing request
    const modifiedReq = req.clone({
      withCredentials: true
    });
    return next.handle(modifiedReq);
    // Example chaining pipe.
    // .pipe(
    //   filter(value => value.type === HttpEventType.Sent),
    //
    //   tap(value => {
    //     console.log(value);
    //   })
    // );
  }

}
