import { useState, useEffect, Fragment } from 'react'
import Link from 'next/link'

const MobileNav = ({ query, mobileNavPages, services }) => {
    const [open, setOpen] = useState(false)
    const [subNavOpen, setSubNavOpen] = useState(false)
    
    useEffect(() => {
        const body = document.getElementsByTagName('body')[0]
        if(open) body.style.overflow = 'hidden'
        else body.style.overflow = 'visible'
    }, [open])

    useEffect(() => {
        setOpen(false)
    },[query])

    
    return (
        <div className="mobile-nav-container">
            <div className="menu-icon-container">
                <img 
                    src={open ? '/images/x.svg' : '/images/menu.svg'} 
                    alt="Menu Handle"
                    onClick={() => setOpen(!open)}
                />
            </div>
            
            
                <div className={`mobile-nav ${open ? 'open' : ' '}`}>
                    <ul className="flex content-end items-center">
                        {mobileNavPages.map(item => {
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
                                    <Fragment key={item.uid}>
                                    <li onClick={() => setSubNavOpen(!subNavOpen)}>
                                        {item.name}
                                        <img src="/images/down-light.svg" alt="" style={{ width: "17px", marginLeft: '4px' }}/>
                                    </li>
                                    <ul className={`mobile-sub-nav flex content-center items-center ${subNavOpen ? 'open' : ' '}`}>
                                        {services.map((item, i) => (
                                            <Link as={`/${item.uid}`} href="/[page]" key={item.uid}>
                                                <li>{item.name}</li>
                                            </Link>
                                        ))}
                                    </ul>
                                    </Fragment>
                                )
                            }
                        }
                        )}
                    </ul>
                </div>
            
            

        </div>
    )
}

export default MobileNav
