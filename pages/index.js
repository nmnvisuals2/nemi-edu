import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nemi Education</title>
        <meta name="description" content="#1 Education Platform" />
        <link rel="icon" href="/nemi-favicon.svg" />
      </Head>

      <main className={styles.main}>

        <div className={styles.panel}>
       <img src="/nemi-logo.svg" width="200" height="200"></img>
       <h2 className={styles.heading}>nEmi is Evolving & an evolution requires a <spcl>short break</spcl></h2>
       <p>Evolution is in Progress. Come Back soon again</p>
       <div className={styles.loader}></div></div>
      </main>

   
    </div>
  )
}
