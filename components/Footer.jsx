import Link from 'next/link'

const Footer = ({ footerNavPages, services }) => {

    return (
        <footer>
            <div className="footer-container container">
                <div className="footer-main-nav flex-1">
                    <ul>
                        {footerNavPages.map(item => (
                            <Link as={`/${item.uid}`} href="/[page]" key={item.uid}>
                                <li className="footer-nav-link">{item.name}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
                <div className="footer-services-nav flex-1">
                    <ul className="text-center">
                        <li className="m-b-md" style={{ marginTop: '0.6rem' }}>Services</li>
                        {services.map(item => (
                            <Link as={`/${item.uid}`} href="/[page]" key={item.uid}>
                                <li className="footer-nav-link">{item.name}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
                <div className="footer-company-info flex column flex-1">
                    <div className="social-icons">
                        <a href="https://www.facebook.com/Quantum-Cabling-Installations-393831187362328/" target="_blank">
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
                    <div className="logos">
                        <img src="/images/f-hellermann.svg" alt="hallermann"/>
                        <img src="/images/f-bicsi.svg" alt="bicsi"/>
                    </div>
                    <div className="other-links">
                        <ul>
                            <Link as='sitemap' href="/[page]">
                                <li>Sitemap</li>
                            </Link>
                            <Link as='/privacy-policy' href="/[page]">
                                <li>Privacy Policy</li>
                            </Link>
                            <Link as='terms-and-conditions' href="/[page]">
                                <li>Terms & Conditions</li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                        <p>&copy; {`${new Date(Date.now()).getFullYear()}`}, Quantum Cabling Installations Ltd Designed & Built by <a href="http://www.picklebeestudios.com/en/" target="_blank">Picklebee Studios</a></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer


