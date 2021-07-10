import React from 'react'
import Image from 'next/image'
import heroImage from '../public/hero-image.png'
import Button from './Button'
import { useRouter } from 'next/router'

const Hero = () => {

    const router = useRouter()

    const handleClick = () => {
        // e.preventDefault();
        alert("Click was called");
    }

    return (
        <div className='hero'>
            <div className='hero-text'>
                <h1>The world's greatest fake site</h1>
                <p>Create the world's greatest fake site and enjoy the breeze of fresh air when you complete it.</p>
                {/* <Button onClick={(e:any) => handleClick(e)} text="Browse Top Videos" /> */}
                <button type="button" onClick={() => router.push('/about')}>Test</button>
            </div>
            <style jsx>{`
                // .hero {
                //     background: url('/hero-image.png') center;
                //     // opacity: 0.8;
                //     background-repeat: no-repeat;
                //     background-size: cover;
                //     width: 100vw;
                //     min-height: 700px;
                //     position: relative;
                //     z-index: -1;
                //     top: -101px;
                // }
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
            `}</style>
        </div>
    )
}

export default Hero
