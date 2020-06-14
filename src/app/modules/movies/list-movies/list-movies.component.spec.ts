import { ListMoviesComponent } from "./list-movies.component";
import { MovieService } from "src/app/core/services/movie.service";
import { of } from "rxjs";
import { Movie } from "src/app/shared/models/movie";
import { TestBed } from "@angular/core/testing";
import { CardMovieComponent } from "../card-movie/card-movie.component";

fdescribe("should get upcoming movies", () => {
  let component: ListMoviesComponent;
  let moviesServiceSpy: jasmine.SpyObj<MovieService>;

  beforeEach(() => {
    //Arrange / Given
    moviesServiceSpy = jasmine.createSpyObj("MovieService", [
      "getUpcomingMovies",
    ]);

    moviesServiceSpy.getUpcomingMovies.and.returnValue(of(Movie.FAKE_LIST));
  });

  it("should get upcoming movies from service", () => {
    // Arrange
    component = new ListMoviesComponent(moviesServiceSpy);

    //Act / When
    component.ngOnInit();

    //Assert / Then
    expect(moviesServiceSpy.getUpcomingMovies).toHaveBeenCalledTimes(1);

    moviesServiceSpy.getUpcomingMovies().subscribe((data) => {
      expect(component.movies).toEqual(Movie.FAKE_LIST);
    });
  });

  it("should render movies when service returns movies", () => {
    moviesServiceSpy.getUpcomingMovies.and.returnValue(
      of([Movie.FAKE, Movie.FAKE])
    );

    //Arrange / Given
    TestBed.configureTestingModule({
      declarations: [ListMoviesComponent, CardMovieComponent],
      providers: [{ provide: MovieService, useValue: moviesServiceSpy }],
    });

    const fixture = TestBed.createComponent(ListMoviesComponent);
    const component = fixture.componentInstance;

    //Act / When
    component.ngOnInit();

    //Assert / Then
    const rootElement: HTMLElement = fixture.nativeElement;
    moviesServiceSpy.getUpcomingMovies().subscribe((data) => {
      fixture.detectChanges();
      expect(rootElement.getElementsByTagName("app-card-movie").length).toEqual(
        2
      );
    });
  });
});
