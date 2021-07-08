import React from 'react'
import Image from 'next/image'
import heroImage from '../public/hero-image.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-text'>
                <h1>The world's greatest fake site</h1>
                <p>Create the world's greatest fake site and enjoy the breeze of fresh air when you complete it.</p>
                <button>Do Something Awesome</button>
            </div>
            <style jsx>{`
                #hero-image {
                    z-index: 0;
                }
                .hero {
                    display: flex;
                    flex-direction: row;
                    background: url('/hero-image.png') center;
                    opacity: 0.8;
                    background-size: cover;
                    width: 100%;
                    height: auto;
                    min-height: 700px;
                    position: absolute;
                    top: 0px;
                    z-index: -1;
                }
                .hero h1 {
                    font-size: 48px;
                    line-height: 48px;
                    color: #fff;
                    font-weight: 300;

                }
                .hero-text {
                    width: 100%;
                    align-self: center;
                    text-align: center;
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
                }
            `}</style>
        </div>
    )
}

export default Hero
