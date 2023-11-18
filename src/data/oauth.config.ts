import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  clientId: '97a4dad514ad40370bbc',
  dummyClientSecret: '202b7707675a9fa471bb3612b82be1a1fbfac5d8', // This is not required for GitHub
  redirectUri: 'http://localhost:4200/login',
  scope: 'user',
  oidc: false,
};