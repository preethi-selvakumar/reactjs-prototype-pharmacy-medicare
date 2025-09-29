import React from 'react';
import { IoAddCircleSharp, IoStar } from 'react-icons/io5';
import { Link } from 'react-router-dom';

// ProductCard component receives image, title, category, price, and targetPath props
const ProductCard = ({ image, title, category, price, targetPath }) => {
    // Array of 5 stars for rating display
    const ratingStars = Array(5).fill(<IoStar />);

    // Add to Cart button click handler
    const handleAddClick = (e) => {
        // Prevent default Link navigation so user stays on the page
        e.preventDefault();
        console.log(`Product: ${title} added to cart!`);
    };

    return (
        // Use Link so clicking anywhere on the card navigates to targetPath
        <Link to={targetPath || '#'} className="product-card">

            {/* Image Wrapper */}
            <div className="product-card-image-wrapper">
                <img
                    src={image}
                    alt={title}
                    className="product-card-image"
                />
            </div>

            {/* Content Details */}
            <div className="product-card-details">

                {/* Title Row: Product title and initial + icon */}
                <div className="product-title-row">
                    <p className="product-card-title">{title}</p>

                    {/* Top-right + Icon */}
                    <button
                        className="product-card-add-button top-right"
                        onClick={handleAddClick} // Stops Link navigation when clicked
                    >
                        <IoAddCircleSharp className="add-icon" />
                    </button>
                </div>

                {/* Product Category */}
                <p className="product-card-category">{category}</p>

                {/* Footer: Price and hover 'Add to Cart' button */}
                <div className="product-card-footer">
                    <span className="product-card-price">{price}</span>

                    {/* Hover 'Add to Cart' Button */}
                    <button
                        className="product-card-add-button footer-hover"
                        onClick={handleAddClick} // Stops Link navigation
                    >
                        <IoAddCircleSharp className="add-icon" />
                        <span className="add-icon-text">Add to Cart</span>
                    </button>
                </div>
            </div>

            {/* Rating Icons */}
            <div className="product-card-rating">
                {ratingStars.map((star, index) => (
                    <span key={index}>{star}</span>
                ))}
            </div>
        </Link>
    );
};

export default ProductCard;
