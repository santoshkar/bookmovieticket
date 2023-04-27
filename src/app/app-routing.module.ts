import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieScreeningComponent } from './movie-screening/movie-screening.component';
import { SeatAvailablityComponent } from './seat-availablity/seat-availablity.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'landingpage' },
  { path: 'landingpage', component: LandingPageComponent },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'movie-list', component: MovieListComponent },
  { path: 'movie-screening', component: MovieScreeningComponent },
  { path: 'seat-availability', component: SeatAvailablityComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
