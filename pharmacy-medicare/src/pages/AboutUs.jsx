import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import pharmacyImg from '../assets/images/pharmacy.png';
import medicalResearcherImg from '../assets/images/medical-researcher.png';
import medicareCardImg from '../assets/images/medicare-card.png';



const AboutUs = () => {
    return (
        <>
            <Navbar />

            <div className="about-us-container container">
                <h1 className="about-us-heading text-center">About MediCare</h1>

                {/* Section 1: Image Left, Content Right */}
                <div className="row about-us-section align-items-center mb-5">
                    <div className="col-lg-6 col-md-12 text-center mb-4 mb-lg-0">
                        <img src={pharmacyImg} alt="Pharmacists" className="img-fluid about-us-image" />
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="about-us-content-box light-green-bg">
                            <p className="about-us-text">
                                Medicare is a wholesale, retail, and dispensing healthcare platform established to distribute and retail quality medicines and imported drugs, beauty, lifestyle, and fitness ranges. We also provide well-trained professionals with consultation and counseling to customers.
                            </p>
                            <p className="about-us-text">
                                With more than 30 years of experience, we stand firmly committed to building a sustainable future and increasing access to lifesaving across in-quality, affordable, traceable medicines and pharmaceutical care nutritions.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 2: Content Left, Image Right */}
                <div className="row about-us-section align-items-center mb-5">
                    <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                        <div className="about-us-content-box light-green-bg">
                            <h2 className="about-us-subheading">History</h2>
                            <p className="about-us-text">
                                We pride ourselves as Nigeria’s foremost and largest retail chain pharmacy – a position we have maintained since the start of our operations on the 1st of November 1989. We opened the doors of our first store in Victoria Island, Lagos as Medicines Box. With an unyielding dedication to our core purpose and our customers. Today at MediCare Pharmacy, our Pharmacy spans over time in terms of merchandise and expansion. This led to the retail chain concept, which was new in the industry. Many more outlets were to follow nationwide and are continually growing. But also…
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 text-center">
                        <img src={medicalResearcherImg} alt="Medical Researcher" className="img-fluid about-us-image" />
                    </div>
                </div>

                {/* Section 3: Image Left, Content Right */}
                <div className="row about-us-section align-items-center mb-5">
                    <div className="col-lg-6 col-md-12 text-center mb-4 mb-lg-0">
                        <img src={medicareCardImg} alt="Medicare Card" className="img-fluid about-us-image" />
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="about-us-content-box light-green-bg">
                            <h2 className="about-us-subheading">Why Medicare</h2>
                            <p className="about-us-text">
                                Many people on Medicare live with health problems, including multiple chronic conditions and limitations in their activities of daily living, and many beneficiaries like an modest income. In 2016, nearly one-third (30%) had a functional impairment, over one-quarter (28%) reported fair or poor health, and more than one in five (22%) had five or more chronic conditions (Figure 1). More than one in ten beneficiaries (13%) were under age 65 and had a permanent disability, and 12 percent were aged 85 and over. Nearly two million beneficiaries (7%) lived in a long-term care facility.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default AboutUs;