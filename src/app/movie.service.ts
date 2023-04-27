import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { /* TODO document why this constructor is empty */  }

  findMoviesByCity( cityId: string): Observable<any> {
    let url = 'http://localhost:8080/api/movie';
    let queryParams:HttpParams = new HttpParams();
    queryParams = queryParams.append("cityId", cityId);
    return this.http.get(url, { params: queryParams });
  }
}
