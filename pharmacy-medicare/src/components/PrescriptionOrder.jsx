import React from 'react';
import { Link } from 'react-router-dom';

import uploadIcon from '../assets/images/upload-icon.png';
import consultIcon from '../assets/images/consult-icon.png';
import doctorImage from '../assets/images/doctor.jpeg';

const PrescriptionOrder = () => {
    return (
        <div className="custom-container-wrapper">
            <div className="custom-container container-fluid">
                {/* Left Box - Upload Prescription */}
                <div className="custom-card custom-card-left col-12 col-md-5">
                    <div className="upload-box-wrapper">
                        <div className="upload-box-border">
                            <h2 className="upload-prescription-text">Upload Prescription</h2>
                        </div>
                    </div>
                    <div className="button-section">
                        <Link to="/prescription" className="order-btn custom-order-btn">
                            <img src={uploadIcon} alt="Upload Icon" className="button-icon" />
                            Order via Prescription
                        </Link>
                        <Link to="/how-to-order" className="how-to-order-link">How to Order?</Link>
                    </div>
                </div>

                {/* Right Box - Don't have a Prescription */}
                <div className="custom-card custom-card-right col-12 col-md-5">
                    <div className="right-card-content">
                        <h2 className="no-prescription-title">Don't have a Prescription?</h2>
                        <p className="upload-info">Upload only .jpg, .png or .pdf files <br /> Size limit is 15 MB</p>
                        <Link to="/consultation-page" className="start-consultation-btn">
                            <img src={consultIcon} alt="Consult Icon" className="button-icon" />
                            Start Consultations
                        </Link>
                    </div>
                    <div className="doctor-image-wrapper">
                        <img
                            src={doctorImage}
                            alt="Doctor"
                            className="doctor-image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrescriptionOrder;