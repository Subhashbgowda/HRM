import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faPen, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
    return (
        <div>
            <div className='container'>
                <div className="jumbotron">
                    <h1 className="display-4">Welcome to HRM VISAS</h1>
                    <p className="lead">Making Your Travel Dreams a Reality</p>
                    <hr className="my-4" />
                    <p>Let us handle your visa applications and travel arrangements with expertise and care.</p>
                    <p className="lead">
                        <Link to="/services" className="btn btn-primary btn-lg" role="button">Explore Our Services</Link>
                    </p>
                </div>

                <div className="row">
                    <div className="col-md-6 fade-up">
                        <h2>About Us</h2>
                        <p>HRM VISAS is a premier visa and travel agency dedicated to providing seamless travel experiences to our clients. With years of experience and a commitment to excellence, we ensure that your travel plans are executed flawlessly.</p>
                    </div>
                    <div className="col-md-6">
                        <img src="./images/1.jpg" alt="image1" className="img-fluid rounded fade-up" />
                    </div>
                </div>

                {/* New content after the "About Us" section */}
                <div className="container">
                    <div className="row fade-up">
                        <div className="col-md-12"style={{ marginTop: '50px' }}>
                             
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="card small-container">
                                            <h3><FontAwesomeIcon icon={faGlobe} className="vintage-icon" /> Explore Visa Options with Confidence</h3>
                                            <p className="content-shape">With 25 years of global visa processing experience, we specialize in facilitating visa applications for multiple countries. Explore our comprehensive range of visas to find the one that suits your needs.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card small-container">
                                            <h3><FontAwesomeIcon icon={faPen} className="vintage-icon" /> Effortless Application Process</h3>
                                            <p className="content-shape">Apply with ease by submitting your documents through our user-friendly platform. Our dedicated team ensures a smooth application process, guiding you every step of the way. Trust us to handle the complexities, so you can focus on your travel plans.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card small-container">
                                            <h3><FontAwesomeIcon icon={faPaperPlane} className="vintage-icon" /> Apply Now and Secure Your Visa</h3>
                                            <p className="content-shape">Ready to embark on your journey? Apply now with us, and rest assured, you'll receive your visa promptly. Our expert team is here to assist you throughout the application process. Apply confidently, travel seamlessly!</p>
                                        </div>
                                    </div>
                                </div>
                             
                        </div>
                    </div>
                </div>
 
            </div>
            <div className="row contact-us-section fade-up">
                <div className="col-md-12">
                    <h2>Contact Us</h2>
                    <p>If you have any questions or inquiries, feel free to reach out to us:</p>
                    <p><a href='tel:+919743004400'>Phone: +91 97430-04400</a></p>
                    <p><a href='mailto:admin@hrmvisas.com'>Email: admin@hrmvisas.com</a></p>
                </div>
            </div>
        </div>

    );
}

export default HomePage;
