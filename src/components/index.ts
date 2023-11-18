import { HomePageComponent } from "./home-page/home-page.component";
import { InputComponent } from "./input/input.component";
import { LayoutComponent } from "./layout/layout.component";
import { LoginComponent } from "./login/login.component";
import { Page401Component } from "./page401/page401.component";
import { PopupSearchComponent } from "./popup-search/popup-search.component";

export const components = [ 
    LayoutComponent,
    HomePageComponent,
    PopupSearchComponent,
    LoginComponent,
    Page401Component,
    InputComponent
]

export * from './layout/layout.component'
export * from './home-page/home-page.component'
export * from './popup-search/popup-search.component'
export * from './login/login.component'
export * from './page401/page401.component'
export * from './input/input.component'