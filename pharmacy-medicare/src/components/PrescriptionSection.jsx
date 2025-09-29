import React from 'react';

import clockIcon from '../assets/images/clock.png';
import leftProduct from '../assets/images/left_product.png';
import rightProducts from '../assets/images/right_product.png';

const PrescriptionSection = () => {
    return (
        <div className="prescription-container">

            {/* Banner Section */}
            <section className="banner-section">
                <img src={leftProduct} alt="Product Dispenser" className="left-product-image" />
                <img src={rightProducts} alt="Pill Box and Bottles" className="right-product-image" />

                <div className="container banner-content">
                    <h1 className="banner-heading">
                        <span>Doctor's Prescription for</span> <br />
                        <span className="refill-line">
                            a Timely
                            <img src={clockIcon} alt="Clock Icon" className="clock-icon" />
                            Refill
                        </span>
                    </h1>
                    <p className="banner-paragraph">
                        Upload your doctor's prescription to ensure your medications are
                        refilled accurately and delivered on time.
                    </p>
                    <button className="upload-button">
                        Upload Prescription
                    </button>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="how-it-works-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="how-it-works-heading">How it works</h2>
                            <p className="how-it-works-subheading">
                                The key benefit of using the MediCare loyalty card is the seamless experience it provides.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        {/* Column 1 */}
                        <div className="col-md-4">
                            <div className="prescription-card">
                                <div className="card-top-content">
                                    <div className="card-number">1</div>
                                    <h3 className="card-title">Take a Clear Photo</h3>
                                </div>
                                <p className="card-description">
                                    Capture a clear image of your doctor's prescription with all details visible.
                                </p>
                            </div>
                        </div>
                        {/* Column 2 */}
                        <div className="col-md-4">
                            <div className="prescription-card">
                                <div className="card-top-content">
                                    <div className="card-number">2</div>
                                    <h3 className="card-title">Upload the Image</h3>
                                </div>
                                <p className="card-description">
                                    Select the photo from your device and upload it securely to our platform.
                                </p>
                            </div>
                        </div>
                        {/* Column 3 */}
                        <div className="col-md-4">
                            <div className="prescription-card">
                                <div className="card-top-content">
                                    <div className="card-number">3</div>
                                    <h3 className="card-title">Confirm & Submit</h3>
                                </div>
                                <p className="card-description">
                                    Review the uploaded image for accuracy, then submit it for processing and timely refill.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrescriptionSection;