import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LandingPageComponent {

  constructor(private router: Router,
    private sharedService: SharedService) { }
  
    ngOnInit(): void {
  }

  loginpage(){
    this.router.navigate(['login']);
  }
}
