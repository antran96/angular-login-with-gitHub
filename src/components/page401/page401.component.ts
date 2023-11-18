import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from 'src/data/oauth.config';

@Component({
  selector: 'app-page401',
  templateUrl: './page401.component.html',
  styleUrls: ['./page401.component.scss']
})
export class Page401Component {
  constructor(private oauthService: OAuthService) {
    this.configureOAuth();
  }
  loginWithGitHub() {
    this.oauthService.initImplicitFlow();
  }

  private configureOAuth() {
    this.oauthService.configure(authConfig);
    this.oauthService.setupAutomaticSilentRefresh();
  }
}
