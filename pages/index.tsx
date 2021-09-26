import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useMovies } from '../api'
import MovieList from '../components/MovieList'
import Header from '../components/Header'

const Home: NextPage = (): React.ReactElement => {
  const movies = useMovies()

  return (
    <div>
      <Header />

      <div className={styles.container}>
        <Head>
          <title>Top 500 movies</title>
          <meta name="description" content="Display of the top 500 movies" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <MovieList movies={movies} />
        </main>
      </div>
    </div>
  )
}

export default Home
