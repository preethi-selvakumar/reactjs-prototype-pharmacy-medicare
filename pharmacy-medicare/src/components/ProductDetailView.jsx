import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';

// Importing products from data/productsData.js
import { products } from '../data/productsData';

// Importing payment logos image
import CardLogos from '../assets/images/card_logos.png';

// Importing clock icon
import ClockIcon from '../assets/images/clock-1.png';

// Import Context Hook
import { useCart } from '../context/AppContext'; 

// Helper function to parse price string to number
const parsePrice = (priceString) => {
    // Remove '$' and ',' then convert to float
    const numericString = priceString.replace('$', '').replace(',', '');
    return parseFloat(numericString);
};

const ProductDetailView = () => {
    // Get addToCart function from Context
    const { addToCart } = useCart();

    // Get product ID from URL
    const { productId: id } = useParams();

    // Convert ID to number
    const productId = id ? parseInt(id, 10) : 0;

    // Retrieve selected product
    const product = useMemo(() => {
        // Only search if productId > 0
        if (productId > 0) {
            return products.find(p => p.id === productId);
        }
        return undefined; // Return undefined if ID is invalid
    }, [productId]);

    // 'Product not found' scenario
    if (!product) {
        // Display error message if ID is invalid or product not found
        return (
            <div className="container-fluid" style={{ padding: '50px', textAlign: 'center' }}>
                <h1>Product not found!</h1>
                <p>Please check the URL or try selecting a product from the list.</p>
                <p style={{ color: '#dc3545' }}>URL ID: <strong>{id}</strong></p>
            </div>
        );
    }

    // Now 'product' is confirmed, can use its values
    // Convert base price string to number
    const basePrice = useMemo(() => parsePrice(product.price), [product.price]);

    // Quantity State
    const [quantity, setQuantity] = useState(1);

    // Price Calculation (changes with quantity)
    const totalPrice = useMemo(() => {
        return (basePrice * quantity).toFixed(2);
    }, [basePrice, quantity]);

    // Price display helper
    const getPriceDisplay = (price) => `$${price}`;

    // Quantity Handlers
    const handleQuantityChange = (delta) => {
        setQuantity(prev => Math.max(1, prev + delta));
    };

    // Add to Cart Handler (now uses Context)
    const handleAddToCart = () => {
        // 1. Call addToCart function from Context
        addToCart(product, quantity);

        // 2. Show alert message
        alert(`${quantity} x ${product.title} added to cart! Total: ${getPriceDisplay(totalPrice)}`);
    };

    return (
        <div className="product-detail-view-wrapper">
            <div className="container-fluid">

                {/* Back Link / Breadcrumb */}
                <div className="pdv-breadcrumb-container">
                    <p className="pdv-breadcrumb">
                        <Link to="/" className="pdv-link">Back home</Link> /
                        <Link to="/products" className="pdv-link">Products</Link> /
                        <span className="pdv-current-page">{product.category}</span>
                    </p>
                </div>

                {/* Three-Column Row (Image | Actions | Description) */}
                <div className="row pdv-main-content-row">

                    {/* Column 1/3: Image & Payment Logos (col-lg-4) */}
                    <div className="col-12 col-lg-4 pdv-left-col">

                        {/* 1. Dynamic Product Image */}
                        <div className="pdv-image-box">
                            <img src={product.image} alt={product.title} className="pdv-product-image" />
                        </div>

                        {/* 2. Payment Logos */}
                        <div className="pdv-payment-logos">
                            <img src={CardLogos} alt="Accepted Payment Methods" className="pdv-card-logos-img" />
                        </div>
                    </div>

                    {/* Column 2/3: Title, Price, Actions, Delivery (pdv-center-col) */}
                    <div className="col-12 col-lg-4 pdv-center-col">

                        {/* 3. Product Info */}
                        <h1 className="pdv-title">{product.title}</h1>
                        <p className="pdv-price">{getPriceDisplay(totalPrice)}</p>
                        <p className="pdv-stock-status">
                            <span className={product.inStock ? 'pdv-in-stock' : 'pdv-out-of-stock'}>
                                {product.inStock ? 'In Stock' : 'Out of Stock'}
                            </span>
                        </p>

                        {/* 4. Quantity Selector and Add to Cart Button */}
                        <div className="pdv-action-area">
                            <div className="pdv-quantity-selector">
                                <button onClick={() => handleQuantityChange(-1)} className="pdv-qty-btn">-</button>
                                <span className="pdv-qty-display">{quantity}</span>
                                <button onClick={() => handleQuantityChange(1)} className="pdv-qty-btn">+</button>
                            </div>
                            <button
                                onClick={handleAddToCart}
                                className="pdv-add-to-cart-btn"
                                disabled={!product.inStock}
                            >
                                Add to Cart
                            </button>
                        </div>

                        {/* 5. Delivery Status/Timer Box */}
                        <div className="pdv-delivery-status-box">
                            <img src={ClockIcon} alt="Delivery Timer" className="pdv-clock-icon" />
                            <p className="pdv-delivery-text">
                                Home delivery within 1-2 hours
                            </p>
                        </div>
                    </div>

                    {/* Column 3/3: Description, Delivery, Payment (pdv-right-col) */}
                    <div className="col-12 col-lg-4 pdv-right-col">

                        {/* 6. Standard Sections: Description, Delivery, Payment */}
                        <div className="pdv-sections-container">

                            {/* Description Section (Placeholder Text) */}
                            <div className="pdv-section">
                                <h2 className="pdv-section-title">Description</h2>
                                <p className="pdv-description-text">
                                    Support your overall well-being with our high-quality dietary supplement, carefully formulated to provide essential nutrients your body needs every day. Whether you're looking to improve energy, strengthen immunity, enhance metabolism, or support healthy aging, our supplement blends powerful vitamins, minerals, and natural ingredients to help you feel your best. Made with non-GMO ingredients and backed by science, it's perfect for daily use and fits seamlessly into any lifestyle. Take a step toward better health—naturally.
                                </p>
                            </div>

                            {/* Delivery & Returns Section */}
                            <div className="pdv-section">
                                <h2 className="pdv-section-title">Delivery & Returns</h2>
                                <p className="pdv-section-subtitle">Shipping & Delivery</p>
                                <p className="pdv-text">Delivery in India: All orders are delivered within 1 - 2 hours maximum to anywhere in Qatar. Delivery is available 24 hours a day.</p>
                                <p className="pdv-text">International Orders: Shipping is within 3 - 5 working days, depending on the country.</p>
                                <p className="pdv-section-subtitle">Returns & Exchanges</p>
                                <p className="pdv-text">Unopened items in sellable condition can be returned or exchanged within 7 days from date of purchase, except refrigerated medicines and wearable items.</p>
                            </div>

                            {/* Payment Options Section */}
                            <div className="pdv-section">
                                <h2 className="pdv-section-title">Payment Options</h2>
                                <p className="pdv-text">MediCare accepts three payment methods which can be selected in the checkout page:</p>
                                <ul className="pdv-payment-list">
                                    <li>1. Cash/Card on Delivery <span className="pdv-check">✔</span></li>
                                    <li>2. Online Payment via Credit/Debit card <span className="pdv-check">✔</span></li>
                                    <li>3. Apple Pay & Google Pay <span className="pdv-check">✔</span></li>
                                    <li>4. Pay with Insurance <span className="pdv-check">✔</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailView;
