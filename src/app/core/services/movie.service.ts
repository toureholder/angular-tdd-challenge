import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/shared/models/movie';
import { movieDb } from 'src/app/moviedb-config';
import { map, catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  getUpcomingMovies(): Observable<any> {
    return this.http.get<any>(`${movieDb.url}upcoming?api_key=${movieDb.api_key}&language=pt-BR&page=1`)
      .pipe(
        retry(1),
        catchError(this.handleError), map(this.jsonDataToMovies));
  }

  getMovie(id: string): Observable<Movie> {
    return this.http.get<Movie>(`${movieDb.url}${id}?api_key=${movieDb.api_key}&language=pt-BR`)
      .pipe(
        retry(1),
        catchError(this.handleError));
  }

  jsonDataToMovies(jsonData: any): Movie[] {
    const movies: Movie[] = [];
    if (jsonData && jsonData.results) {
      jsonData.results.forEach((movie: Movie) => {
        movies.push(movie);
      });
    }
    return movies;
  }

}
