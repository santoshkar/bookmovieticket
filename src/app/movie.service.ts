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
    let url = 'http://localhost:4200/api/movieservice/movies';
    let queryParams:HttpParams = new HttpParams();
    queryParams = queryParams.append("cityId", cityId);
    return this.http.get(url, { params: queryParams });
  }

  findMoviesShows( movieTitle: string, cityId: string, date: string): Observable<any> {
    let url = 'http://localhost:4200/api/movieservice/show';
    let queryParams:HttpParams = new HttpParams();
    queryParams = queryParams.append("date", date);
    queryParams = queryParams.append("movieTitle", movieTitle);
    // queryParams = queryParams.append("cityId", cityId);
    return this.http.get(url, { params: queryParams });
  }

  pullTicketPrice(clientName: string, screenId: string): Observable<any> {
    let url = 'http://localhost:4200/api/movieservice/ticket-price';
    let queryParams:HttpParams = new HttpParams();
    queryParams = queryParams.append("screenId", screenId);
    queryParams = queryParams.append("clientName", clientName);
    return this.http.get(url, { params: queryParams });
  }

  pullAllSeatsForScreen(screenId: string, showId: string, clientName: string): Observable<any> {
    let url = 'http://localhost:4200/api/movieservice/seat';
    let queryParams:HttpParams = new HttpParams();
    queryParams = queryParams.append("screenId", screenId);
    queryParams = queryParams.append("clientName", clientName);
    queryParams = queryParams.append("showId", showId);
    return this.http.get(url, { params: queryParams });
  }

  bookTicket(bookingMaster: BookingMaster, clientName: string): Observable<any> {
    let url = 'http://localhost:4200/api/movieservice/book';
    let queryParams:HttpParams = new HttpParams();
    queryParams = queryParams.append("clientName", clientName);
    return this.http.post(url, bookingMaster, { params: queryParams });
  }

  calculatePrice(bookingMaster: BookingMaster, clientName: string): Observable<any> {
    let url = 'http://localhost:4200/api/movieservice/price-calculator';
    let queryParams:HttpParams = new HttpParams();
    queryParams = queryParams.append("clientName", clientName);
    return this.http.post(url, bookingMaster, { params: queryParams });
  }
}
