import { SelectedTime } from "./selected-time";

export interface SelectedShow {
  theatreId: string,
  theatreName: string;
  cityId: string;
  cityName: string;  
  countryName: string;
  movieId: string;
  title: string;
  movieLanguage: string;
  selectedTime: SelectedTime;
}
