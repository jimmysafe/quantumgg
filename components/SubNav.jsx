import Link from 'next/link'
import { linkResolver, hrefResolver } from '../prismic-configuration'

const SubNav = ({ subNavItems, setSubNavOpen }) => {
    return (
        <div className='service-sub-nav' onMouseLeave={() => setSubNavOpen(false)}>
            <div className='nav-items-container flex-1'>
                <ul className="flex content-center items-center">
                    {subNavItems.map(item => (
                        <Link as={linkResolver(item)} href={hrefResolver(item)} key={item.id}>
                            <li>{item.data.page_title[0].text}</li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SubNav
