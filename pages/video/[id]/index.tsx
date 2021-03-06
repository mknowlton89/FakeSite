import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import api from '../../../utils/api'
import helpers from '../../../utils/helpers'
import Head from 'next/head'
import TopNav from '../../../components/TopNav'
import Footer from '../../../components/Footer'
import Hero from '../../../components/Hero'

const VideoPage = () => {

    let size = helpers.useWindowSize();

    const [videoWidth, setVideoWidth]: any = useState()
    const [videoHeight, setVideoHeight]: any = useState()
    const [videoData, setVideoData]: any = useState()

    const router = useRouter()

    let videoId: any = router.query.id

    const getURLSource = () => {
        let urlArray = videoData.uri.split('/')
        return `https://player.vimeo.com/video/${urlArray[2]}`;
    }

    const calculateVideoSize = () => {

        if (size.width && videoData){
            if (size.width > videoData.width){
                setVideoWidth(videoData.width)
            } else {
                setVideoWidth(size.width * .8)
            }
        }

        const videoAspectRatio = videoData.width / videoData.height
            setVideoHeight(videoWidth / videoAspectRatio)
    }

    useEffect(() => {
        if (videoId) {
            api.getVideoDetailsById(videoId.toString())
                .then(res => setVideoData(res.data))
                .catch(err => console.log(err))
        }
    }, [videoId]);

    useEffect(() => {
        if (videoData && size){
            calculateVideoSize()
        }
    }, [size, videoData, videoWidth])

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
                    {!videoData && !videoWidth && !videoHeight ?
                    <div className="loading-state">
                        <h3>Loading</h3>
                    </div> :
                    <>
                    <Hero
                        headline={videoData.name}
                        button={false}
                        height="500px"/>
                    <div id="video-wrapper">
                        <iframe className="i-frame-container" src={getURLSource()} width={videoWidth} height={videoHeight} allow="autoplay; fullscreen; picture-in-picture" title={videoData.name}></iframe>
                        <h2>Description:</h2>
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

// export const getStaticPaths = async () => {

//     const res = await fetch('https://vimeo.com/api/v2/channel/staffpicks/videos.json')

//     const videos = await res.json();

//     const ids = videos.map(video => video.id)

//     const paths = ids.map(id => ({params: {id: id.toString()}}))

//     return {
//         paths: {
//             paths,
//             fallback: false
//         }
//     }
//   }

export default VideoPage
