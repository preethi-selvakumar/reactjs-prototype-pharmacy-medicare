import React from 'react';

const ProductFeatures = () => {
    return (
        <div className="custom-features-container">
            <div className="container">
                <div className="row custom-row-spacing">

                    {/* Feature 1: Fast Delivery */}
                    <div className="col-12 col-md-3 custom-feature-col">
                        <h4 className="custom-feature-title">Fast Delivery</h4>
                        <p className="custom-feature-text">We'll deliver your order within two hours maximum.</p>
                    </div>

                    {/* Feature 2: Easy Returns */}
                    <div className="col-12 col-md-3 custom-feature-col">
                        <h4 className="custom-feature-title">Easy Returns</h4>
                        <p className="custom-feature-text">Not happy with your order, enjoy our easy returns process.</p>
                    </div>

                    {/* Feature 3: Live Support */}
                    <div className="col-12 col-md-3 custom-feature-col">
                        <h4 className="custom-feature-title">Live Support</h4>
                        <p className="custom-feature-text">MediCare's support agents are available 24 hours to help.</p>
                    </div>

                    {/* Feature 4: Cash on Delivery */}
                    <div className="col-12 col-md-3 custom-feature-col">
                        <h4 className="custom-feature-title">Cash on Delivery</h4>
                        <p className="custom-feature-text">Skip the online payment and pay on delivery.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductFeatures;