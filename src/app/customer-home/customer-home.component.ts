import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { SharedService } from "../shared.service";
import { CustomerService } from "../customer.service";
import { City } from "../model/city-type";

@Component({
  selector: "app-customer-home",
  templateUrl: "./customer-home.component.html",
  styleUrls: ["./customer-home.component.scss", "../app.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class CustomerHomeComponent implements OnInit {
  cityList: City[];
  selectedCity: any;
  labelMap = new Map();

  
  theaterSeats = new Array();

  constructor(
    private router: Router,
    private customerService: CustomerService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.initCityDropdown();
    this.initLabels();
    this.showSeats();
  }

  initLabels(){
    this.labelMap.set(0, 'A');
    this.labelMap.set(1, 'B');
    this.labelMap.set(2, 'C');
    this.labelMap.set(3, 'D');
    this.labelMap.set(4, 'E');
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
}


interface SeatRow {
  index: number;
  columns: SeatColumn[];
}

interface SeatColumn {
  index: number;
  isBooked: boolean;
}


