import React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import PaginationContext from '../pagination_context'

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => (
  <PaginationContext>
    <Component {...pageProps} />
  </PaginationContext>
)

export default MyApp
