import React from 'react';

// Import your brand logos
import astraZeneca from '../assets/images/OIP.webp';
import novartis from '../assets/images/novartis-png-logo-5.jpg';
import pfizer from '../assets/images/pfzer.jpeg';
import gsk from '../assets/images/gsk.jpg';
import merck from '../assets/images/merck-logo.png';
import medizon from '../assets/images/mz.png';

const FeaturedBrands = () => {
    return (
        <div className="featured-brands-section py-5">
            <div className="container-fluid">
                {/* Heading */}
                <h2 className="featured-heading mb-4">Featured Brands</h2>

                {/* Brands Row */}
                <div className="row justify-content-center g-4">
                    {/* Brand 1 */}
                    <div className="col-6 col-md-4 col-lg-2 text-center">
                        <div className="brand-circle mx-auto">
                            <img src={astraZeneca} alt="AstraZeneca" className="img-fluid" />
                        </div>
                        <p className="brand-name mt-2">AstraZeneca</p>
                    </div>

                    {/* Brand 2 */}
                    <div className="col-6 col-md-4 col-lg-2 text-center">
                        <div className="brand-circle mx-auto">
                            <img src={novartis} alt="Novartis" className="img-fluid" />
                        </div>
                        <p className="brand-name mt-2">Novartis</p>
                    </div>

                    {/* Brand 3 */}
                    <div className="col-6 col-md-4 col-lg-2 text-center">
                        <div className="brand-circle mx-auto">
                            <img src={pfizer} alt="Pfizer" className="img-fluid" />
                        </div>
                        <p className="brand-name mt-2">Pfizer</p>
                    </div>

                    {/* Brand 4 */}
                    <div className="col-6 col-md-4 col-lg-2 text-center">
                        <div className="brand-circle mx-auto">
                            <img src={gsk} alt="gsk" className="img-fluid" />
                        </div>
                        <p className="brand-name mt-2">gsk</p>
                    </div>

                    {/* Brand 5 */}
                    <div className="col-6 col-md-4 col-lg-2 text-center">
                        <div className="brand-circle mx-auto">
                            <img src={merck} alt="Merck" className="img-fluid" />
                        </div>
                        <p className="brand-name mt-2">Merck</p>
                    </div>

                    {/* Brand 6 */}
                    <div className="col-6 col-md-4 col-lg-2 text-center">
                        <div className="brand-circle mx-auto">
                            <img src={medizon} alt="MediZon" className="img-fluid" />
                        </div>
                        <p className="brand-name mt-2">MediZon</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedBrands;
