import styles from '../styles/Footer.module.css'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/logo.png" alt="Vercel Logo" width={20} height={20}/>
          </span>
        </a>
      </footer>
    )
}

export default Footer
