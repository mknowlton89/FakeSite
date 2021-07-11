import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import api from '../../../utils/api'
import Head from 'next/head'
import TopNav from '../../../components/TopNav'
import Footer from '../../../components/Footer'
import VideoHero from '../../../components/VideoHero'

const videoPage = () => {

    const [videoData, setVideoData]: any = useState()

    const router = useRouter()
    let videoId: any = router.query.id

    useEffect(() => {
        if (videoId) {
            api.getVideoDetailsById(videoId.toString())
                .then(res => setVideoData(res.data))
                .catch(err => console.log(err))
        }
    }, [videoId]);

    console.log(videoData)

    return (
        <div>
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
                    {!videoData ?
                    <div className="loading-state">
                        <h3>Loading</h3>
                    </div> :
                    <>
                    <VideoHero title={videoData.name}/>
                    <div id="video-wrapper">
                        <iframe className="iframe-container" src="https://player.vimeo.com/video/292893585?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=219612" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="The Phantom 52 starring Tom Skerritt"></iframe>
                        <p>{videoData.description.replace(/<[^>]*>?/gm, '')}</p>
                    </div>
                    </>}
                <Footer />
            </main>
            <style jsx>{`
                .loading-state {
                    display: flex;
                    height: 300px;
                    width: 100vw;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                }
                #video-wrapper {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                    padding: 0px 80px;
                }
                .iframe-container {
                    width: 100vw;
                }
            `}</style>
        </div>
    )
}

export default videoPage
