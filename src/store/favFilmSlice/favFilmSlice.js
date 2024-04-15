import { createSlice} from '@reduxjs/toolkit';

const LS_FAV_KEY = 'rfk'

const initialState = {
    favFilms: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]'),
}

const favFilmSlice = createSlice({
  name: 'favFilm',
  initialState,
  reducers: {
    addFavFilm: (state, action) => {
        state.favFilms.push(action.payload)
        localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favFilms))
    },
    removeFavFilm(state, action) {
        state.favFilms = state.favFilms.filter((obj) => obj.imdbID !== action.payload)
        localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favFilms))
    }
  },
});

export const { addFavFilm, removeFavFilm } = favFilmSlice.actions;

export default favFilmSlice.reducer;