import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MoviesListComponent } from "./movies-list.component";
import { MovieService } from "src/app/core/services/movie.service";
import { Movie } from "src/app/shared/models/movie";
import { of } from "rxjs";
import { MovieCardComponent } from "../movie-card/movie-card.component";

describe("MoviesListComponent", () => {
  let component: MoviesListComponent;
  let fixture: ComponentFixture<MoviesListComponent>;
  let mockMovieService: jasmine.SpyObj<MovieService>;
  let fakeMovie: Movie;

  beforeEach(async(() => {
    mockMovieService = jasmine.createSpyObj<MovieService>("MovieService", [
      "getMovies",
    ]);

    fakeMovie = {
      id: 123,
      title: "Fake Movie",
      poster_path: "/zQFjMmE3K9AX5QrBL1SXIxYQ9jz.jpg",
    };

    TestBed.configureTestingModule({
      declarations: [MoviesListComponent, MovieCardComponent],
      providers: [{ provide: MovieService, useValue: mockMovieService }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesListComponent);
    component = fixture.componentInstance;
    mockMovieService.getMovies.and.returnValue(of([fakeMovie]));
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should get movies from service", () => {
    //Act / When
    fixture.detectChanges();

    //Assert / Then
    expect(component.movies).toEqual([fakeMovie]);
  });

  it("should render a card for each component", () => {
    //Act / When
    fixture.detectChanges();

    //Assert / Then
    const template: HTMLElement = fixture.nativeElement;
    const cards = template.querySelectorAll('[data-test="card"]');
    expect(cards.length).toBe(component.movies.length);
  });
});
