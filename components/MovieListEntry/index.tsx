import React from 'react'
import type { Movie } from '../../types'
import MoviePoster from '../MoviePoster'
import Icon from '../Icon'
import Row from '../Row'
import classes from './index.module.css'

const getYear = (dateString: string): number => {
  const date = new Date(dateString)

  return date.getFullYear()
}

const backgroundColorUnstarred = 'white'
const backgroundColorStarred = 'rgb(121, 182, 242)'

const MovieListEntry = ({
  movie,
  isStarred,
  setStarred,
}: {
  movie: Movie,
  isStarred: (movieId: number) => boolean,
  setStarred: (movideId: number) => void,
}): React.ReactElement => {
  const onClick = React.useCallback(
    (clickedMovie: Movie) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      setStarred(clickedMovie.id)
    }, [setStarred],
  )

  return (
    <div className={classes.root}>
      <MoviePoster movie={movie} />
      <div>
        <div
          style={{
            backgroundColor: (
              isStarred(movie.id)
                ? backgroundColorStarred
                : backgroundColorUnstarred
            ),
          }}
        >
          <b>
            <Row>
              <a href={`https://www.themoviedb.org/movie/${movie.id}`}>
                { movie.title }
                -
                { movie.vote_average }
                -
                { getYear(movie.release_date) }
              </a>
              <Icon
                char="☆"
                onClick={onClick(movie)}
                size={18}
              />
            </Row>
          </b>
        </div>
        <div>
          {movie.overview}
        </div>
      </div>
    </div>
  )
}

export default MovieListEntry
