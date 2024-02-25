import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './services.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const ServicesPage = () => {
    useEffect(() => {
        AOS.init({
            duration:800,
            once: true
        });
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4 services-heading">OUR SERVICES</h1>
            <div className="line" data-aos="fade-right"></div>

            <div>
                <div className="row card-body2">
                    <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="100">
                        <Link to="/tour-packages" className="card-link" style={{ textDecoration: 'none' }}>
                            <div className="card" id="visa">
                                <div className="card-body with-shadow">
                                    <h5 className="card-title">Visa</h5>
                                    <p className="card-text">Let us handle your visa processing hassle-free.</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="200">
                        <Link to="/air-tickets" className="card-link" style={{ textDecoration: 'none' }}>
                            <div className="card" id="air-tickets">
                                <div className="card-body with-shadow">
                                    <h5 className="card-title">Air Tickets</h5>
                                    <p className="card-text">Book your flight tickets with <br /> ease and convenience.</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="300">
                        <Link to="/travel-insurance" className="card-link" style={{ textDecoration: 'none' }}>
                            <div className="card" id="travel-insurance">
                                <div className="card-body with-shadow">
                                    <h5 className="card-title">Travel Insurance</h5>
                                    <p className="card-text">Protect your journey with our comprehensive travel insurance.</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="400">
                        <Link to="/forex" className="card-link" style={{ textDecoration: 'none' }}>
                            <div className="card" id="forex">
                                <div className="card-body with-shadow">
                                    <h5 className="card-title">Forex (Currency and Global Card)</h5>
                                    <p className="card-text">Exchange currency and get global cards for your travel.</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="500">
                        <Link to="/cabs-and-spare-driver" className="card-link" style={{ textDecoration: 'none' }}>
                            <div className="card" id="cabs-and-spare-driver" >
                                <div className="card-body with-shadow">
                                    <h5 className="card-title">Cabs and Spare Driver</h5>
                                    <p className="card-text">Hire cabs or drivers for your <br />convenience.</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="600">
                        <Link to="/individual-corporate-day-outing" className="card-link" style={{ textDecoration: 'none' }}>
                            <div className="card" id="individual-corporate-day-outing">
                                <div className="card-body with-shadow">
                                    <h5 className="card-title">Individual/Corporate Day Outing</h5>
                                    <p className="card-text">Plan your memorable day outing <br />
                                        with us today.</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="300">
                        <Link to="/hotel-resort-booking" className="card-link" style={{ textDecoration: 'none' }}>
                            <div className="card" id="hotel-resort-booking">
                                <div className="card-body with-shadow">
                                    <h5 className="card-title">Hotel/Resort Booking</h5>
                                    <p className="card-text">Find the perfect accommodation for your trip.</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServicesPage;
