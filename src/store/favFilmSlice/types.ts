import { IFullFilm } from "../filmSlice/types";

export interface FavFilmsSliceState {
    favFilms: IFullFilm[],
    pageValue: number,
}