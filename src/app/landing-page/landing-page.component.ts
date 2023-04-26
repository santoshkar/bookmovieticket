import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  constructor(private router: Router,
    private sharedService: SharedService) { }
  
    ngOnInit(): void {
    // this.sharedService.set("projectId", this.projectId);
  }

  loginpage(){
    this.router.navigate(['login']);
  }
}
