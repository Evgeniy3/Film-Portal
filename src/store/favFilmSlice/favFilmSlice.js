import { createSlice} from '@reduxjs/toolkit';

const initialState = {
    favFilms: JSON.parse(localStorage.getItem('favfilms') ?? '[]'),
    pageValue: 1,
    
}

const favFilmSlice = createSlice({
  name: 'favFilm',
  initialState,
  reducers: {
    addFavFilm: (state, action) => {
        state.favFilms.push(action.payload)
        localStorage.setItem('favfilms', JSON.stringify(state.favFilms))
    },
    removeFavFilm: (state, action) => {
        state.favFilms = state.favFilms.filter((obj) => obj.imdbID !== action.payload)
        localStorage.setItem('favfilms', JSON.stringify(state.favFilms))
    },
    setCurrentPage: (state, action) => {
      state.pageValue = action.payload;
    },
  },
});

export const { addFavFilm, removeFavFilm, setCurrentPage } = favFilmSlice.actions;

export default favFilmSlice.reducer;