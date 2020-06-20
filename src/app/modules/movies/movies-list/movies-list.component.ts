import { Component, OnInit } from "@angular/core";
import { Movie } from "src/app/shared/models/movie";
import { MovieService } from "src/app/core/services/movie.service";

@Component({
  selector: "app-movies-list",
  templateUrl: "./movies-list.component.html",
  styleUrls: ["./movies-list.component.scss"],
})
export class MoviesListComponent implements OnInit {
  movies: Movie[];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((data) => {
      this.movies = data;
    });
  }
}
