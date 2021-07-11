import React from 'react'
import Image from 'next/image'
import heroImage from '../public/hero-image.png'
import Button from './Button'
import { useRouter } from 'next/router'

type Props = {
    title: string;
}

const VideoHero = ({ title }: Props) => {

    const router = useRouter()

    return (
        <div className='video-hero'>
            <div className='video-hero-text'>
                <h1>{title}</h1>
            </div>
            <style jsx>{`
                .video-hero h1 {
                    font-size: 48px;
                    line-height: 48px;
                    color: #fff;
                    font-weight: 300;
                }
                .video-hero-text {
                    background: url('/hero-image.png') center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    text-align: center;
                    position: relative;
                    width: 100vw;
                    height: 400px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    top: -101px;
                }
                .video-hero-text p {
                    font-size:22px;
                    line-height: 28px;
                    color: #EDEDED;
                }
                @media only screen and (max-width: 600px) {
                    .video-hero-text {
                        width: 160vw;
                    }
                  }
                  @media only screen and (max-width: 437px) {
                    .video-hero-text {
                        width: 160vw;
                    }
                  }
            `}</style>
        </div>
    )
}

export default VideoHero
