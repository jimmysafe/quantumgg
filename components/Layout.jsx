import { useEffect, useState } from 'react'
import { Client } from '../prismic-configuration'
import Prismic from "prismic-javascript";
import Navbar from './Navbar'
import Footer from './Footer'
import { useRouter } from 'next/router'

const Layout = ({ children }) => {
    const [navItems, setNavItems] = useState()
    const [subNavItems, setSubNavItems] = useState()
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

    useEffect(() => {
        if(!subNavItems){
            const client = Client()
            client
            .query(Prismic.Predicates.at("document.tags", ["service"]))
            .then(res => {
                let items = res.results.slice().sort((a, b) => new Date(b.first_publication_date) - new Date(a.first_publication_date))
                setSubNavItems(items.reverse())
            })
            .catch(err => console.log(err))
        }
    }, [])

    if(!navItems || !subNavItems) return <p>Loading...</p>

    return (
        <main className='wrapper'> 
            <Navbar navItems={navItems} subNavItems={subNavItems} query={router.query.page}/>
            {children}
            <Footer navItems={navItems} subNavItems={subNavItems} />
        </main>
    )
}

export default Layout
