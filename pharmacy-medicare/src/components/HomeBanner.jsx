import React from 'react';
import { Link } from 'react-router-dom';
import { FaCloudUploadAlt, FaFileAlt } from 'react-icons/fa';

import BannerLadyImage from '../assets/images/banner_lady_image.png';
import DeliveryIcon from '../assets/images/delivery_icon.png';
import GenuineIcon from '../assets/images/genuine_icon.png';

const HomeBanner = () => {
    return (
        <section className="home-banner-section">
            <div className="container-fluid banner-container">
                {/* Pharmacy Text - Top Left (Letter by Letter Animation) */}
                <h1 className="banner-pharmacy-title">
                    {/* Split the word 'Pharmacy' into individual letters and wrap each in a span */}
                    {'Pharmacy'.split('').map((letter, index) => (
                        <span
                            key={index}
                            style={{
                                animationDelay: `${0.1 * index}s`, // Add 0.1s delay for each letter
                                display: 'inline-block'           // inline-block is required for transform to work
                            }}
                        >
                            {letter}
                        </span>
                    ))}
                </h1>

                <div className="row banner-content-row">
                    {/* Left Column: Text and Icons */}
                    <div className="col-12 col-lg-5 banner-left-col">
                        <p className="banner-description">
                            ONLINE MEDICINE DELIVERY IS THE PROCESS <br />
                            OF ORDERING MEDICATIONS THROUGH A <br />
                            WEBSITE OR APP AND HAVING THEM DELIVERED <br />
                            TO YOUR DOORSTEP.
                        </p>

                        <div className="d-flex align-items-center mt-4 banner-feature-group">
                            <div className="banner-feature-item me-4">
                                <img src={DeliveryIcon} alt="Delivery" className="banner-feature-icon" />
                                <span className="banner-feature-text">Delivery to your doorstep</span>
                            </div>
                            <div className="banner-feature-item">
                                <img src={GenuineIcon} alt="Genuine Medicines" className="banner-feature-icon" />
                                <span className="banner-feature-text">100% Genuine Medicines</span>
                            </div>
                        </div>
                    </div>

                    {/* Center Column: Lady Image */}
                    <div className="col-12 col-lg-2 d-flex justify-content-center align-items-end banner-center-col">
                        <img src={BannerLadyImage} alt="Delivery Lady" className="banner-lady-image" />
                    </div>

                    {/* Right Column: Upload Prescription */}
                    <div className="col-12 col-lg-5 banner-right-col">
                        <div className="upload-prescription-card">
                            <div className="upload-header">
                                <span className="upload-text">Upload prescription</span>
                                <FaFileAlt className="upload-icon-main" />
                            </div>
                            <div className="upload-area">
                                <FaCloudUploadAlt className="upload-cloud-icon" />
                            </div>
                            <Link to="/prescription" className="order-prescription-btn">
                                Order via Prescription
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeBanner;
