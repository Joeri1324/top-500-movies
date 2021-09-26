import React from 'react'
import classes from './index.module.css'
import { Movie } from '../../types'
import { buildImageURL } from '../../api'

const MoviePoster = ({ movie }: { movie: Movie }): React.ReactElement => (
  <div className={classes.root}>
    <img
      src={buildImageURL(movie.poster_path)}
      alt={`post ${movie.title}`}
      height={100}
      width="auto"
    />
  </div>
)

export default MoviePoster
