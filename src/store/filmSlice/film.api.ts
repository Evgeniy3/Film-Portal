import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IFilm, IFullFilm, IPops, ServerResponse } from './types';

export const filmApi = createApi({
    reducerPath: 'film/api',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://www.omdbapi.com/'
    }),
    refetchOnFocus: true,
    endpoints: build => ({
      searchFilms: build.query<ServerResponse<IFilm>, IPops>({
        query: (args) => {
          const { searchValue, pageValue, sortType, sortYear} = args;
          
          return {
            url: `?apikey=${process.env.REACT_APP_API_KEY}&s=${searchValue}&page=${pageValue}&type=${sortType.value}&y=${sortYear.value}`,
          }
        },
      }),
      searchOneFilm: build.query<IFullFilm, string | undefined>({
        query: (search) => ({
          url: `?apikey=${process.env.REACT_APP_API_KEY}`,
          params: {
            i: search,
          }
        }),
      }),
    })
  })
  
  export const {useSearchFilmsQuery, useSearchOneFilmQuery} = filmApi