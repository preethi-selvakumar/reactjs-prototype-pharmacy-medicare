import React from 'react';

const DiscountDeals = () => {
    return (
        <div className="discount-deals-container">
            <div className="discount-header-section">
                <h2 className="discount-title">
                    Discount Deals |{' '}
                    <span className="terms-conditions">Terms & conditions apply</span>
                </h2>
                <p className="discount-description">
                    Explore our exclusive discounted deals on products with close dates. Enjoy significant savings on quality items while supplies last. Don't miss out – stock up and save today!
                </p>
            </div>
            <div className="product-not-found-section">
                <p className="not-found-text">
                    Product not found? Don't worry. Make a special request.
                </p>
                <button className="custom-request-button">
                    Make a Custom Request
                </button>
            </div>
        </div>
    );
};

export default DiscountDeals;