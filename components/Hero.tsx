import React from 'react'
import { useRouter } from 'next/router'

type Props = {
    headline: string;
    subhead?: string;
    button?: boolean;
    height: string;
}

const Hero = ({headline, subhead, button, height}:Props) => {

    const router = useRouter()

    return (
        <div className='hero'>
            <div className='hero-text'>
                <h1>{headline}</h1>
                <p>{subhead}</p>
                {button && <button type="button" onClick={() => router.push('#videos')}>Browse Top Videos</button>}
            </div>
            <style jsx>{`
                .hero h1 {
                    // font-size: 48px;
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
                    height: ${height};
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    top: -101px;
                    padding: 0px 80px;
                }
                .hero-text p {
                    // font-size:22px;
                    line-height: 28px;
                    color: #EDEDED;
                }
                button {
                    border: none;
                    background-color: #EE2D1C;
                    min-height: 55px;
                    border-radius: 30px;
                    color: #EDEDED;
                    // font-size: 22px;
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
