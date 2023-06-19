import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: "signUp", component: SignUpComponent },
  {
    path: "LoginComp", component: AppComponent
  },
  {
    path: "dashboard", component: DashboardComponent
  },
  {
    path: '', redirectTo: 'signUp', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
