import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import { filmApi } from './filmSlice/film.api'
import filterReducer from './filterFilmSlice/filterFilmSlice'
import favFilmSlice from './favFilmSlice/favFilmSlice'
import logger from '../middleware'
import { useDispatch } from 'react-redux'

export const store = configureStore({
    reducer: {
        [filmApi.reducerPath]: filmApi.reducer,
        filter: filterReducer,
        favFilm: favFilmSlice,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat([filmApi.middleware])
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();