import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import "./contact.css";

const ContactUsPage = () => {
    return (
        <div className="container">
            <div className="contact-us">
                {/* Background image */}
                <img src="images/night.jpg" alt="Contact Us Background" className="contact-us-background" />
                {/* Overlay to create semi-transparent effect */}
                <div className="overlay"></div>
                
                {/* Contact information */}
                <div className="contact-us-content">
                    <h1>Contact Us</h1>
                    <p>If you have any questions or inquiries, feel free to reach out to us:</p>
                    <ul>
                        <li>Email: info@hrmvisas.com</li>
                        <li>Phone: +91 97430-04400 <FontAwesomeIcon icon={faPhoneAlt} className="phone-icon" /></li> {/* Font Awesome phone icon */}
                         
                    </ul>
                    <p>Alternatively, you can use the form below to send us a message:</p>
                </div>
            </div>

            {/* Form */}
            <div className="form-background">
                <img src="images/contactus.jpg" alt="Form Background" className="bg-img" />
                <form className="fade-in-form">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label bold-white">Name:</label>
                        <input type="text" id="name" name="name" className="form-control bold-white" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label bold-white">Email:</label>
                        <input type="email" id="email" name="email" className="form-control bold-white" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label bold-white">Message:</label>
                        <textarea id="message" name="message" rows="5" className="form-control bold-white"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default ContactUsPage;
