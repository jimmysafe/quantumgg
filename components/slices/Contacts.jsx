
import { RichText } from 'prismic-reactjs';

const Contacts = ({ slice }) => {
    return (
        <div className="section-contacts">
            <div className="container">
                <div className="contacts-container">
                    <Phone text={slice.primary.phone_contacts}/>
                    <Email email={slice.primary.email_address}/>
                    <Location text={slice.primary.office_address}/>
                </div>
            </div>
        </div>
    )
}

const Phone = ({ text }) => {
    return (
        <div className="card left">
            <div className="icon">
                <img src="/images/phone.svg" alt="call us"/>
            </div>
            <div className="title">
                <h3>Call us</h3>
            </div>
            <div className="text">
                <RichText render={text} />
            </div>
        </div>
    )
}

const Email = ({ email }) => {
    return (
        <div className="card center">
            <div className="icon">
                <img src="/images/email.svg" alt="email us"/>
            </div>
            <div className="title">
                <h3>Email us</h3>
            </div>
            <div className="text">
                <RichText render={email} />
            </div>
        </div>
    )
}

const Location = ({ text }) => {
    return (
        <div className="card right">
            <div className="icon">
                <img src="/images/location.svg" alt="find us"/>
            </div>
            <div className="title">
                <h3>Find us</h3>
            </div>
            <div className="text">
                <RichText render={text} />
            </div>
        </div>
    )
}

export default Contacts
