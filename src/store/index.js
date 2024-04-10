import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import { filmApi } from './filmSlice/film.api'
import filterReducer from './filterFilmSlice/filterFilmSlice'

export const store = configureStore({
    reducer: {
        [filmApi.reducerPath]: filmApi.reducer,
        filter: filterReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(filmApi.middleware)
})

setupListeners(store.dispatch)