import React from 'react'
import type { Movie } from '../../types'
import MovieListEntry from '../MovieListEntry'
import classes from './index.module.css'
import { useIsStarred } from '../../local_store'
import { context } from '../../pagination_context'

const MovieList = ({ movies }: { movies: Movie[] }): React.ReactElement => {
  const { order } = React.useContext(context)
  const [isStarred, setStarred] = useIsStarred()

  const sortedMovies = React.useMemo(() => {
    if (order === 'asc') {
      return [...movies].reverse()
    }

    return movies
  }, [movies, order])

  return (
    <div className={classes.container}>
      {
        sortedMovies.map((movie) => (
          <MovieListEntry
            key={movie.id}
            movie={movie}
            isStarred={isStarred}
            setStarred={setStarred}
          />
        ))
      }
    </div>
  )
}

export default MovieList
