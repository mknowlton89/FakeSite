import TopNav from './TopNav.tsx'
import Footer from './Footer'

export const Layout = ({children}) => {
    return (
        <div className="layout">
            <TopNav />
            {children}
            <Footer />
            <style jsx>{`
            .layout {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
            `}</style>
        </div>
    )
}
