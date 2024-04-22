import { SortType } from "../filterFilmSlice/types";

export interface IFilm {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

export interface ServerResponse<T> {
    Search: T[];
    totalResults: string;
    Response: string;
}

export interface Rating {
  Source: string;
  Value: string;
}

export interface IFullFilm {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: Rating[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
  }

  export interface IPops {
    searchValue: string,
    pageValue: number,
    sortType: SortType,
    sortYear: SortType,
  }
