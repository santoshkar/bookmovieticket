import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  constructor(private http: HttpClient) { /* TODO document why this constructor is empty */  }

  customerlogin( e: any): Observable<any> {
    let url = 'http://localhost:4200/api/userservice/customer-login';
    return this.http.post(url, e);
  }
}