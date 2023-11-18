import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private router: Router,
    private tokenService: TokenService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(this.tokenService.addAuthToken(req)).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error && error.status === 401) {
          // refresh token
          this.handle401Error(req, next);
        } else if (
          error &&
          error.url?.match(this.tokenService.getToken()) &&
          error.status === 400
        ) {
          // this.tokenService.removeToken();
          // this.tokenService.removeRefreshToken();
          // this.router.navigateByUrl('login');
          // this.notificationService.showError('Invalid username or password');
        }

        return throwError(error);
      })
    );
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    this.router.navigateByUrl('/page-401')
  }  
}
