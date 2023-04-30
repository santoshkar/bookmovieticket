import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { SharedService } from "../shared.service";
import { CustomerService } from "../customer.service";
import { MovieService } from "../movie.service";
import { Movie } from "../model/movie";
import { City } from "../model/city";
import { Theatre } from "../model/theatre";
import {DatePipe} from '@angular/common';
import { SelectedShow } from "../model/selected-show";
import { SelectedTime } from "../model/selected-time";

@Component({
  selector: 'app-movie-screening',
  templateUrl: './movie-screening.component.html',
  styleUrls: ['./movie-screening.component.scss', '../app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MovieScreeningComponent {

  selectedMovie: Movie;
  selectedCity: City;
  selectedTheatre: Theatre;
  movieDate: Date;
  message: string;
  showMessage: boolean = false;;
  showDetails: any = {
    shows: {}
  }

  constructor(
    private router: Router,
    private sharedService: SharedService,
    private movieService: MovieService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.initMovieScreeningData();
  }

  initMovieScreeningData(): void {
    this.selectedMovie = this.sharedService.get("selected-movie");
    this.selectedCity = this.sharedService.get("customer-city");
    this.selectedTheatre = this.sharedService.get("selected-theatre");
  }

  showTimes(){
    let m_date: any = this.datePipe.transform(this.movieDate,"dd-MM-yyyy");
    this.movieService.findMoviesShows(this.selectedMovie.movieId, this.selectedCity.cityId, m_date).subscribe(
      (res) => {
        this.showDetails = res;
        if(res && res.shows && res.shows.length>0){
          this.message = '';
          this.showMessage = false;
        }else{
          this.showMessage = true;
          this.message = "Movie '"+this.selectedMovie.title+"' is not playing on this date";
        }
      },
      (error) => {
        console.log("error : ", error);
      }
    );
  }

  showAvailability(show: SelectedShow, showTime: SelectedTime){

    show.selectedTime = showTime;
    this.sharedService.set("selected-show", show);
    this.router.navigate(['seat-availability']);
  }
}
