import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { HeaderComponent } from './Pages/header/header.component';
import { FooterComponent } from './Pages/footer/footer.component';
import { VendorLoginDashboardComponent } from './vendor-login-dashboard/vendor-login-dashboard.component';
import { VendorDetailsComponent } from './vendor-details/vendor-details.component';
import { AuthorizationLoginDashboardComponent } from './authorization-login-dashboard/authorization-login-dashboard.component';
import { AuthorizationDetailsComponent } from './authorization-details/authorization-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    VendorLoginDashboardComponent,
    VendorDetailsComponent,
    AuthorizationLoginDashboardComponent,
    AuthorizationDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
