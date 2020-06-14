import { CardMovieComponent } from "./card-movie.component";
import { log } from "console";
import { GenerateUrlService } from "src/app/core/services/generate-url.service";
import { Movie } from "src/app/shared/models/movie";
import { movieDb } from "src/app/moviedb-config";
import { TestBed } from "@angular/core/testing";

describe("plain jasmine testing", () => {
  it("should get correct image url from real service", () => {
    //Arrange / Given
    const urlService = new GenerateUrlService();
    const component: CardMovieComponent = new CardMovieComponent(urlService);

    //Act / When
    component.movie = Movie.FAKE;
    component.ngOnInit();

    //Assert / Then
    expect(component.urlImage).toBe(
      movieDb.url_image + component.movie.poster_path
    );
  });

  it("should get correct image url from mock service", () => {
    //Arrange / Given
    const stub = (movie) => movieDb.url_image + movie.poster_path;

    const mockUrlService = {
      getImageUrl: stub,
    };

    const component: CardMovieComponent = new CardMovieComponent(
      mockUrlService
    );

    //Act / When
    component.movie = Movie.FAKE;
    component.ngOnInit();

    //Assert / Then
    expect(component.urlImage).toBe(
      movieDb.url_image + component.movie.poster_path
    );
  });

  it("should get correct image url from jasmine spy", () => {
    //Arrange / Given
    const urlServiceSpy = jasmine.createSpyObj<GenerateUrlService>(
      "GenerateUrlService",
      ["getImageUrl"]
    );
    urlServiceSpy.getImageUrl.and.returnValue(
      movieDb.url_image + Movie.FAKE.poster_path
    );
    const component: CardMovieComponent = new CardMovieComponent(urlServiceSpy);

    //Act / When
    component.movie = Movie.FAKE;
    component.ngOnInit();

    //Assert / Then
    expect(urlServiceSpy.getImageUrl).toHaveBeenCalled();

    expect(component.urlImage).toBe(
      movieDb.url_image + component.movie.poster_path
    );
  });
});

describe("tests with Angular TestBed", () => {
  let urlServiceSpy: jasmine.SpyObj<GenerateUrlService>;

  beforeEach(() => {
    urlServiceSpy = jasmine.createSpyObj<GenerateUrlService>(
      "GenerateUrlService",
      ["getImageUrl"]
    );

    urlServiceSpy.getImageUrl.and.returnValue(
      movieDb.url_image + Movie.FAKE.poster_path
    );
  });

  it("provided component should get correct image url", () => {
    TestBed.configureTestingModule({
      providers: [
        CardMovieComponent,
        { provide: GenerateUrlService, useValue: urlServiceSpy },
      ],
    });

    const component: CardMovieComponent = TestBed.inject(CardMovieComponent);

    //Act / When
    component.movie = Movie.FAKE;
    component.ngOnInit();

    //Assert / Then
    expect(component.urlImage).toBe(
      movieDb.url_image + component.movie.poster_path
    );
  });

  it("component from fixture should get correct image url", () => {
    TestBed.configureTestingModule({
      declarations: [CardMovieComponent],
      providers: [{ provide: GenerateUrlService, useValue: urlServiceSpy }],
    });

    const fixture = TestBed.createComponent(CardMovieComponent);
    const component: CardMovieComponent = fixture.componentInstance;

    //Act / When
    component.movie = Movie.FAKE;
    component.ngOnInit();

    //Assert / Then
    expect(component.urlImage).toBe(
      movieDb.url_image + component.movie.poster_path
    );
  });

  it("should render img with correct image url", () => {
    TestBed.configureTestingModule({
      declarations: [CardMovieComponent],
      providers: [{ provide: GenerateUrlService, useValue: urlServiceSpy }],
    });

    const fixture = TestBed.createComponent(CardMovieComponent);
    const component: CardMovieComponent = fixture.componentInstance;

    //Act / When
    component.movie = Movie.FAKE;
    component.ngOnInit();
    fixture.detectChanges();

    //Assert / Then
    const rootElement: HTMLElement = fixture.nativeElement;

    expect(rootElement.querySelector("img").src).toBe(
      movieDb.url_image + component.movie.poster_path
    );
  });
});
