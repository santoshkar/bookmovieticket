import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { SharedService } from "../shared.service";
import { LogInService } from "../log-in.service";

@Component({
  selector: "app-log-in",
  templateUrl: "./log-in.component.html",
  styleUrls: ["./log-in.component.scss", "../app.component.scss"],
})
export class LogInComponent {
  username: String;
  password: String;
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
        this.router.navigate(['customer-home']);
      },
      (error) => {
        this.isUserFound = false;
        console.log("error : ", error);
      }
    );
  }
}
