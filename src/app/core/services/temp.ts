import { OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

/* export class WelcomeComponent implements OnInit {
  welcome: string;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.welcome = this.userService.isLoggedIn
      ? "Welcome, " + this.userService.user.name
      : "Please log in.";
  }
} */

/* export class WelcomeComponent {
    welcome: string;
    constructor(private userService: UserService) {}
  
    getWelcomeMessage(): string {
      return "Welcome!";
    }
  } */

class LocalStorageService {
  hero = localStorage.getItem("hero");
  user = { name: "Test User" };
}

/* class HeroService {
  constructor(private storage: LocalStorageService) {}

  getHero() {
    return this.storage.hero;
  }
} */

interface Hero {
  name: string;
}

/* class HeroService {
  constructor(private http: HttpClient) {}

  getHero() {
    return this.http.get("https://api.project.com/hero/1");
  }
} */

/* class MockHeroService {
  constructor(private storage: LocalStorageService) {}

  getHero() {
    return this.storage.hero;
  }
} */

/* export class WelcomeComponent {
  getMessage(): string {
    return "Welcome!";
  }
} */

export class WelcomeComponent {
  constructor(private heroService: HeroService) {}

  getMessage(): string {
    return "Welcome, " + this.heroService.getHero().name;
  }
}

class HeroService {
  getHero(): Hero {
    return JSON.parse(localStorage.getItem("hero")) as Hero;
  }
}

class MockHeroService {
  getHero: () => { name: "Spiderman" };
}

it("should return the welcome message from REAL service", () => {
  // Sociable test
  const component = new WelcomeComponent(new HeroService());
  expect(component.getMessage()).toBe("Welcome, Spiderman");
});

it("should return the welcome message from MOCK service", () => {
  // Solitary test
  const component = new WelcomeComponent(new MockHeroService());
  expect(component.getMessage()).toBe("Welcome, Spiderman");
});
