import { Client } from '../prismic-configuration'
import { RichText } from 'prismic-reactjs';

export default function Page({ page, err }) {
    console.log(page)
    console.log(err)
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

