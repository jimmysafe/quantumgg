
import { RichText } from 'prismic-reactjs';


const ServiceCards = ({ slice: { items } }) => {
    return (
        <div className="section-service-cards">
            <div className="container">
                {items.map((item, i) => (
                    <Card 
                        key={i} 
                        title={item.card_title[0] && item.card_title[0].text}
                        text={item.card_text[0] && item.card_text}
                    />
                ))}
            </div>
        </div>
    )
}

const Card = ({ title, text }) => {
    return (
        <div className="service-card">
            <div className="icon">
                <img src="/images/check.svg" alt="check"/>
            </div>
            <div className="title">
                <h4>{title}</h4>
            </div>
            <div className="text">
                <RichText render={text} />
            </div>
            
        </div>
    )
}

export default ServiceCards

