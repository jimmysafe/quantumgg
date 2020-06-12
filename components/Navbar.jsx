import { useState, useEffect } from 'react'
import Link from 'next/link'
import { linkResolver, hrefResolver } from '../prismic-configuration'
import SubNav from './SubNav'
import MobileNav from './MobileNav'

const Navbar = ({ navItems, query, subNavItems }) => {
    const [subNavOpen, setSubNavOpen] = useState(false)

    useEffect(() => setSubNavOpen(false), [query])

    console.log(open)

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
                        {navItems.map(item => {
                            if(item.uid !== 'services'){
                                return (
                                    <Link as={linkResolver(item)} href={hrefResolver(item)} key={item.id}>
                                        <li className={`${query === item.uid ? 'underlined' : ''} ${item.uid === 'contact-us' ? 'button' : ''}`} >
                                            {item.data.page_title[0].text}
                                        </li>
                                    </Link>
                                )
                            } else {
                                return (
                                    <li onClick={() => setSubNavOpen(!subNavOpen)} key={item.id}>
                                        {item.data.page_title[0].text}
                                        <img src="/images/down-dark.svg" alt="" style={{ width: "17px", marginLeft: '4px' }}/>
                                    </li>
                                )
                            }
                        }
                        )}
                    </ul>
                </div>
            </div>
            {subNavOpen && <SubNav subNavItems={subNavItems}/> }
        <MobileNav navItems={navItems} subNavItems={subNavItems} query={query}/>
        </nav>
        </>
    )
}

export default Navbar


