import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie';
import { movieDb } from 'src/app/moviedb-config';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss']
})
export class CardMovieComponent implements OnInit {

  @Input() movie!: Movie;

  urlImage: string;

  constructor() { }

  ngOnInit(): void {
    this.urlImage = movieDb.url_image;
  }

}
