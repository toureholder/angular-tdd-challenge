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
  constructor(private http: HttpClient) {}

  getUpcomingMovies(): Observable<Movie[]> {
    return this.http
      .get<any>(
        `${movieDb.url}upcoming?api_key=${movieDb.api_key}&language=pt-BR&page=1`
      )
      .pipe(map(this.jsonDataToMovies));
  }

  private jsonDataToMovies(jsonData: any): Movie[] {
    return jsonData && jsonData.results ? jsonData.results : [];
  }
}
