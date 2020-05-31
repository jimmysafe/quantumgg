import { Client } from '../../prismic-configuration'
import Prismic from "prismic-javascript";

const Service = ({ service }) => {
    console.log(service)
    return (
        <div>
            hi service
        </div>
    )
}

Service.getInitialProps = async() => {
    const client = Client()
    const service = await client.query(Prismic.Predicates.at("document.tags", ["service"]))
    return {
        service
    }
}

export default Service
