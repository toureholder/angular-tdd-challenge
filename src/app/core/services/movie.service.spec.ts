import { TestBed } from "@angular/core/testing";

import { MovieService } from "./movie.service";
import { HttpClient } from "@angular/common/http";
import { Movie } from "src/app/shared/models/movie";
import { of } from "rxjs";

describe("MovieService", () => {
  let service: MovieService;
  let mockHttpClient: jasmine.SpyObj<HttpClient>;
  let fakeApiResponse;

  beforeEach(() => {
    mockHttpClient = jasmine.createSpyObj<HttpClient>("HttpClient", ["get"]);

    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: mockHttpClient }],
    });

    service = TestBed.inject(MovieService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should get movies from api return observable", () => {
    //Arrange / Given
    fakeApiResponse = {
      results: [
        {
          popularity: 90.662,
          vote_count: 826,
          video: false,
          poster_path: "/mDt3GkephI5yrRsEgLfdo3MYxyj.jpg",
          id: 514847,
          adult: false,
          backdrop_path: "/naXUDz0VGK7aaPlEpsuYW8kNVsr.jpg",
          original_language: "en",
          original_title: "The Hunt",
          genre_ids: [28, 27, 53],
          title: "A Caçada",
          vote_average: 6.7,
          overview:
            "Na intenção de fazer justiça com as próprias mãos, dois grupos completamente opostos iniciam uma guerra armada que lentamente aumenta de proporção, trazendo consequências irreversíveis e dividindo cada vez mais os cidadãos de uma pequena vila",
          release_date: "2020-03-11",
        },
      ],
      page: 1,
      total_results: 107,
      dates: {
        maximum: "2020-07-07",
        minimum: "2020-06-18",
      },
      total_pages: 6,
    };

    const fakeMovie: Movie = {
      id: 514847,
      title: "A Caçada",
      poster_path: "/mDt3GkephI5yrRsEgLfdo3MYxyj.jpg",
    };

    mockHttpClient.get.and.returnValue(of(fakeApiResponse));

    //When
    service.getMovies().subscribe((data) => {
      //Then
      expect(data).toEqual([fakeMovie]);
    });
  });
});
