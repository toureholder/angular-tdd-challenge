import { CardMovieComponent } from "./card-movie.component";
import { GenerateUrlService } from "src/app/core/services/generate-url.service";
import { Movie } from "src/app/shared/models/movie";
import { movieDb } from "src/app/moviedb-config";
import { TestBed, ComponentFixture } from "@angular/core/testing";

describe("CardMovieComponent Tests :: should get image url", () => {
  it("should get image url from REAL service", () => {
    //Arrange / Given
    const service = new GenerateUrlService();
    const component = new CardMovieComponent(service);
    const fakeMovie = Movie.FAKE;

    //Act / When
    component.movie = fakeMovie;
    component.ngOnInit();

    //Assert / Then
    expect(component.urlImage).toBe(movieDb.url_image + fakeMovie.poster_path);
  });

  it("should get image url from MOCK service", () => {
    //Arrange / Given
    const fakeMovie = Movie.FAKE;
    const service: GenerateUrlService = {
      getImageUrl: () => movieDb.url_image + fakeMovie.poster_path,
    };
    const component = new CardMovieComponent(service);

    //Act / When
    component.movie = fakeMovie;
    component.ngOnInit();

    //Assert / Then
    expect(component.urlImage).toBe(movieDb.url_image + fakeMovie.poster_path);
  });

  it("should get image url from SPY OBJECT service", () => {
    //Arrange / Given
    const fakeMovie = Movie.FAKE;
    const service: jasmine.SpyObj<GenerateUrlService> = jasmine.createSpyObj(
      "GenerateUrlService",
      ["getImageUrl"]
    );

    service.getImageUrl.and.returnValue(
      movieDb.url_image + fakeMovie.poster_path
    );
    const component = new CardMovieComponent(service);

    //Act / When
    component.movie = fakeMovie;
    component.ngOnInit();

    //Assert / Then
    expect(service.getImageUrl).toHaveBeenCalledTimes(1);
    expect(component.urlImage).toBe(movieDb.url_image + fakeMovie.poster_path);
  });
});

describe("CardMovieComponent Tests :: TestBed :: should get image url", () => {
  let fakeMovie: Movie;
  let serviceSpyObj: jasmine.SpyObj<GenerateUrlService>;
  let component: CardMovieComponent;

  beforeEach(() => {
    fakeMovie = Movie.FAKE;

    serviceSpyObj = jasmine.createSpyObj("GenerateUrlService", ["getImageUrl"]);

    serviceSpyObj.getImageUrl.and.returnValue(
      movieDb.url_image + fakeMovie.poster_path
    );

    TestBed.configureTestingModule({
      providers: [
        CardMovieComponent,
        { provide: GenerateUrlService, useValue: serviceSpyObj },
      ],
    });
  });

  it("should get image url", () => {
    //Arrange
    const component = TestBed.inject(CardMovieComponent);

    //Act / When
    component.movie = fakeMovie;
    component.ngOnInit();

    //Assert / Then
    expect(serviceSpyObj.getImageUrl).toHaveBeenCalledTimes(1);
    expect(component.urlImage).toBe(movieDb.url_image + fakeMovie.poster_path);
  });

  it("should render img with correct imageUrl", () => {
    //Arrange
    const fixture: ComponentFixture<CardMovieComponent> = TestBed.createComponent(
      CardMovieComponent
    );
    component = fixture.componentInstance; // IMPORTANT CONCEPT

    //Act / When
    component.movie = fakeMovie;
    fixture.detectChanges();

    //Assert / Then
    const template: HTMLElement = fixture.nativeElement;
    const img = template.querySelector("img");
    expect(img.src).toBe(movieDb.url_image + fakeMovie.poster_path);
  });
});
