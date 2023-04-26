import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  constructor(private http: HttpClient) { /* TODO document why this constructor is empty */  }

  login( e: any): Observable<any> {
    let url = 'http://localhost:8080/api/login';
    return this.http.post(url, e);
  }

  getDatasourceDetails(projectId: string): Observable<any> {
    let queryParams:HttpParams = new HttpParams();
    queryParams = queryParams.append("projectId", projectId);
    let url = 'http://localhost:8080/api/get-datasource-details/';
    return this.http.get(url, { params: queryParams });
  }
}