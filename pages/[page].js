import { Client } from '../prismic-configuration'
import { RichText } from 'prismic-reactjs';

export default function Page({ page, err }) {
    if(page) console.log(page)
    if(err) console.log(err)
    if(!page || err) return <p>An error occurred..</p>
    return (
        <div>HI PAGE!</div>
    )
}

Page.getInitialProps = async({ query }) => {
    try {
        const page = await Client().getByUID("pa", query.page)
        return { page }
    } catch(err) {
        return { err }
    }
}

