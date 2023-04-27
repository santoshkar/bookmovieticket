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

  constructor(
    private router: Router,
    private sharedService: SharedService,
    private movieService: MovieService,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.initPage();
    // this.initMovieList();
  }

  initPage(): void {
    this.selectedMovie = this.sharedService.get("selected-movie");
  }

}
