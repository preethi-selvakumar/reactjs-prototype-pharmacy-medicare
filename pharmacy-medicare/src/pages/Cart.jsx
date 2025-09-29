import React, { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

import RelatedProducts from '../components/RelatedProducts';
import ProductFeatures from '../components/ProductFeatures';

import { useCart } from '../context/AppContext';

import ShippingLogos from '../assets/images/shipping_logos.png';

// Helper function to format price for display (e.g., 150 -> $150.00)
const formatPrice = (price) => `$${price.toFixed(2)}`;

const Cart = () => {
    // useNavigate hook is used
    const navigate = useNavigate();

    // Get required values and functions from Cart Context
    const {
        cart,
        totalCartItems,
        updateItemQuantity,
        removeItem,
    } = useCart();

    // Calculated Values
    const subtotal = useMemo(() => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }, [cart]);

    const TAX_RATE = 0.15; // 15% tax
    const SHIPPING_FEE = 15.00;
    const DISCOUNT = 0.00; // Coupon discount

    const tax = subtotal * TAX_RATE;
    const total = subtotal + tax + SHIPPING_FEE - DISCOUNT;

    // Quantity Handler
    const handleQuantityChange = (itemId, newQuantity) => {
        if (newQuantity < 1) return;
        if (updateItemQuantity) {
            updateItemQuantity(itemId, newQuantity);
        }
    };

    // Remove Handler
    const handleRemoveItem = (itemId, title) => {
        if (window.confirm(`Are you sure you want to remove ${title} from the cart?`)) {
            if (removeItem) {
                removeItem(itemId);
            }
        }
    };

    // Checkout Handler
    const handleCheckout = () => {
        // Navigate to /shipping when Checkout button is clicked
        navigate('/shipping');
    };

    // If Cart is empty
    if (totalCartItems === 0) {
        return (
            <>
                <NavBar />
                <div className="cart-container-wrapper container-fluid">
                    <div className="cart-empty-state">
                        <h1>Your Cart is Empty</h1>
                        <p>Add some essential medicines and products to your cart to begin shopping.</p>
                        <Link to="/" className="continue-shopping-btn">
                            ← Continue Shopping
                        </Link>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <NavBar />

            <div className="cart-container-wrapper container-fluid">

                {/* Breadcrumb */}
                <div className="pdv-breadcrumb-container">
                    <p className="pdv-breadcrumb">
                        <Link to="/" className="pdv-link">Back home</Link> /
                        <span className="pdv-current-page">Shipping Cart</span>
                    </p>
                </div>

                {/* Stage Indicators */}
                <div className="cart-stage-indicators">
                    <div className="cart-stage cart-stage-active">Cart</div>
                    <div className="cart-stage">Shipping and Billing</div>
                    <div className="cart-stage">Payment</div>
                </div>

                {/* Main Cart Content: Product Details & Summary */}
                <div className="row cart-main-row">

                    {/* Left Column: Product Listing (col-lg-8) */}
                    <div className="col-lg-8 cart-details-col">

                        {/* Table Header: Product | Quantity | Total */}
                        <div className="cart-header-row cart-product-row">
                            <div className="cart-product-heading col-6">Product</div>
                            <div className="cart-quantity-heading col-3">Quantity</div>
                            <div className="cart-total-heading col-3">Total</div>
                        </div>

                        {/* Cart Items List */}
                        {cart.map(item => (
                            <div key={item.id} className="cart-item-row cart-product-row">

                                {/* Product Info (Name & Image) */}
                                <div className="cart-item-info col-6">
                                    <img src={item.image} alt={item.title} className="cart-item-image" />
                                    <div className="cart-item-text">
                                        <p className="cart-item-title">{item.title}</p>
                                        {/* Unit price shown below product title */}
                                        <p className="cart-item-price-unit">{formatPrice(item.price)}</p>
                                    </div>
                                </div>

                                {/* Quantity Selector & Remove */}
                                <div className="cart-item-quantity col-3">
                                    {/* Quantity Selector */}
                                    <div className="cart-qty-selector">
                                        <button
                                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                            className="cart-qty-btn cart-qty-minus"
                                        >
                                            -
                                        </button>
                                        <span className="cart-qty-display">{item.quantity}</span>
                                        <button
                                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                            className="cart-qty-btn cart-qty-plus"
                                        >
                                            +
                                        </button>
                                    </div>
                                    {/* Remove Button */}
                                    <button
                                        onClick={() => handleRemoveItem(item.id, item.title)}
                                        className="cart-remove-btn"
                                    >
                                        Remove
                                    </button>
                                </div>

                                {/* Item Total Price */}
                                <div className="cart-item-total col-3">
                                    {formatPrice(item.price * item.quantity)}
                                </div>
                            </div>
                        ))}

                        {/* Shipping and Safety Logos */}
                        <div className="cart-footer-logos">
                            <img src={ShippingLogos} alt="Shipping and Safety Policies" className="cart-shipping-logos" />
                        </div>

                    </div>

                    {/* Right Column: Order Summary (col-lg-4) */}
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

                            {/* Checkout Button */}
                            <button
                                className="cart-checkout-btn"
                                onClick={handleCheckout} // Navigates to /shipping
                            >
                                Check Out
                            </button>

                            {/* Continue Shopping Link */}
                            <Link to="/" className="cart-continue-shopping">
                                ← Continue Shopping
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Added Components */}
            <RelatedProducts />
            <ProductFeatures />

            <Footer />
        </>
    );
};

export default Cart;
