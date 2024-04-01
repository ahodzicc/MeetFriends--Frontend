import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {MeetUpConfirmationComponent} from "./meet-up-confirmation/meet-up-confirmation.component";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";

const routes: Routes = [
  {
    path: "",
    component: HomepageComponent
  },
  {
  path: "M",
  component: MeetUpConfirmationComponent
  },
  {
    path: "L",
    component: LoginComponent
  },
  {
    path: "S",
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
