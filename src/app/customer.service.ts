import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { /* TODO document why this constructor is empty */  }

  findAllCities(): Observable<any> {
    let queryParams:HttpParams = new HttpParams();
    // queryParams = queryParams.append("projectId", projectId);
    // return this.http.get(url, { params: queryParams });
    let url = 'http://localhost:8080/api/city';
    return this.http.get(url);
    
  }
}
