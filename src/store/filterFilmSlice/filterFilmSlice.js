import { createSlice} from '@reduxjs/toolkit'

const initialState = {
  searchValue: '',
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearch } = filterSlice.actions;

export default filterSlice.reducer;