import React, { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Import Cart Context (needed for Order Summary)
import { useCart } from '../context/AppContext';

// Import Navbar and Footer components
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

// Import Shipping Logos image (displayed below Order Summary)
import ShippingLogos from '../assets/images/shipping_logos.png';

// Helper function to format price for display (e.g., 150 -> $150.00)
const formatPrice = (price) => `$${price.toFixed(2)}`;

const Shipping = () => {
    // Cart Context and Navigation Hooks
    const { cart } = useCart();
    const navigate = useNavigate();

    // Shipping Method State
    // Default is 'storePickup'
    const [selectedShippingMethod, setSelectedShippingMethod] = useState('storePickup');

    // Calculated Values 
    const subtotal = useMemo(() => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }, [cart]);

    const TAX_RATE = 0.15; // 15% tax
    const SHIPPING_FEE = 15.00;
    const DISCOUNT = 0.00; // coupon discount

    const tax = subtotal * TAX_RATE;
    const total = subtotal + tax + SHIPPING_FEE - DISCOUNT;

    // Next Step Handler (Navigate to Payment Page)
    const handleProceedToNext = () => {
        // Display selected shipping method
        const methodDisplay = selectedShippingMethod === 'storePickup' ? 'Store Pickup' : 'Delivery';

        // Confirmation alert
        const proceed = window.confirm(
            `You have selected: ${methodDisplay}. \n\nTotal Payable: ${formatPrice(total)}. \n\nProceed to Payment?`
        );

        if (proceed) {
            // If OK, navigate to Payment route
            navigate('/payment');
        }
        // If Cancel, remain on the page
    };

    // Handle Radio Button change
    const handleShippingChange = (event) => {
        setSelectedShippingMethod(event.target.value);
    };


    return (
        <>
            <NavBar />

            {/* Content Container */}
            <div className="cart-container-wrapper container">

                {/* Breadcrumb */}
                <div className="pdv-breadcrumb-container">
                    <p className="pdv-breadcrumb">
                        <Link to="/" className="pdv-link">Back home</Link> /
                        <span className="pdv-current-page">Shipping and Billing</span>
                    </p>
                </div>

                {/* Stage Indicators */}
                <div className="cart-stage-indicators">
                    <div className="cart-stage">Cart</div>
                    <div className="cart-stage cart-stage-active">Shipping and Billing</div>
                    <div className="cart-stage">Payment</div>
                </div>

                {/* Main Content: Left (Form) & Right (Summary) */}
                <div className="row shipping-main-row">

                    {/* Left Column: Shipping Details Form */}
                    <div className="col-lg-8 shipping-details-col">
                        <h3 className="shipping-section-title">Shipping Method</h3>

                        {/* Shipping Selection */}
                        <div className="shipping-radio-group">
                            <p className="shipping-radio-title">Select Shipping Method</p>
                            <div className="shipping-radio-options">
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        name="shippingMethod"
                                        value="storePickup"
                                        checked={selectedShippingMethod === 'storePickup'}
                                        onChange={handleShippingChange}
                                    />
                                    Store Pickup
                                </label>
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        name="shippingMethod"
                                        value="delivery"
                                        checked={selectedShippingMethod === 'delivery'}
                                        onChange={handleShippingChange}
                                    />
                                    Delivery
                                </label>
                            </div>
                        </div>

                        {/* Order Note Area */}
                        <div className="order-note-area">
                            <p className="order-note-title">Order Note (Optional)</p>
                            <textarea className="order-note-input" rows="5" placeholder="Add any specific instructions or preferences here..."></textarea>
                        </div>
                    </div>

                    {/* Right Column: Order Summary */}
                    <div className="col-lg-4 cart-summary-col">
                        <div className="cart-order-summary">
                            <h3 className="cart-summary-title">Order Summary</h3>

                            {/* Summary Details */}
                            <div className="cart-summary-item">
                                <span>Sub total</span>
                                <span>{formatPrice(subtotal)}</span>
                            </div>
                            <div className="cart-summary-item">
                                <span>Tax</span>
                                <span>{formatPrice(tax)}</span>
                            </div>
                            <div className="cart-summary-item">
                                <span>Shipping</span>
                                <span>{formatPrice(SHIPPING_FEE)}</span>
                            </div>
                            <div className="cart-summary-item">
                                <span>Discount on product</span>
                                <span>{formatPrice(DISCOUNT)}</span>
                            </div>
                            <div className="cart-summary-item cart-summary-coupon">
                                <span>Coupon discount</span>
                                <span>0</span>
                            </div>

                            <div className="cart-summary-separator"></div>

                            {/* Final Total */}
                            <div className="cart-summary-total">
                                <span>Total</span>
                                <span>{formatPrice(total)}</span>
                            </div>

                            {/* Shipping Logos */}
                            <div className="shipping-summary-logos">
                                <img src={ShippingLogos} alt="Security and Delivery Icons" className="shipping-logo-image" />
                            </div>

                            {/* Proceed Button */}
                            <button
                                className="shipping-proceed-btn"
                                onClick={handleProceedToNext}
                            >
                                Proceed to Next
                            </button>

                            {/* Continue Shopping Link */}
                            <Link to="/" className="cart-continue-shopping">
                                ← Continue Shopping
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Shipping;
