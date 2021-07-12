import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='footer'>
          <div className="footer-quick-link-container">
            <div className="footer-quick-links">
              <h4>FakeSite</h4>
              <Link href="#">Linkbout Us</Link>
              <Link href="#">Press</Link>
              <Link href="#">Policies</Link>
              <Link href="#">Help</Link>
            </div>
            <div className="footer-quick-links">
              <h4>Account</h4>
              <Link href="#">Edit Profile</Link>
              <Link href="#">Friends</Link>
              <Link href="#">SociLinkl</Link>
              <Link href="#">Delete Profile</Link>
            </div>
          </div>

          <hr></hr>
          <div className="footer-legal">
            <div className="footer-logo-container">
              <Image src="/logo.png" alt="Vercel Logo" width={40} height={40}/>
            </div>
            <div>
              <Link href="#">Terms</Link>
              <Link href="#">PrivLinkcy</Link>
              <Link href="#">Site Map</Link>
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
          .footer-legal Link {
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
                    .footer-legal Link {
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
