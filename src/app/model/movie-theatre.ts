import { Movie } from "../model/movie";
import { Theatre } from "../model/theatre";
export interface MovieAndTheatre {
  movieTheatreId: string;
  screeningFrom: string;
  screeningTill: string;
  movie: Movie;
  theatre: Theatre;
}