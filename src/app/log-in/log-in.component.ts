import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { LogInService } from '../log-in.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss', '../app.component.scss']
})
export class LogInComponent {

  constructor(private router: Router, private loginService: LogInService,
    private sharedService: SharedService) { }

  ngOnInit(): void {
    // this.sharedService.set("projectId", this.projectId);
  }

  login(): void{
    let e = {};
    this.loginService.login( e ).subscribe((res)=>{
    },error => {
      console.log("error : ", error);
    });
  }
}
