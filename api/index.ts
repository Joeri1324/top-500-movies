import React from 'react'
import { MAXIMUM_PAGES } from '../components/Pagination'
import { context } from '../pagination_context'
import { Movie } from '../types'

const baseApiURL = 'https://api.themoviedb.org/3'
const baseImageURL = 'https://image.tmdb.org/t/p/original/'
const apiKey = 'c5b5ecb22813762a7ac0e0a2201c8f4e'

export const buildApiURL = (route: string, ...params: string[]) => {
  params.push(`api_key=${apiKey}`)
  const url = `${baseApiURL}/${route}`
  const paramsPart = `?${params.join('&')}`

  return `${url}${paramsPart}`
}

export const buildImageURL = (imagePath: string) => `${baseImageURL}/${imagePath}`

export const useMovies = () => {
  const { page, order } = React.useContext(context)
  const [movieCache, setMovieCache] = React.useState<Record<number, Movie[]>>({})

  React.useEffect(() => {
    const pageParam = order === 'desc'
      ? page
      : MAXIMUM_PAGES - page - 1

    fetch(buildApiURL('movie/top_rated', `page=${pageParam}`))
      .then((response) => response.json())
      .then((json) => {
        setMovieCache(movies => ({ ...movies, [page]: json.results }))
      })
  }, [page, order])

  return movieCache[page] || []
}
  