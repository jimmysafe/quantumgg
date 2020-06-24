
import { useState } from 'react'
import { useFormik } from 'formik'
import Button from './elements/Button';
import axios from 'axios'
import { siteUrl } from '../config'

const ContactForm = () => {
    const [submitting, setSubmitting] = useState(false)
    const [showSuccessMessage, setShowSuccessMessage]= useState(false)
    const [showErrorMessage, setShowErrorMessage]= useState(false)

    console.log(siteUrl)
    console.log(process.env.NODE_ENV)

    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',   
          company: '',
          phone: '',
          message: ''
        },
        onSubmit: async(values) => {
            setSubmitting(true)
            let res = await axios.post(`${siteUrl}/api/mail`, { values })
            console.log(res.data)
            if(res.data.success) {
                setSubmitting(false)
                formik.handleReset()
                setShowSuccessMessage(true)
                setShowErrorMessage(false)
            } else {
                setSubmitting(false)
                setShowSuccessMessage(false)
                setShowErrorMessage(true)
            }
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
                                required
                                placeholder="Your Name" 
                                onChange={formik.handleChange} 
                                value={formik.values.name}
                            />
                        </div>
                        <div className="input">
                            <span>Email</span>
                            <input 
                                type="email" 
                                required
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
                                required
                                placeholder="Contact Number" 
                                onChange={formik.handleChange} 
                                value={formik.values.phone}
                            />
                        </div>
                    </div>
                    <div className="message">
                        <span>Message</span>
                        <textarea 
                            required
                            name="message" 
                            id="message" 
                            cols="30" 
                            rows="10"
                            placeholder="Message" 
                            onChange={formik.handleChange} 
                            value={formik.values.message}
                        />
                    </div>
                    

                    {showErrorMessage || showSuccessMessage &&
                        <div className="notification">
                            {showSuccessMessage && 
                                <div className="notification-message success">
                                    <p>Message Sent! We will get back in touch asap!</p>
                                </div>
                            }
                            {showErrorMessage &&
                                <div className="notification-message error">
                                    <p>Oops! Something went wrong</p>
                                </div>
                            }
                        </div>
                    }
                    <div className="flex content-center items-center m-t-md">
                        <Button dark pxl disabled={submitting}>{submitting ? 'Sending..' : 'Send'}</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm
