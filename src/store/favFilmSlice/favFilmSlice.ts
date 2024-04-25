import { PayloadAction, createSlice} from '@reduxjs/toolkit';
import { FavFilmsSliceState } from './types';
import { IFullFilm } from '../filmSlice/types';
import { RootState } from '..';

const initialState: FavFilmsSliceState = {
    favFilms: JSON.parse(localStorage.getItem('favfilms') ?? '[]'),
    pageValue: 1,
    
}

const favFilmSlice = createSlice({
  name: 'favFilm',
  initialState,
  reducers: {
    addFavFilm: (state, action: PayloadAction<IFullFilm | undefined>) => {
        state.favFilms.push(action.payload!)
        localStorage.setItem('favfilms', JSON.stringify(state.favFilms))
    },
    removeFavFilm: (state, action: PayloadAction<unknown>) => {
        state.favFilms = state.favFilms.filter((obj: IFullFilm) => obj.imdbID !== action.payload)
        localStorage.setItem('favfilms', JSON.stringify(state.favFilms))
    },
    setCurrentPage: (state, action) => {
      state.pageValue = action.payload;
    },
  },
});

export  const favFilmsSelect = (state: RootState) => state.favFilm;

export const { addFavFilm, removeFavFilm, setCurrentPage } = favFilmSlice.actions;

export default favFilmSlice.reducer;