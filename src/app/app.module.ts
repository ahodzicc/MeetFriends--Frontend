import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { MeetUpConfirmationComponent } from './meet-up-confirmation/meet-up-confirmation.component';
import { FooterComponent } from './footer/footer.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatTabsModule} from '@angular/material/tabs';
import { MeetUpConfirmationServices } from './services/meet-up-confirmation.services';
import { HomepageComponent } from './features/homepage/homepage.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MeetUpConfirmationComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    HomepageComponent,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    MeetUpConfirmationServices,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
