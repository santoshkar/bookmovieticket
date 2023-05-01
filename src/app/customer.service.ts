import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { /* TODO document why this constructor is empty */  }

  findAllCities(): Observable<any> {
    let url = 'http://localhost:8080/api/userservice/cities';
    // let url = 'http://localhost:3000/cities';
    return this.http.get(url);
    
  }
}
