import { Component, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { SharedService } from "../shared.service";
import { LogInService } from "../log-in.service";

@Component({
  selector: "app-log-in",
  templateUrl: "./log-in.component.html",
  styleUrls: ["./log-in.component.scss", "../app.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class LogInComponent {
  username: String = 'santosh';
  password: String = 'santosh';
  isUserFound: boolean = true;

  constructor(
    private router: Router,
    private loginService: LogInService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    // this.sharedService.set("projectId", this.projectId);
  }

  login(): void {
    let body = {
      username: this.username,
      password: this.password
    };
    this.loginService.customerlogin(body).subscribe(
      (res) => {
        this.isUserFound = true;
        console.log("res", res);
        this.sharedService.set("customer-city", res.city);
        this.router.navigate(['movie-list']);
      },
      (error) => {
        this.isUserFound = false;
        console.log("error : ", error);
      }
    );
  }
}
