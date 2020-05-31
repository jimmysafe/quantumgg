import Link from 'next/link'
import { linkResolver, hrefResolver } from '../prismic-configuration'

const Footer = ({ navItems, subNavItems }) => {

    return (
        <footer>
            <div className="footer-contact-card">
                <h3>Talk to an expert</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto reprehenderit eveniet omnis illo possimus, quod porro aspernatur quidem repudiandae eius, quos et deleniti, labore officia ducimus sunt a ratione quae!</p>
            </div>
            <div className="footer-container container">
                <div className="footer-main-nav flex-1">
                    <ul>
                        {navItems.map(item => (
                            <Link as={linkResolver(item)} href={hrefResolver(item)} key={item.id}>
                                <li className="footer-nav-link">{item.data.page_title[0].text}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
                <div className="footer-services-nav flex-1">
                    <ul className="text-center">
                        <li className="m-b-sm">Services</li>
                        {subNavItems.map(item => (
                            <Link as={linkResolver(item)} href={hrefResolver(item)} key={item.id}>
                                <li className="footer-nav-link">{item.data.page_title[0].text}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
                <div className="footer-company-info flex column flex-1">
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank">
                            <img src="/images/facebook.svg" alt="Facebook Quantum"/>
                        </a>
                    </div>
                    <div className="address">
                        <p>Melbourne, Les Buttes</p>
                        <p>Torteval, Guernsey, GY8 OLJ</p>
                    </div>
                    <div className="number">
                        <p>01481 230530</p>
                    </div>
                    <div className="email">
                        <p>support@quantum.gg</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer


