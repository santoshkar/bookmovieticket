import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketPrice } from './model/ticket-price';

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

  findMoviesScreening( movieId: string, cityId: string): Observable<any> {
    let url = 'http://localhost:8080/api/screening';
    let queryParams:HttpParams = new HttpParams();
    queryParams = queryParams.append("movieId", movieId);
    queryParams = queryParams.append("cityId", cityId);
    return this.http.get(url, { params: queryParams });
  }

  pullTicketPrice(screenId: string): Observable<any> {
    let url = 'http://localhost:8080/api/ticket-price';
    let queryParams:HttpParams = new HttpParams();
    queryParams = queryParams.append("movieScreenId", screenId);
    return this.http.get(url, { params: queryParams });
  }
}
