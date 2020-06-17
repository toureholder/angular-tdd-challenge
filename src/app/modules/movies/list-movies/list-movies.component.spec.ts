import { ListMoviesComponent } from "./list-movies.component";
import { MovieService } from "src/app/core/services/movie.service";
import { Movie } from "src/app/shared/models/movie";
import { of } from "rxjs";
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { BrowserModule } from "@angular/platform-browser";
import { CardMovieComponent } from "../card-movie/card-movie.component";

describe("ListMoviesComponent tests", () => {
  let component: ListMoviesComponent;
  let serviceSpyObj: jasmine.SpyObj<MovieService>;
  let fixture: ComponentFixture<ListMoviesComponent>;

  beforeEach(() => {
    serviceSpyObj = jasmine.createSpyObj("MovieService", ["getUpcomingMovies"]);
    serviceSpyObj.getUpcomingMovies.and.returnValue(of(Movie.FAKE_LIST));

    TestBed.configureTestingModule({
      declarations: [ListMoviesComponent, CardMovieComponent],
      providers: [{ provide: MovieService, useValue: serviceSpyObj }],
    });

    fixture = TestBed.createComponent(ListMoviesComponent);
    component = fixture.componentInstance;
  });

  it("should get upcoming movies", () => {
    expect(component.loading).toBe(true);
    fixture.detectChanges();
    expect(component.loading).toBe(false);
    expect(component.movies).toEqual(Movie.FAKE_LIST);
  });
});
