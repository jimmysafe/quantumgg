import { useEffect, useState } from 'react'
import { Client } from '../prismic-configuration'
import Prismic from "prismic-javascript";
import Navbar from './Navbar'

const Layout = ({ children }) => {
    const [navItems, setNavItems] = useState()

    useEffect(() => {
        if(!navItems){
            const client = Client()
            client
            .query(Prismic.Predicates.at("document.tags", ["nav-link"]))
            .then(res => setNavItems(res.results))
            .catch(err => console.log(err))
        }
    }, [])

    if(!navItems) return <p>Loading...</p>

    return (
        <main className='wrapper'> 
            <Navbar navItems={navItems}/>
            {children}
        </main>
    )
}

export default Layout
