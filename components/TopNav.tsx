import Image from 'next/image'

const TopNav = () => {
    return (
        <nav className='nav'>
            <div>
                <Image src="/logo.png" alt="Vercel Logo" width={40} height={40}/>
            </div>
            <div className='linkContainer'>
                <a href="#">Account</a>
                <a href="#">Help</a>
                <a href="#">
                    <img className="account-image" src='/headshot-square.jpg' alt="mk-headshot"></img>
                </a>
            </div>
            <style jsx>{`
            .nav {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                padding: 20px 80px 20px 80px;
                background-color: transparent;
                font-size: 22px;
                line-height: 28px;
            }

            a {
                color: #EDEDED;
            }

            .nav h1 {
                font-size: 25px;
            }

            .linkContainer {
                display: flex;
                flex-direction: row;
                align-items: center;
            }

            .linkContainer a {
                padding: 0px 30px 0px 30px;
            }

            .account-image {
                max-height: 50px;
                border-radius: 50%;
                border: 3px solid white;
            }
            `}</style>
        </nav>
    )
}

export default TopNav
