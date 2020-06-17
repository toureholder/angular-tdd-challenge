import { Component, OnInit } from "@angular/core";
import { Movie } from "src/app/shared/models/movie";
import { MovieService } from "src/app/core/services/movie.service";

@Component({
  selector: "app-list-movies",
  templateUrl: "./list-movies.component.html",
  styleUrls: ["./list-movies.component.scss"],
})
export class ListMoviesComponent implements OnInit {
  movies: Movie[];
  loading: boolean = true;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getUpcomingMovies().subscribe((data) => {
      this.movies = data;
      this.loading = false;
    });
  }
}
