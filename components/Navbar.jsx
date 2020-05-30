import { useState } from 'react'
import Link from 'next/link'
import { linkResolver, hrefResolver } from '../prismic-configuration'

const Navbar = ({ navItems, query }) => {
    const [open, setOpen] = useState(false)

    const handleMobileNav = () => {
        setOpen(!open)
    }

    return (
        <nav>
            <div className="container flex content-between items-center" style={{ height: '87px', position: 'relative' }}>
                <div className="logo-container">
                    <img src="/images/logo.jpg" alt="Logo" width='200px'/>
                </div>
                <div className={`nav-items-container flex-1 ${open ? 'open' : ''}`}>
                    <ul className="flex content-end">
                        {navItems.map(item => (
                            <Link as={linkResolver(item)} href={hrefResolver(item)} key={item.id}>
                                <li className={`${query === item.uid ? 'underlined' : ''}`} onClick={() => handleMobileNav()}>
                                    {item.data.page_title[0].text}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
                <div className="menu-icon-container">
                    <img 
                        src={open ? '/images/x.svg' : '/images/menu.svg'} 
                        alt="Menu Handle"
                        onClick={() => handleMobileNav()}
                    />
                </div>    
            </div>
        </nav>
    )
}

export default Navbar
