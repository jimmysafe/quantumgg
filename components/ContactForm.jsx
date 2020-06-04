
import { useState } from 'react'
import { useFormik } from 'formik'
import Button from './elements/Button';

const ContactForm = () => {
    const [submitting, setSubmitting] = useState(false)

    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',   
          company: '',
          phone: '',
          message: ''
        },
        onSubmit: async(values) => {
            const { email, password } = values
            console.log(values)
            // setSubmitting(true)
            // await loginUserToShopify(email, password)
        },
      });

    return (
        <div className="section-contact-form">
            <div className="container">
                <form onSubmit={formik.handleSubmit}>
                    <div className="title">
                        <h2>We would love to hear from you</h2>
                        <h5>Complete your details and an expert will be in touch</h5>
                    </div>
                    <div className="row">
                        <div className="input">
                            <span>Name</span>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                placeholder="Your Name" 
                                onChange={formik.handleChange} 
                                value={formik.values.name}
                            />
                        </div>
                        <div className="input">
                            <span>Email</span>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                placeholder="Your Email" 
                                onChange={formik.handleChange} 
                                value={formik.values.email}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input">
                            <span>Company</span>
                            <input 
                                type="text" 
                                id="company" 
                                name="company" 
                                placeholder="Company Name" 
                                onChange={formik.handleChange} 
                                value={formik.values.company}
                            />
                        </div>
                        <div className="input">
                            <span>Phone</span>
                            <input 
                                type="text" 
                                id="phone" 
                                name="phone" 
                                placeholder="Contact Number" 
                                onChange={formik.handleChange} 
                                value={formik.values.phone}
                            />
                        </div>
                    </div>
                    <div className="message">
                        <span>Message</span>
                        <textarea 
                            name="message" 
                            id="message" 
                            cols="30" 
                            rows="10"
                            placeholder="Message" 
                            onChange={formik.handleChange} 
                            value={formik.values.message}
                        />
                    </div>
                    <div className="flex content-center items-center m-t-md">
                        <Button dark pxl>Send</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm
