import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { CardMovieComponent } from "./card-movie.component";
import { movieDb } from "src/app/moviedb-config";

describe("CardMovieComponent", () => {
  let component: CardMovieComponent;
  let fixture: ComponentFixture<CardMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardMovieComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMovieComponent);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should generate correct image url", () => {
    component.movie = {
      id: "514847",
      poster_path: "/mDt3GkephI5yrRsEgLfdo3MYxyj.jpg",
      title: "A Caçada",
    };

    component.ngOnInit();

    expect(component.urlImage).toBe(
      movieDb.url_image + component.movie.poster_path
    );
  });

  it("should render img with url", () => {
    component.movie = {
      id: "514847",
      poster_path: "/mDt3GkephI5yrRsEgLfdo3MYxyj.jpg",
      title: "A Caçada",
    };

    component.ngOnInit();

    fixture.detectChanges();

    const template: HTMLElement = fixture.nativeElement;

    expect(template.querySelector("img").src).toBe(component.urlImage);
  });
});
