import { PayloadAction, createSlice} from '@reduxjs/toolkit'
import { IFilterSliceState, SortType } from './types';
import { RootState } from '..';

const initialState: IFilterSliceState = {
  searchValue: JSON.parse(localStorage.getItem('search')!) ?? 'deadpool',
  pageValue: 1,
  sortType: { name: "Все", value: ""},
  sortYear: {name: 'Выбрать', value: ''},
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
      localStorage.setItem('search', JSON.stringify(state.searchValue))
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.pageValue = action.payload;
    },
    setSortType: (state, action: PayloadAction<SortType>) => {
      state.sortType = action.payload;
    },
    setSortYear: (state, action: PayloadAction<SortType>) => {
      state.sortYear = action.payload;
    },
  },
});

export const filterSelect = (state: RootState) => state.filter;

export const { setSearch, setCurrentPage, setSortType, setSortYear} = filterSlice.actions;

export default filterSlice.reducer;