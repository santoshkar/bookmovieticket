import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { SharedService } from "../shared.service";
import { CustomerService } from "../customer.service";
import { MovieService } from "../movie.service";

@Component({
  selector: 'app-movie-screening',
  templateUrl: './movie-screening.component.html',
  styleUrls: ['./movie-screening.component.scss', '../app.component.scss'],
})
export class MovieScreeningComponent {

  selectedMovie: any;
  selectedCity: any;
  screeningDetails: any = {
    reenList: {}
  }

  constructor(
    private router: Router,
    private sharedService: SharedService,
    private movieService: MovieService,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.initMovieScreeningData();
  }

  initMovieScreeningData(): void {
    this.selectedMovie = this.sharedService.get("selected-movie");
    this.selectedCity = this.sharedService.get("customer-city");
    console.log("movie", this.selectedMovie);
    console.log("city", this.selectedCity);

    this.movieService.findMoviesScreening(this.selectedMovie.movieId, this.selectedCity.cityId).subscribe(
      (res) => {
        this.screeningDetails = res;
      },
      (error) => {
        console.log("error : ", error);
      }
    );
  }

  showAvailability(screen: any){
    console.log("selected screen", screen);
  }
}
