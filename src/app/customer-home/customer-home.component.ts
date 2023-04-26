import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { SharedService } from "../shared.service";
import { CustomerService } from "../customer.service";

@Component({
  selector: "app-customer-home",
  templateUrl: "./customer-home.component.html",
  styleUrls: ["./customer-home.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class CustomerHomeComponent implements OnInit {
  cityList: City[];
  selectedCity: any;

  
  theaterSeats = new Array();

  constructor(
    private router: Router,
    private customerService: CustomerService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.initCityDropdown();
    this.showSeats();
  }

  initCityDropdown(){
    this.customerService.findAllCities().subscribe(
      (res) => {
        this.cityList = res;
        if (!this.sharedService.get("city")) {
          this.selectedCity = res[0].id;
        }else{
          this.selectedCity = this.sharedService.get("city");
        }
      },
      (error) => {
        console.log("error : ", error);
      }
    );
  }

  selectCity(e: any) {
    this.sharedService.set("city", e.target.value);
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
        index: row,
        columns: columns
      }
      this.theaterSeats.push(seatRow);
    }
    console.log(this.theaterSeats);
    console.log(JSON.stringify(this.theaterSeats));
  }

  selectUnselect(event: any){
    console.log("event", event);
  }
}


interface City {
  id: string;
  city: string;
}

interface SeatRow {
  index: number;
  columns: SeatColumn[];
}

interface SeatColumn {
  index: number;
  isBooked: boolean;
}


