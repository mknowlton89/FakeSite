import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='footer'>
          <div className="footer-quick-link-container">
            <div className="footer-quick-links">
              <h4>FakeSite</h4>
              <Link href="#"><a>About Us</a></Link>
              <Link href="#"><a>Press</a></Link>
              <Link href="#"><a>Policies</a></Link>
              <Link href="#"><a>Help</a></Link>
            </div>
            <div className="footer-quick-links">
              <h4>Account</h4>
              <Link href="#"><a>Edit Profile</a></Link>
              <Link href="#"><a>Friends</a></Link>
              <Link href="#"><a>Social</a></Link>
              <Link href="#"><a>Delete Profile</a></Link>
            </div>
          </div>

          <hr></hr>
          <div className="footer-legal">
            <div className="footer-logo-container">
              <Image src="/logo.png" alt="Vercel Logo" width={40} height={40}/>
            </div>
            <div>
              <Link href="#"><a>Terms</a></Link>
              <Link href="#"><a>Privacy</a></Link>
              <Link href="#"><a>Site Map</a></Link>
            </div>
          </div>
        <style jsx>{`

          .footer {
            height: 100px;
            display: flex;
            flex-direction: column;
            padding-left: 80px;
            padding-right: 80px;
          }
          .footer-quick-link-container {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            border-bottom: 1px solid #eaeaea;
            padding-bottom: 80px;
          }
          .footer-quick-links {
            display: flex;
            flex-direction: column;
          }
          .footer-legal {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding-bottom: 15px;
          }
          h4 {
            padding-right: 120px;
            color: #EE2D1C;
          }
          .footer-legal a {
            padding-left: 20px;
          }
          @media only screen and (max-width: 700px) {
                    .footer-quick-link-container {
                         flex-direction: column;
                         align-items: center;
                         text-align: center;
                    }
                    .footer-quick-links h4{
                      padding-right: 0px;
                    }
                    .footer-legal {
                        flex-direction: column-reverse;
                        align-items: center;
                    }
                    .footer-legal a {
                      padding: 0px 10px 0px 10px;
                      margin-bottom: 10px;
                      text-align: center;
                    }
                    .footer-logo-container {
                      padding-top: 20px;
                    }
                   }
        }`}</style>
      </footer>
    )
}

export default Footer
