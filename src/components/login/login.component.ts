import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiUrl } from 'src/data/api-url.data';
import { authConfig } from 'src/data/oauth.config';
import { ApiClientService, SessionService, TokenService } from 'src/services';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 public url: string = ''
  constructor(private router: Router,
    private api: ApiClientService,
    private authService: AuthService,
    private tokenService: TokenService,
    private sessionService: SessionService) {
      this.url = `${ApiUrl.oauth}?client_id=${authConfig.clientId}&redirect_uri=${authConfig.redirectUri}`
    }

  ngOnInit(): void {
    this.sessionService.clearAll()
    this.authService.handleGitHubOAuthResponse()
    this.authService.code$.subscribe(code => {
      if(code) {
        this.login(code)
      } else {
        this.router.navigateByUrl('/login')
      }
    })
  }

  login(code: string) {
    let params = {
      'client_id': authConfig.clientId,
      'client_secret': authConfig.dummyClientSecret,
      'code': code,
    }
    this.api.login(params).subscribe(res => {
      this.tokenService.saveToken(res.access_token ? res.access_token : null)
      this.router.navigateByUrl('/home')
    })
  }

  onLogin() {
    this.tokenService.saveToken('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')
    this.router.navigateByUrl('/home')
  }
}
