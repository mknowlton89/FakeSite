import Image from 'next/image'

const Footer = () => {
    return (
        <footer className='footer'>
          <div className="footer-quick-link-container">
            <div className="footer-quick-links">
              <h4>FakeSite</h4>
              <a href="#">About Us</a>
              <a href="#">Press</a>
              <a href="#">Policies</a>
              <a href="#">Help</a>
            </div>
            <div className="footer-quick-links">
              <h4>Account</h4>
              <a href="#">Edit Profile</a>
              <a href="#">Friends</a>
              <a href="#">Social</a>
              <a href="#">Delete Profile</a>
            </div>
          </div>

          <hr></hr>
          <div className="footer-legal">
            <div>
              <Image src="/logo.png" alt="Vercel Logo" width={40} height={40}/>
            </div>
            <div>
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
              <a href="#">Site Map</a>
            </div>
          </div>
        <style jsx>{`

          .footer {
            width: 100%;
            height: 100px;
            display: flex;
            flex-direction: column;
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
        }`}</style>
      </footer>
    )
}

export default Footer
