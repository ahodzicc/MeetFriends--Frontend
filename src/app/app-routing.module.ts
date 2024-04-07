import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MeetUpConfirmationComponent} from "./meet-up-confirmation/meet-up-confirmation.component";
import { HomepageComponent } from './features/homepage/homepage.component';

const routes: Routes = [
  {
    path: "home",
    component: HomepageComponent,
  },
  {
    path: 'meetup',
    component: MeetUpConfirmationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
