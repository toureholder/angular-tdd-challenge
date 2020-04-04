import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { movieDb } from "src/app/moviedb-config";
import { Movie } from "src/app/shared/models/movie";

@Injectable({
  providedIn: "root",
})
export class MovieService {
  public static UPCOMING_MOVIES_URL: string = `${movieDb.url}upcoming?api_key=${movieDb.api_key}&language=pt-BR&page=1`;

  constructor(private http: HttpClient) {}

  getUpcomingMovies(): Observable<Movie[]> {
    return this.http
      .get(MovieService.UPCOMING_MOVIES_URL)
      .pipe(map(this.jsonDataToMovies));
  }

  private jsonDataToMovies(jsonData): Movie[] {
    const results: any[] = jsonData && jsonData.results ? jsonData.results : [];
    const movies = results.map<Movie>((result) => {
      return {
        id: result.id.toString(),
        poster_path: result.poster_path,
        title: result.title,
      };
    });
    return movies;
  }
}
