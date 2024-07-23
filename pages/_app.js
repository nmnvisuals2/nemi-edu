import Head from 'next/head'
import '../styles/globals.css'
import {DefaultSeo} from 'next-seo';
import {NextUIProvider} from "@nextui-org/react";

function MyApp({ Component, pageProps }) {
 

  return (<>
<Head>
<link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet' />
        <title>Nemi Education</title>
        <meta name="description" content="#1 Education Platform" />
        <link rel="icon" href="/nemi-favicon.svg" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11044015265"></script>
        <script dangerouslySetInnerHTML={{__html:"gtag('event', 'conversion', {'send_to': 'AW-11044015265/7TgHCPjIqYkYEKGZmZIp'});"}}>
  
</script>
 {/* Meta Pixel Code  */}
<script dangerouslySetInnerHTML={{__html:"!function(f,b,e,v,n,t,s)\r\n{if(f.fbq)return;n=f.fbq=function(){n.callMethod?\r\nn.callMethod.apply(n,arguments):n.queue.push(arguments)};\r\nif(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\r\nn.queue=[];t=b.createElement(e);t.async=!0;\r\nt.src=v;s=b.getElementsByTagName(e)[0];\r\ns.parentNode.insertBefore(t,s)}(window, document,'script',\r\n'https://connect.facebook.net/en_US/fbevents.js');\r\nfbq('init', '162831453372543');\r\nfbq('track', 'PageView');"}}>

</script>
<noscript dangerouslySetInnerHTML={{__html:"<img height=\"1\" width=\"1\" style=\"display:none\"\r\nsrc=\"https://www.facebook.com/tr?id=162831453372543&ev=PageView&noscript=1\"\r\n/>"}}></noscript>
{/* End Meta Pixel */}
        <script dangerouslySetInnerHTML={{__html:"window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-11044015265');"}}></script>
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
<NextUIProvider>
  <Component {...pageProps} /></NextUIProvider></> )
}

export default MyApp
