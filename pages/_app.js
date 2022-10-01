import Head from 'next/head'
import '../styles/globals.css'
import {DefaultSeo} from 'next-seo';

function MyApp({ Component, pageProps }) {
 

  return (<>
<Head>
<link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet' />
        <title>Nemi Education</title>
        <meta name="description" content="#1 Education Platform" />
        <link rel="icon" href="/nemi-favicon.svg" />
</Head>
<DefaultSeo
openGraph={{
  type:'website',
  locale:'en_IE',
  title:'Nemi Education | Top Learning Platform',
  description:`India's first research based Edtech Company`,
  url:'https://www.nemiedu.com',
  site_name:'Nemi Education | Top Learning Platform',
  images:[{
 url:'https://nemiedu.com/about.jpg',
 width:800,
 height:600,
 alt:'Nemi Best Learning Platform',
  },],

}}

/>
  <Component {...pageProps} /></> )
}

export default MyApp
