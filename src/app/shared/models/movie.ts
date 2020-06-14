export class Movie {
  id: string;
  poster_path: string;
  title: string;

  public static readonly FAKE: Movie = {
    id: "514847",
    poster_path: "/mDt3GkephI5yrRsEgLfdo3MYxyj.jpg",
    title: "A Caçada",
  };

  public static readonly FAKE_LIST: Movie[] = [Movie.FAKE];
}
