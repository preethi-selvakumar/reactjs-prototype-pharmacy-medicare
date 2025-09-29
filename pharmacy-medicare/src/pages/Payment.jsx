import React, { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Import Cart Context (needed for Order Summary)
import { useCart } from '../context/AppContext'; // clearCart available

import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

// Import Shipping Logos image (displayed below Order Summary)
import ShippingLogos from '../assets/images/shipping_logos.png';

// imports for new payment icons
import ShopPayLogo from '../assets/images/shop_pay_logo.png';
import GooglePayLogo from '../assets/images/google-pay.webp';
// Credit Card Logos image
import CreditCardLogos from '../assets/images/credit_card_logos.png';

// Image for Order Completion
import OrderCompletionImage from '../assets/images/order-complete.png';

// Helper function to format price for display (e.g., 150 -> $150.00)
const formatPrice = (price) => `$${price.toFixed(2)}`;

// --- Order Completion Popup Component ---
const OrderCompletionPopup = ({ imageSrc, onClose }) => (
    <div className="order-complete-overlay" onClick={onClose}> {/* Clicking anywhere closes popup */}
        <div className="order-complete-popup" onClick={(e) => e.stopPropagation()}> {/* Prevent closing when clicking inside */}
            <img src={imageSrc} alt="Order Completed Successfully" className="order-complete-image" />
            <p className="order-complete-message">Tap anywhere outside to continue shopping.</p>
        </div>
    </div>
);

const Payment = () => {
    // Cart Context and Navigation
    const { cart, clearCart } = useCart();
    const navigate = useNavigate();

    // Form State Management
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('Country/Region');

    // State for Order Completion Popup
    const [showCompletionPopup, setShowCompletionPopup] = useState(false);

    // Validation Logic
    const validateForm = () => {
        if (!email.trim()) {
            alert('Please enter your email or mobile phone number.');
            return false;
        }
        if (country === 'Country/Region' || !country.trim()) {
            alert('Please select a Country/Region.');
            return false;
        }
        if (!firstName.trim()) {
            alert('Please enter your First Name.');
            return false;
        }
        if (!lastName.trim()) {
            alert('Please enter your Last Name.');
            return false;
        }
        if (!address.trim()) {
            alert('Please enter your Address.');
            return false;
        }
        if (!city.trim()) {
            alert('Please enter your City.');
            return false;
        }
        return true;
    };

    // Calculated Values
    const subtotal = useMemo(() => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }, [cart]);

    const TAX_RATE = 0.15;
    const SHIPPING_FEE = 15.00;
    const DISCOUNT = 0.00;

    const tax = subtotal * TAX_RATE;
    const total = subtotal + tax + SHIPPING_FEE - DISCOUNT;

    // Payment Handler
    const handlePayNow = () => {
        if (!validateForm()) return;

        const proceed = window.confirm(
            `Confirm and Pay: ${formatPrice(total)}. \n\nProceeding to order completion.`
        );

        if (proceed) {
            // Clear Cart
            clearCart();

            // Show Order Completion Popup
            setShowCompletionPopup(true);
        }
    };

    // Close popup and navigate to Home Page
    const handlePopupClose = () => {
        setShowCompletionPopup(false);
        navigate('/');
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
                        <span className="pdv-current-page">Payment</span>
                    </p>
                </div>

                {/* Stage Indicators - Payment Active */}
                <div className="cart-stage-indicators">
                    <div className="cart-stage">Cart</div>
                    <div className="cart-stage">Shipping and Billing</div>
                    <div className="cart-stage cart-stage-active">Payment</div>
                </div>

                {/* Main Content: Left (Form) & Right (Summary) */}
                <div className="row payment-main-row">

                    {/* Left Column: Checkout Form */}
                    <div className="col-lg-8 checkout-details-col">

                        {/* Express Checkout Area */}
                        <div className="express-checkout-box">
                            <h3 className="checkout-express-title">Express Checkout</h3>
                            <div className="express-pay-buttons">
                                <div className="pay-image-container shop-pay-btn">
                                    <img src={ShopPayLogo} alt="Shop Pay" className="pay-logo" />
                                </div>
                                <div className="pay-image-container google-pay-btn">
                                    <img src={GooglePayLogo} alt="Google Pay" className="pay-logo" />
                                </div>
                            </div>
                            <div className="divider-or">OR</div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-section">
                            <h3 className="section-title">Contact</h3>
                            <input
                                type="email"
                                placeholder="Email or mobile phone number"
                                className="checkout-input-field"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <div className="remember-me-checkbox">
                                <input type="checkbox" id="rememberMe" />
                                <label htmlFor="rememberMe">Email me with news and offers</label>
                            </div>
                        </div>

                        {/* Delivery Section */}
                        <div className="delivery-form-section">
                            <h3 className="section-title">Delivery</h3>
                            <select
                                className="checkout-input-field country-select"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                            >
                                <option disabled value="Country/Region">Country/Region</option>
                                <option value="India">India</option>
                                <option value="USA">USA</option>
                            </select>
                            <div className="name-row">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="checkout-input-field half-width"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="checkout-input-field half-width"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Address"
                                className="checkout-input-field"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Apartment, suite, etc. (optional)"
                                className="checkout-input-field"
                            />
                            <input
                                type="text"
                                placeholder="City"
                                className="checkout-input-field"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </div>

                        {/* Shipping Method Section */}
                        <div className="shipping-method-section">
                            <h3 className="section-title">Shipping Method</h3>
                            <div className="shipping-options-box">
                                <div className="shipping-option-row">
                                    <p className="shipping-text-option active-shipping-option">
                                        *Post office
                                    </p>
                                    <p className="shipping-text-option">
                                        *COD
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Payment Section */}
                        <div className="payment-form-section">
                            <h3 className="section-title">Payment</h3>
                            <img
                                src={CreditCardLogos}
                                alt="Payment form content as a single image placeholder"
                                className="full-payment-image"
                            />
                        </div>

                    </div>

                    {/* Right Column: Order Summary */}
                    <div className="col-lg-4 cart-summary-col">
                        <div className="cart-order-summary">
                            <h3 className="cart-summary-title">Order Summary</h3>

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

                            <div className="cart-summary-total">
                                <span>Total</span>
                                <span>{formatPrice(total)}</span>
                            </div>

                            <div className="shipping-summary-logos">
                                <img src={ShippingLogos} alt="Security and Delivery Icons" className="shipping-logo-image" />
                            </div>

                            {/* Checkout Button */}
                            <button
                                className="shipping-proceed-btn"
                                onClick={handlePayNow}
                            >
                                Proceed to Next
                            </button>

                            <Link to="/" className="cart-continue-shopping">
                                ← Continue Shopping
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

            {/* Order Completion Popup */}
            {showCompletionPopup && (
                <OrderCompletionPopup
                    imageSrc={OrderCompletionImage}
                    onClose={handlePopupClose}
                />
            )}
        </>
    );
};

export default Payment;
