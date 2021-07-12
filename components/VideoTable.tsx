import React from 'react'
import { useRouter } from 'next/router'
import { Video } from '../utils/types'
import Link from 'next/link'

  type Props = {
    videos: Video[],
  };

export const VideoTable = ({videos}: Props) => {

    const router = useRouter()

    const truncateString = (str: string, num: number) => {
        if (str.length <= num) {
            return str
          }
          return str.slice(0, num) + '...';
    }

    return (
        <div id="videos">
            {videos.map((video) => {
                return (
                    <div className="video-card-container" key={video.id}>
                        <div className="video-details">
                            <h2>{video.title}</h2>
                            <p>{truncateString(video.description.replace(/<[^>]*>?/gm, ''), 200)}</p>
                            <button type="button" onClick={() => router.push(`/video/${video.id}`)}>Watch Full Video</button>

                        </div>
                        <Link href={`/video/${video.id}`}>
                            <div className="video-preview">
                                    <img className="preview-image" src={video.thumbnail_large} alt={video.title}/>
                                    <img className="overlay-icon" src={'/playbtn.png'} alt="play-button"/>
                            </div>
                        </Link>
                    </div>
                )
            })}
            <style jsx>{`
                .video-card-container {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    padding: 40px 80px;
                }
                .video-card-container h2 {
                    font-size: 36px;
                    line-height: 36px;
                    color: #4c4c51;
                }
                .video-details {
                    padding: 20px;
                }
                .preview-image {
                    width: 600px;
                }
                .overlay-icon {
                    position: absolute;
                    top: 34%;
                    left: 43%;
                    z-index: 30;
                }
                .video-preview {
                    position: relative;
                    background: playbtn;
                }
                .video-preview::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    width: 100%;
                    height: 98.3%;
                    background-image: linear-gradient(to bottom, #EE2E1D, #FFB1B5);
                    opacity: .7;
                }
                .video-preview:hover {
                    cursor: pointer;
                }
                button {
                    border: none;
                    background-color: #EE2D1C;
                    min-height: 55px;
                    border-radius: 30px;
                    color: #EDEDED;
                    font-size: 22px;
                    padding: 0px 20px;
                }
                button:hover {
                    cursor: pointer;
                }
                @media only screen and (max-width: 1100px) {
                    .video-card-container {
                        flex-direction: column-reverse;
                    }
                  }
                  @media only screen and (max-width: 1100px) {
                    .video-card-container {
                        flex-direction: column-reverse;
                    }
                  }
                `}</style>
        </div>
    )
}
