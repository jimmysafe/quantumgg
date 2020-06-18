import Link from 'next/link'

const SubNav = ({ services }) => {
    return (
        <div className='service-sub-nav'>
            <div className='nav-items-container flex-1'>
                <ul className="flex content-center items-center">
                    {services.map(item => (
                        <Link as={`/${item.uid}`} href="/[page]" key={item.uid}>
                            <li>{item.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SubNav
