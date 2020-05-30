import { useEffect, useState } from 'react'
import { Client } from '../prismic-configuration'
import Prismic from "prismic-javascript";
import Navbar from './Navbar'
import { useRouter } from 'next/router'

const Layout = ({ children }) => {
    const [navItems, setNavItems] = useState()
    const router = useRouter()

    useEffect(() => {
        if(!navItems){
            const client = Client()
            client
            .query(Prismic.Predicates.at("document.tags", ["nav-link"]))
            .then(res => {
                let items = res.results.slice().sort((a, b) => new Date(b.first_publication_date) - new Date(a.first_publication_date))
                setNavItems(items.reverse())
            })
            .catch(err => console.log(err))
        }
    }, [])

    if(!navItems) return <p>Loading...</p>

    console.log(navItems)
    return (
        <main className='wrapper'> 
            <Navbar navItems={navItems} query={router.query.page}/>
            {children}
        </main>
    )
}

export default Layout
