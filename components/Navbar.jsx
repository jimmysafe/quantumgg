import React from 'react'
import Link from 'next/link'
import { linkResolver, hrefResolver } from '../prismic-configuration'

const Navbar = ({ navItems }) => {
    return (
        <nav>
            <div className="logo-container">

            </div>
            <div className="nav-items-container">
                <ul>
                    {navItems.map(item => (
                        <Link as={linkResolver(item)} href={hrefResolver(item)} key={item.id}>
                            <li>{item.data.page_title[0].text}</li>
                        </Link>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
