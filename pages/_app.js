import Head from 'next/head'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
 

  return (<>
<Head>
<link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet' />
        <title>Nemi Education</title>
        <meta name="description" content="#1 Education Platform" />
        <link rel="icon" href="/nemi-favicon.svg" />
</Head>
  <Component {...pageProps} /></> )
}

export default MyApp
