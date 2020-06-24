
import { RichText } from 'prismic-reactjs';

const MiniCards = ({ slice }) => {
    return (
        <div className="section-mini-cards">
            <div className="container">
                {slice.primary.title[0] &&
                    <div className="title">
                        <RichText render={slice.primary.title}/>
                    </div>
                }
                <div className="mini-cards-container">
                    {slice.items.map((item, i) => (
                        <Card 
                            key={i}
                            icon={item.icon}
                            text={item.content}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

const Card = ({ icon, text }) => {
    return (
        <div className="mini-card">
            <div className="icon">
                <img src={icon.url} alt={icon.alt}/>
            </div>
            <div className="text">
                <RichText render={text} />
            </div>
        </div>
    )
}

export default MiniCards
