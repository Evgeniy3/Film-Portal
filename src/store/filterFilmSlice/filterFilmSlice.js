import { createSlice} from '@reduxjs/toolkit'

const initialState = {
  searchValue: '',
  pageValue: 1,
  sortType: { name: "Фильм", value: "movie"},
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.searchValue = action.payload;
    },
    setNumPage: (state, action) => {
      state.pageValue = action.payload;
    },
    setSortType: (state, action) => {
      state.sortType = action.payload;
    },
  },
});

export const { setSearch, setNumPage, setSortType } = filterSlice.actions;

export default filterSlice.reducer;