import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'landingpage' },
  { path: 'landingpage', component: LandingPageComponent },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'customer-home', component: CustomerHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
