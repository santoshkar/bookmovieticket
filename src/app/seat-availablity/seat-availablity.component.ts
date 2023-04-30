import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { SharedService } from "../shared.service";
import { CustomerService } from "../customer.service";
import { City } from "../model/city";
import { MovieService } from "../movie.service";
import { TicketPrice } from "../model/ticket-price";
import { MovieScreening } from "../model/movie-screening";
import { SelectedShow } from "../model/selected-show";
import { SeatColumn } from "../model/seat-column";
import { BookingMaster } from "../model/booking-master";

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
  ticketPrice: number;
  selectedShow: SelectedShow;
  totalPaybleAmount: number = 0;
  
  theaterSeats: SeatRow[] = [];
  selectedSeatIdsForBooking = new Map();

  constructor(
    private router: Router,
    private movieService: MovieService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {

    this.selectedShow = this.sharedService.get("selected-show");

    this.initLabels();
    this.showSeats();
    this.pullTicketPrice();
  }

  updatePrice(ticketType: string){

    // this.ticketPrice = this.ticketPriceObject.price;
    // switch(ticketType){
    //   case 'GOLD':
    //     this.ticketPrice = this.ticketPriceObject.gold;
    //     break;
    //   case 'SILVER':
    //     this.ticketPrice = this.ticketPriceObject.silver;
    //     break;
    //   case 'BRONZE':
    //     this.ticketPrice = this.ticketPriceObject.bronze;
    //     break;
    // }
  }

  initLabels(){
    this.labelMap.set(0, 'A');
    this.labelMap.set(1, 'B');
    this.labelMap.set(2, 'C');
    this.labelMap.set(3, 'D');
    this.labelMap.set(4, 'E');
  }

  showSeats(){
    this.movieService.pullAllSeatsForScreen(this.selectedShow.selectedTime.screenId,
      this.selectedShow.selectedTime.showId).subscribe(
      (res) => {
        this.theaterSeats = res.rows;
      },
      (error) => {
        console.log("error : ", error);
      }
    );
  }

  selectUnselect(row: string, column: SeatColumn){
    if(column.seatAvailability !== 'AVAILABLE'){
      return;
    }

    if(column.currentlySelected){
      this.selectedSeatIdsForBooking.set(column.seatId, column);
    } else {
      this.selectedSeatIdsForBooking.delete(column.seatId);
    }
  }

  bookTicket(): void {
      let customerId = "3c69ceed-6a04-415c-8d6b-d1565d9c6d3b";  //TODO: Hardcoded
      let bookingMaster:BookingMaster = {
        customerId: customerId,
        showId: this.selectedShow.selectedTime.showId,
        selectedSeats: Array.from( this.selectedSeatIdsForBooking.keys()),
        bookingStatus: "HOLD",
        paymentMode: "",
        amount: 0
      };
      console.log("bookingMaster", bookingMaster);
      this.movieService.bookTicket(bookingMaster).subscribe(
        (res) => {
          console.log("Booking Done Successfully")
        },
        (error) => {
          console.log("error : ", error);
        }
      );
  }

  pullTicketPrice(): void {
    this.movieService.pullTicketPrice(this.selectedShow.selectedTime.screenId).subscribe(
      (res) => {
        this.ticketPrice  = res.price;
      },
      (error) => {
        console.log("error : ", error);
      }
    );
  }
}

interface SeatRow {
  label: string;
  columns: SeatColumn[];
}




