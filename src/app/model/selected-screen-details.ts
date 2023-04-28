import { Movie } from "./movie";

export interface SelectedScreenDetails {
  theatre: string;
  city: string;
  screen: ScreenData;
  movie: Movie;
}

export interface ScreenData {
  screenId: string;
  time: string;
}