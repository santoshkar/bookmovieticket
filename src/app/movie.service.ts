import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketPrice } from './model/ticket-price';
import { BookingMaster } from './model/booking-master';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { /* TODO document why this constructor is empty */  }

  findMoviesByCity( cityId: string): Observable<any> {
    let url = 'http://localhost:8080/api/movieservice/movies';
    let queryParams:HttpParams = new HttpParams();
    queryParams = queryParams.append("cityId", cityId);
    return this.http.get(url, { params: queryParams });
  }

  findMoviesShows( movieId: string, cityId: string, date: string): Observable<any> {
    let url = 'http://localhost:8080/api/show';
    let queryParams:HttpParams = new HttpParams();
    queryParams = queryParams.append("date", date);
    queryParams = queryParams.append("movieId", movieId);
    queryParams = queryParams.append("cityId", cityId);
    return this.http.get(url, { params: queryParams });
  }

  pullTicketPrice(screenId: string): Observable<any> {
    let url = 'http://localhost:8080/api/ticket-price';
    let queryParams:HttpParams = new HttpParams();
    queryParams = queryParams.append("screenId", screenId);
    return this.http.get(url, { params: queryParams });
  }

  pullAllSeatsForScreen(screenId: string, showId: string): Observable<any> {
    let url = 'http://localhost:8080/api/seat';
    let queryParams:HttpParams = new HttpParams();
    queryParams = queryParams.append("screenId", screenId);
    queryParams = queryParams.append("showId", showId);
    return this.http.get(url, { params: queryParams });
  }

  bookTicket(bookingMaster: BookingMaster): Observable<any> {
    let url = 'http://localhost:8080/api/book';
    let queryParams:HttpParams = new HttpParams();
    return this.http.post(url, bookingMaster);
  }

  calculatePrice(bookingMaster: BookingMaster): Observable<any> {
    let url = 'http://localhost:8080/api/price-calculator';
    let queryParams:HttpParams = new HttpParams();
    return this.http.post(url, bookingMaster);
  }
}
