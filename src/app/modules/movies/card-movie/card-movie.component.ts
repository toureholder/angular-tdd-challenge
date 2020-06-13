import { Component, OnInit, Input } from "@angular/core";
import { Movie } from "src/app/shared/models/movie";
import { movieDb } from "src/app/moviedb-config";
import { GenerateUrlService } from "src/app/core/services/generate-url.service";

@Component({
  selector: "app-card-movie",
  templateUrl: "./card-movie.component.html",
  styleUrls: ["./card-movie.component.scss"],
})
export class CardMovieComponent implements OnInit {
  constructor(private urlService: GenerateUrlService) {}

  @Input() movie: Movie;

  urlImage: string;

  ngOnInit(): void {
    this.urlImage = this.urlService.getImageUrl(this.movie);
  }
}
