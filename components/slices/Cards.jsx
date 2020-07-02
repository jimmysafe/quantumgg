import Link from 'next/link'
import Button from '../elements/Button'

const Cards = ({ slice }) => {
    return (
        <div className="section-cards">
            <div className="container flex column">
                {slice.primary.section_title[0] &&
                    <div className="title">
                        <h3>{slice.primary.section_title[0].text}</h3>
                    </div>
                }
                <div className="cards-container">
                    {slice.items && slice.items.map((item, i) => (
                        <Card 
                            key={i}
                            icon={item.card_icon}
                            title={item.card_title[0] && item.card_title[0].text}
                            text={item.card_text[0] && item.card_text[0].text}
                            link={item.card_link && item.card_link.uid}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

const Card = ({ icon, title, text, link }) => {
    return (
        <div className="card">
            {icon &&
                <div className="card-icon" style={{ backgroundImage: `url('${icon.url}')` }}>
                </div>
            }
            {title &&
                <div className="card-title">
                    <h4>{title}</h4>
                </div>
            }
            {text &&
                <div className="card-text">
                    <p>{text}</p>
                </div>
            }
            {link &&
                <Link as={`/${link}`} href="/[page]" >
                    <a>
                        <Button>Learn More</Button>
                    </a>
                </Link>
            }
        </div>
    )
}


export default Cards
