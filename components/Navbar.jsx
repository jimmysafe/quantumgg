import { useState, useEffect } from 'react'
import Link from 'next/link'
import SubNav from './SubNav'
import MobileNav from './MobileNav'


const Navbar = ({ query, desktopNavPages, mobileNavPages, services }) => {
    const [subNavOpen, setSubNavOpen] = useState(false)

    useEffect(() => setSubNavOpen(false), [query])

    return (
        <>
        <nav>
            <div className="container flex content-between items-center">
                <div className="logo-container">
                    <Link as={'/home'} href={'/[page]'}>
                        <a>
                            <img src="/images/logo.jpg" alt="Logo" width='200px'/>
                        </a>
                    </Link>
                </div>
                <div className='nav-items-container flex-1'>
                    <ul className="flex content-end items-center">
                        {desktopNavPages.map(item => {
                            if(item.uid !== 'services'){
                                return (
                                    <Link as={`/${item.uid}`} href="/[page]" key={item.uid}>
                                        <li className={`${query === item.uid ? 'underlined' : ''} ${item.uid === 'contact-us' ? 'button' : ''}`} >
                                            {item.name}
                                        </li>
                                    </Link>
                                )
                            } else {
                                return (
                                    <li onClick={() => setSubNavOpen(!subNavOpen)} key={item.uid}>
                                        {item.name}
                                        <img src="/images/down-dark.svg" alt="" style={{ width: "17px", marginLeft: '4px' }}/>
                                    </li>
                                )
                            }
                        }
                        )}
                    </ul>
                </div>
            </div>
            {subNavOpen && <SubNav services={services}/> }
            <MobileNav mobileNavPages={mobileNavPages} services={services} query={query}/>
        </nav>
        </>
    )
}

export default Navbar


