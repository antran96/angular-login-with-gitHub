import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { BehaviorSubject, Subject } from 'rxjs';
import { authConfig } from 'src/data/oauth.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public code$ = new BehaviorSubject<string>('');
  constructor(private router: Router) { 
  }


  handleGitHubOAuthResponse() {
    const code = this.router.parseUrl(this.router.url).queryParamMap.get('code');
    if (code) {
      this.code$.next(code);
    }
  }
}
