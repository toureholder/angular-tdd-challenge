import { Injectable } from "@angular/core";

import { movieDb } from "src/app/moviedb-config";
import { Movie } from "src/app/shared/models/movie";

@Injectable({
  providedIn: "root",
})
export class GenerateUrlService {
  getImageUrl(movie: Movie): string {
    return movieDb.url_image + movie.poster_path;
  }
}
