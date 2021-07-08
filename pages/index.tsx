import Head from 'next/head'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Vimeo Staff Picks</title>
        <meta name="description" content="The top videos curated from Vimeo's staff of film experts." />
        <link rel="icon" href="/logo.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className='main'>
        <Hero />
      </main>
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        .main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  )
}
