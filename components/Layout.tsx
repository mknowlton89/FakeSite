import TopNav from './TopNav.tsx'
import Footer from './Footer'

export const Layout = ({children}) => {
    return (
        <div>
            <TopNav />
            {children}
            <Footer />
        </div>
    )
}
