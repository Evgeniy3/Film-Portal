import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const filmApi = createApi({
    reducerPath: 'film/api',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://www.omdbapi.com/'
    }),
    refetchOnFocus: true,
    endpoints: build => ({
      searchFilms: build.query({
        query: (args) => {
          const { searchValue, pageValue, sortType} = args;
          
          return {
            url: `?apikey=7fd6cd39&s=${searchValue}&page=${pageValue}&type=${sortType.value}`,
          }
        },
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