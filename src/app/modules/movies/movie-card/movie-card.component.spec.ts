import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MovieCardComponent } from "./movie-card.component";
import { Movie } from "src/app/shared/models/movie";
import { movieDbConfig } from "src/app/moviedb-config";

describe("MovieCardComponent", () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;
  let fakeMovie: Movie;
  let template: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovieCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fakeMovie = {
      id: 123,
      title: "Fake Movie",
      poster_path: "/zQFjMmE3K9AX5QrBL1SXIxYQ9jz.jpg",
    };

    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.componentInstance;
    component.movie = fakeMovie;
    template = fixture.nativeElement;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render the image", () => {
    //Assert / Then
    const image = template.querySelector("img");
    expect(image).toBeTruthy();
    expect(image.src).toBe(
      movieDbConfig.base_image_url + component.movie.poster_path
    );
  });

  it("should render the title", () => {
    //Assert / Then
    const titleElement = template.querySelector('[data-test="title"]') as any;
    expect(titleElement).toBeTruthy();
    expect(titleElement.innerText).toBe(component.movie.title);
  });

  it("should be acessible", () => {
    //Assert / Then
    const image = template.querySelector("img");
    expect(image).toBeTruthy();
    expect(image.alt).toBe(component.movie.title);
  });
});
