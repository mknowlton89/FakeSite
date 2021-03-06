import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const TopNav = () => {

    const [navState, setNavState] = useState('closed');

    const handleNavClick = () => {
        if (navState === "closed"){
            setNavState('is-active');
        } else {
            setNavState('closed');
        }
    }

    return (
        <nav className='nav'>
            <div className="logo-container">
                <Link href="/">
                    <Image src="/logo.png" alt="Vercel Logo" width={50} height={50}/>
                </Link>
            </div>
            <div className='linkContainer'>
                <Link href="#"><a>Account</a></Link>
                <Link href="#"><a>Help</a></Link>
                <Link href="#">
                    <img className="account-image" src='/headshot-square.jpg' alt="mk-headshot"></img>
                </Link>
            </div>
            <div className='mobile-linkContainer'>
                <Link href="/"><a>Home</a></Link>
                <Link href="#"><a>Account</a></Link>
                <Link href="#"><a>Help</a></Link>
            </div>
            <style jsx>{`
            .nav {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                padding: 20px 80px 20px 80px;
                background-color: transparent;
                line-height: 28px;
                z-index: 50;
                position: relative;
            }

            a {
                color: #EDEDED;
                padding: 0px 30px 0px 30px;
            }

            .linkContainer {
                display: flex;
                flex-direction: row;
                align-items: center;
            }

            .account-image {
                max-height: 50px;
                border-radius: 50%;
                border: 3px solid white;
                z-index: 100;
            }

            .hamburger {
                position: relative;
                display: block;
                width: 50px;
                cursor: pointer;
                appearance: none;
                background: none;
                outline: none;
                border: none;
                z-index: 100;
            }

            .hamburger .bar, .hamburger::after, .hamburger::before {
                content: '';
                display: block;
                width: 100%;
                height: 5px;
                background-color: black;
                margin: 6px 0px;
                transition: 0.3s;
            }

            .hamburger.is-active::before {
                transform: rotate(-45deg) translate(-9px, 6px);
            }

            .hamburger.is-active .bar {
                opacity: 0;
            }

            .hamburger.is-active::after {
                transform: rotate(45deg) translate(-9px, -6px);
            }

            .mobile-nav {
                display: flex;
                flex-direction: column;
                justify-content: center;
                position: fixed;
                top: 0;
                left: 100%;
                min-height: fit-content;
                align-content: space-around;
                z-index: 98;
                padding-left: 20%;
                padding-right: 20%;
                padding-bottom: 8%;
                transition: 0.3s;
            }

            .mobile-nav.is-active {
                height: fit-content;
                width: 121vw;
                background: white;
                position: fixed;
                left: 0%;
                padding-top: 100px;
                padding-bottom: 100px;
            }

            .mobile-nav a {
                display: block;
                text-align: center;
                margin-bottom: 16px;
                padding: 12px 16px;
                text-decoration: none;
                color: black;
            }

            nav img {
                z-index: 100;
            }

            @media only screen and (min-width: 600px) {
                .mobile-linkContainer {
                    display: none;
                }
              }

            @media only screen and (max-width: 600px) {
                .linkContainer {
                    display: none;
                }
                .nav {
                    flex-direction: column;
                }
                .mobile-linkContainer {
                    padding-top: 20px;
                }
                .logo-container {
                    display: none;
                }
              }
            `}</style>
        </nav>
    )
}

export default TopNav
