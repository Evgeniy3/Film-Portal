import { createSlice} from '@reduxjs/toolkit'

const initialState = {
  searchValue: '',
  pageValue: 1,
  sortType: { name: "Все", value: ""},
  sortYear: {name: 'Выбрать', value: ''},
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.searchValue = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.pageValue = action.payload;
    },
    setSortType: (state, action) => {
      state.sortType = action.payload;
    },
    setSortYear: (state, action) => {
      state.sortYear = action.payload;
    },
  },
});

export const { setSearch, setCurrentPage, setSortType, setSortYear} = filterSlice.actions;

export default filterSlice.reducer;