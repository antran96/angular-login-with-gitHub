import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent, LayoutComponent, Page401Component } from 'src/components';
import { LoginComponent } from 'src/components/login/login.component';
import { GuardService } from 'src/services';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: LayoutComponent,
    // canActivate: [GuardService],
    children: [
      {
        path: 'home',
        component: HomePageComponent
      },
    ]
  },
  {
    path: 'page-401',
    component: Page401Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
