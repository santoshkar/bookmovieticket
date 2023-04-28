import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { SharedService } from "../shared.service";
import { CustomerService } from "../customer.service";
import { MovieService } from "../movie.service";
import { Movie } from "../model/movie";
import { City } from "../model/city";
import { Theatre } from "../model/theatre";
import { ScreenData, SelectedScreenDetails } from "../model/selected-screen-details";

@Component({
  selector: 'app-movie-screening',
  templateUrl: './movie-screening.component.html',
  styleUrls: ['./movie-screening.component.scss', '../app.component.scss']
})
export class MovieScreeningComponent {

  selectedMovie: Movie;
  selectedCity: City;
  selectedTheatre: Theatre;
  screeningDetails: any = {
    sreenList: {}
  }

  constructor(
    private router: Router,
    private sharedService: SharedService,
    private movieService: MovieService,
  ) {}

  ngOnInit(): void {
    this.initMovieScreeningData();
  }

  initMovieScreeningData(): void {
    this.selectedMovie = this.sharedService.get("selected-movie");
    this.selectedCity = this.sharedService.get("customer-city");
    this.selectedTheatre = this.sharedService.get("selected-theatre");

    this.movieService.findMoviesScreening(this.selectedMovie.movieId, this.selectedCity.cityId).subscribe(
      (res) => {
        this.screeningDetails = res;
      },
      (error) => {
        console.log("error : ", error);
      }
    );
  }

  showAvailability(theatre: string, city: string, screen: ScreenData){
    let screendetails: SelectedScreenDetails = {
      theatre: theatre,
      city: city, 
      screen: screen,
      movie: this.selectedMovie
    }
    this.sharedService.set("selected-screen-details", screendetails);
    this.router.navigate(['seat-availability']);
  }
}
