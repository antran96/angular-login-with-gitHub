import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class GuardService implements CanActivate {

  constructor(private tokenService: TokenService,
    private router: Router,
    private jwtService: JwtHelperService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return new Observable<boolean> (o => {
      this.tokenService.tokenExpired$.subscribe(value => {
        console.log(value)
        if(value) {
          o.next(true)
          o.complete()
        } else {
          this.router.navigateByUrl('/login')
        }
      })
    })
  }
  
}
