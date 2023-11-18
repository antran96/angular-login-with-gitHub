import { Injectable } from '@angular/core';
import { SessionService } from './session.service';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private session: SessionService,
    private jwtService: JwtHelperService) { }

  public saveToken(token: string) {
    this.session.saveItem('token', token)
  }

  public getToken(): string {
    return this.session.getItem('token')
  }

  public removeToken() {}

  public refreshToken() {}

  public addAuthToken(request: HttpRequest<any>) {
    if (request.url.match(this.getToken())) {
      return request;
    }
    // Get token from local
    const token = this.getToken();
    
    if (!token) {
      return request;
    }

    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  get tokenExpired$(): Observable<boolean> {
    return new Observable<boolean> (o => {
      let token = this.getToken()
      console.log(token)
      if(token && this.jwtService.isTokenExpired(token)) {
        o.next(true)
      } else {
        o.next(false)
      }
      o.complete()
    })
  }

}
