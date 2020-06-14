import { TestBed } from "@angular/core/testing";
import { movieDb } from "src/app/moviedb-config";
import { Movie } from "src/app/shared/models/movie";
import { GenerateUrlService } from "./generate-url.service";

describe("plain typescript test", () => {
  it("should generate image url", () => {
    // Arrange / Given
    const service = new GenerateUrlService();
    const movie = Movie.FAKE;

    // Act / When
    const generatedUrl = service.getImageUrl(movie);

    // Assert / Then
    expect(generatedUrl).toBe(movieDb.url_image + movie.poster_path);
  });
});

describe("test with Angular TestBed", () => {
  it("should generate image url", () => {
    // Arrange / Given
    TestBed.configureTestingModule({});
    const service: GenerateUrlService = TestBed.inject(GenerateUrlService);
    const movie = Movie.FAKE;

    // Act / When
    const generatedUrl = service.getImageUrl(movie);

    // Assert / Then
    expect(generatedUrl).toBe(movieDb.url_image + movie.poster_path);
  });
});
