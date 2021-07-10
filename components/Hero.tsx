import React from 'react'
import Image from 'next/image'
import heroImage from '../public/hero-image.png'
import Button from './Button'
import { useRouter } from 'next/router'

const Hero = () => {

    const router = useRouter()

    return (
        <div className='hero'>
            <div className='hero-text'>
                <h1>Vimeo's Top Charts</h1>
                <p>Want to be the wokest bro in your squad? Check out which videos are hot and which videos are not. #WokeFam</p>
                <button type="button" onClick={() => router.push('#videos')}>Browse Top Videos</button>
            </div>
            <style jsx>{`
                .hero h1 {
                    font-size: 48px;
                    line-height: 48px;
                    color: #fff;
                    font-weight: 300;
                }
                .hero-text {
                    background: url('/hero-image.png') center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    text-align: center;
                    position: relative;
                    width: 100vw;
                    height: 700px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    top: -101px;
                }
                .hero-text p {
                    font-size:22px;
                    line-height: 28px;
                    color: #EDEDED;
                }
                button {
                    border: none;
                    background-color: #EE2D1C;
                    min-height: 55px;
                    border-radius: 30px;
                    color: #EDEDED;
                    font-size: 22px;
                    padding: 0px 20px;
                    z-index: 30;
                }
                button:hover {
                    cursor: pointer;
                }
            `}</style>
        </div>
    )
}

export default Hero
