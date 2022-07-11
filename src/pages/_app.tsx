import { AppProps } from 'next/app'
import React from 'react'
import GlobalsCss from '../../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalsCss />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
