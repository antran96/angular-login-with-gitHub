import {NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import * as components from '../components/index'
import * as libraryModules from '../components/library';
import * as services from '../services';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterceptorService } from 'src/services/interceptor.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OAuthModule, OAuthModuleConfig } from 'angular-oauth2-oidc';
import { authConfig } from 'src/data/oauth.config';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';




@NgModule({
  declarations: [
    AppComponent,
    ...components.components,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ...libraryModules.libraryModules,
    OAuthModule.forRoot()
  ],
  providers: [
    ...services.services,
    JwtHelperService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    { provide: OAuthModuleConfig, useValue: authConfig },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
