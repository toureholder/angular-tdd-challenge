import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
} from "@angular/core/testing";
import { of } from "rxjs";
import { MovieService } from "src/app/core/services/movie.service";
import { Movie } from "src/app/shared/models/movie";
import { CardMovieComponent } from "../card-movie/card-movie.component";
import { ListMoviesComponent } from "./list-movies.component";

describe("ListMoviesComponent", () => {
  let component: ListMoviesComponent;
  let fixture: ComponentFixture<ListMoviesComponent>;

  beforeEach(async(() => {
    const mockMovieService: jasmine.SpyObj<MovieService> = jasmine.createSpyObj(
      "MovieService",
      ["getUpcomingMovies"]
    );

    mockMovieService.getUpcomingMovies.and.returnValue(of(Movie.FAKE_LIST));

    TestBed.configureTestingModule({
      declarations: [ListMoviesComponent, CardMovieComponent],
      providers: [{ provide: MovieService, useValue: mockMovieService }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should load movies", fakeAsync(() => {
    expect(component.movies).toEqual(Movie.FAKE_LIST);
  }));
});
