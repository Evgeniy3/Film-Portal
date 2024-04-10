import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const filmApi = createApi({
    reducerPath: 'film/api',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://www.omdbapi.com/'
    }),
    refetchOnFocus: true,
    endpoints: build => ({
      searchFilms: build.query({
        query: (search) => ({
          url: `?apikey=7fd6cd39`,
          params: {
            s: search,
          }
        }),
      }),
      searchOneFilm: build.query({
        query: (search) => ({
          url: `?apikey=7fd6cd39`,
          params: {
            i: search,
          }
        }),
      }),
    })
  })
  
  export const {useSearchFilmsQuery, useSearchOneFilmQuery} = filmApi