import Navbar from './Navbar'
import Footer from './Footer'
import { useRouter } from 'next/router'
import PAGES from '../pages.json'
import SERVICES from '../services.json'

const Layout = ({ children }) => {
    const router = useRouter()

    const desktopNavPages = PAGES.filter(page => page.desktopNav !== false)
    const mobileNavPages = PAGES.filter(page => page.mobileNav !== false)
    const footerNavPages = PAGES.filter(page => page.footerNav !== false)
    const services = SERVICES

    return (
        <main className='wrapper'> 
            <Navbar 
                query={router.query.page} 
                desktopNavPages={desktopNavPages} 
                mobileNavPages={mobileNavPages} 
                services={services}
            />
            {children}
            <Footer 
                footerNavPages={footerNavPages}
                services={services}
            />
        </main>
    )
}

export default Layout
