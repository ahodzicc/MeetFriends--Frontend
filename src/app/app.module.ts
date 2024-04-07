import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MeetUpConfirmationComponent } from './meet-up-confirmation/meet-up-confirmation.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatTabsModule} from '@angular/material/tabs';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {LoginService} from "./services/login.service";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    MeetUpConfirmationComponent,
    FooterComponent,
    SignupComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    LoginComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    LoginService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
