import Button from '../elements/Button'
import Link from 'next/link'

const FooterCard = ({ slice }) => {
    return (
        <div className="footer-top">
            <div className="footer-contact-card">
                <h3>{slice.primary.card_title[0].text}</h3>
                <p>{slice.primary.card_text[0].text}</p>
                <Link as={`/${slice.primary.card_link.uid}`} href="/[page]">
                    <a>
                        <Button dark>{slice.primary.button_link_text[0].text}</Button>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default FooterCard
