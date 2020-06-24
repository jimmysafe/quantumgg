import { Client } from '../prismic-configuration'
import Slice from '../components/Slice';
import Seo from '../components/Seo';

export default function Page({ page, err }) {
    if(err) console.log(err)
    if(!page || err) return (
        <div className="error-section">
            <h3 className="m-b-md">Oops..</h3>
            <p>An error occurred</p>
            <p>please reload the page</p>
        </div>
    )
    return (
        <>
        <Seo page={page} />
        <div className="page-content">
            {page.data.body.map((slice, i) => (
                <Slice key={i} slice={slice} page={page}/>
            ))}
        </div>
        </>
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

