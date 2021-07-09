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
                .hero {
                    background: url('/hero-image.png') center;
                    opacity: 0.8;
                    background-repeat: no-repeat;
                    background-size: cover;
                    width: 100vw;
                    min-height: 700px;
                    position: relative;
                    z-index: -1;
                    top: -101px;
                }
                .hero h1 {
                    font-size: 48px;
                    line-height: 48px;
                    color: #fff;
                    font-weight: 300;

                }
                .hero-text {
                    text-align: center;
                    position: absolute;
                    width: 100%;
                    height: 700px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
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
