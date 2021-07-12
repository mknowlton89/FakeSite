import Head from 'next/head'
import Hero from '../components/Hero'
import { VideoTable } from '../components/VideoTable'
import TopNav from '../components/TopNav'
import Footer from '../components/Footer'
import { Video } from '../utils/types'

type Props = {
  videos: Video[],
};

export default function Home({videos}: Props) {
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
        <TopNav />
        <Hero />
        <VideoTable videos={videos}/>
        <Footer />
      </main>
    </div>
  )
}

export const getStaticProps = async () => {

  const res = await fetch('https://vimeo.com/api/v2/channel/staffpicks/videos.json')

  const videos = await res.json();

  return {
      props: {
          videos
      }
  }
}
