import { PayloadAction, createSlice} from '@reduxjs/toolkit'
import { IFilterSliceState, SortType } from './types';

const initialState: IFilterSliceState = {
  searchValue: '',
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

export const { setSearch, setCurrentPage, setSortType, setSortYear} = filterSlice.actions;

export default filterSlice.reducer;