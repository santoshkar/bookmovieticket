import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { SharedService } from "../shared.service";
import { CustomerService } from "../customer.service";
import { MovieService } from "../movie.service";
import { City } from "../model/city-type";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss', "../app.component.scss"],
  encapsulation: ViewEncapsulation.None, 
})
export class MovieListComponent {

  cityList: City[];
  movieList: any[];
  selectedCity: any;

  constructor(
    
    private router: Router,
    private sharedService: SharedService,
    private movieService: MovieService,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.initCityDropdown();
    this.initMovieList();
  }

  
  initMovieList(){

    let cityId = this.sharedService.get("customer-city").id;

    this.movieService.findMoviesByCity(cityId).subscribe(
      (res) => {
        this.movieList = res;
        console.log(this.movieList);
      },
      (error) => {
        console.log("error : ", error);
      }
    );
  }

  initCityDropdown(){
    this.customerService.findAllCities().subscribe(
      (res) => {
        this.cityList = res;
        if (!this.sharedService.get("customer-city")) {
          this.selectedCity = res[0].id;
        }else{
          this.selectedCity = this.sharedService.get("customer-city").id;
        }
      },
      (error) => {
        console.log("error : ", error);
      }
    );
  }

  selectCity(e: any) {
    let city: City = {
      id: e.target.value,
      city: ''
    }
    this.sharedService.set("customer-city", city);
    this.redirectTo('movie-list');
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
 }

 bookticket(movie: any){
  this.sharedService.set("selected-movie", movie);
  this.router.navigate(['movie-screening']);
 }
}

