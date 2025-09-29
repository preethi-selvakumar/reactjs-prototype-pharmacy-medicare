import React from 'react';

import playIcon from '../assets/images/play-icon.png';
import doctorImage from '../assets/images/doctor-consultation.png';
import regularCheckupIcon from '../assets/images/regular-checkup-icon.png';
import happyPatientsIcon from '../assets/images/happy-patients-icon.png';

const DoctorConsultationSection = () => {
    return (
        <section className="doctor-consultation-section">
            <div className="container">
                <div className="row align-items-center">
                    {/* Left Column: Text Content and Buttons */}
                    <div className="col-lg-6 col-md-12 text-content-col">
                        <h1 className="main-heading">
                            Doctor <br />
                            <span className="consultation-highlight">Consultation.</span>
                        </h1>
                        <p className="description-text">
                            Connect instantly with a 24x7 specialist or choose to <br />
                            video visit a particular doctor.
                        </p>
                        <div className="buttons-group">
                            <button className="book-appointment-btn">Book Appointment</button>
                            <a href="#" className="customer-review-link">
                                <img src={playIcon} alt="Play Icon" className="play-icon" />
                                Customer Review
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Doctor Image and Background Elements */}
                    <div className="col-lg-6 col-md-12 image-content-col">
                        <div className="doctor-image-container">
                            {/* CSS-generated background elements */}
                            <div className="green-circle-bg"></div>
                            <div className="curve-line-bg"></div>

                            {/* Main Doctor Image */}
                            <img src={doctorImage} alt="Doctor" className="doctor-main-image" />

                            {/* Floating Popups */}
                            <div className="popup-card regular-checkup-popup">
                                <img src={regularCheckupIcon} alt="Regular Checkup Icon" className="popup-icon" />
                                <div className="popup-text-group">
                                    <span className="popup-text">Regular <br />Checkup</span>
                                </div>
                            </div>

                            <div className="popup-card happy-patients-popup">
                                <img src={happyPatientsIcon} alt="Happy Patients Icon" className="popup-icon" />
                                <div className="popup-text-group">
                                    <span className="popup-number">84k+</span>
                                    <span className="popup-text">Happy Patients</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DoctorConsultationSection;