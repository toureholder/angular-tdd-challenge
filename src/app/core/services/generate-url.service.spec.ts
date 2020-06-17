import { GenerateUrlService } from "./generate-url.service";
import { Movie } from "src/app/shared/models/movie";
import { movieDb } from "src/app/moviedb-config";
import { TestBed } from "@angular/core/testing";

describe("Plain Old Typescript test", () => {
  it("should return image url", () => {
    //Arrange / Given
    const service = new GenerateUrlService();
    const movie = Movie.FAKE;

    //Act / When
    const url = service.getImageUrl(movie);

    //Assert / Then
    expect(url).toBe(movieDb.url_image + movie.poster_path);
  });
});

describe("Tests with Angular TestBed", () => {
  it("should return image url", () => {
    TestBed.configureTestingModule({}); // IMPORTANT CONCEPT
    const service = TestBed.inject(GenerateUrlService);
    const movie = Movie.FAKE;

    //Act / When
    const url = service.getImageUrl(movie);

    //Assert / Then
    expect(url).toBe(movieDb.url_image + movie.poster_path);
  });
});
