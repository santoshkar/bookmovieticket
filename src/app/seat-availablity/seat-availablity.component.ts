import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { SharedService } from "../shared.service";
import { CustomerService } from "../customer.service";
import { City } from "../model/city";
import { MovieService } from "../movie.service";
import { TicketPrice } from "../model/ticket-price";
import { MovieScreening } from "../model/movie-screening";
import { SelectedScreenDetails } from "../model/selected-screen-details";

@Component({
  selector: 'app-seat-availablity',
  templateUrl: './seat-availablity.component.html',
  styleUrls: ['./seat-availablity.component.scss', "../app.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class SeatAvailablityComponent {
  cityList: City[];
  selectedCity: any;
  labelMap = new Map();
  ticketPriceObject: TicketPrice;
  ticketPrice: number;
  selectedScreenDetails: SelectedScreenDetails;
  totalPaybleAmount: number = 0;
  
  theaterSeats = new Array();

  constructor(
    private router: Router,
    private movieService: MovieService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {

    this.selectedScreenDetails = this.sharedService.get("selected-screen-details");

    this.initLabels();
    this.showSeats();
    this.pullTicketPrice();
  }

  updatePrice(ticketType: string){

    switch(ticketType){
      case 'GOLD':
        this.ticketPrice = this.ticketPriceObject.gold;
        break;
      case 'SILVER':
        this.ticketPrice = this.ticketPriceObject.silver;
        break;
      case 'BRONZE':
        this.ticketPrice = this.ticketPriceObject.bronze;
        break;
    }
  }

  initLabels(){
    this.labelMap.set(0, 'A');
    this.labelMap.set(1, 'B');
    this.labelMap.set(2, 'C');
    this.labelMap.set(3, 'D');
    this.labelMap.set(4, 'E');
  }

  showSeats(){
    let seatRow: SeatRow;
    for(let row = 0; row < 5; row++)  { 
      let columns: SeatColumn[] = new Array();;
      for(let col = 0; col < 10; col++)  {
        columns.push({
            index: col,
            isBooked: false
          });
      }
      seatRow = {
        index: this.labelMap.get(row),
        columns: columns
      }
      this.theaterSeats.push(seatRow);
    }
  }

  selectUnselect(row: any, column: any){
    console.log("row", row);
    console.log("column", column);
  }

  pullTicketPrice(): void {
    // let selectedScreen: SelectedScreenDetails = this.sharedService.get("selected-screen-id");
    this.movieService.pullTicketPrice(this.selectedScreenDetails.screen.screenId).subscribe(
      (res) => {
        this.ticketPriceObject = res;
      },
      (error) => {
        console.log("error : ", error);
      }
    );
  }
}


interface SeatRow {
  index: number;
  columns: SeatColumn[];
}

interface SeatColumn {
  index: number;
  isBooked: boolean;
}


