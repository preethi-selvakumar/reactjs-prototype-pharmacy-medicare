import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    FaMapMarkerAlt,
    FaSearch,
    FaAngleDown,
    FaAngleUp,
    FaShoppingCart,
    FaUser,
    FaBars,
    FaTimes,
} from "react-icons/fa";

import OffersImage from "../assets/images/offer.png";

// Import Cart Context and Auth Context
import { useCart, useAuth } from '../context/AppContext';

const Navbar = () => {
    const navigate = useNavigate();

    // Get total Cart count and Auth status from Context
    const { totalCartItems } = useCart();
    // Get isAuthenticated and logout function
    const { isAuthenticated, logout } = useAuth();

    // Local States
    const [isHealthcareDropdownOpen, setIsHealthcareDropdownOpen] = useState(false);
    const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [location, setLocation] = useState("Doha Qatar");

    // Search Query state
    const [searchQuery, setSearchQuery] = useState("");

    // Functions to toggle Dropdowns and Menu
    const toggleHealthcareDropdown = () => {
        setIsHealthcareDropdownOpen(!isHealthcareDropdownOpen);
    };

    const toggleLocationDropdown = () => {
        setIsLocationDropdownOpen(!isLocationDropdownOpen);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLocationChange = (newLocation) => {
        setLocation(newLocation);
        setIsLocationDropdownOpen(false);
    };

    // Function to handle Enter Key for search
    const handleSearch = (e) => {
        // If Enter key is pressed
        if (e.key === 'Enter') {
            // If query is not empty, navigate with search parameter
            if (searchQuery.trim()) {
                navigate(`/products?search=${searchQuery.trim()}`);
                setSearchQuery(""); // Clear state after search
                e.target.blur(); // Remove focus
            } else {
                // If query is empty, just navigate to /products
                navigate('/products');
            }
        }
    };

    // Function to handle Login/Logout
    const handleAuthClick = (e) => {
        // If user is Logged In, then log out
        if (isAuthenticated) {
            e.preventDefault(); // Prevent link navigation
            const isConfirmed = window.confirm("Are you sure you want to log out?");
            if (isConfirmed) {
                logout(); // Call logout function from Auth Context
                navigate('/'); // Redirect to Home Page
            }
        }
        // If user is Logged Out, default link will navigate to /login
    };

    // Show Badge only if Cart has items (count > 0)
    const shouldShowBadge = totalCartItems > 0;

    return (
        <nav className="custom-navbar-wrapper">
            <div className="custom-navbar container-fluid">
                {/* Left Section - Logo */}
                <Link to="/" className="navbar-brand-text">
                    MediCare
                </Link>

                {/* Desktop Menu */}
                <div className="navbar-left-section desktop-only">
                    {/* Location Selector */}
                    <div className="location-selector" onClick={toggleLocationDropdown}>
                        <FaMapMarkerAlt className="location-icon" />
                        <div className="location-text-group">
                            <span className="location-label">Select Location</span>
                            <span className="location-selected-text">{location}</span>
                        </div>
                        {isLocationDropdownOpen ? (
                            <FaAngleUp className="dropdown-arrow-icon" />
                        ) : (
                            <FaAngleDown className="dropdown-arrow-icon" />
                        )}
                        {isLocationDropdownOpen && (
                            <div className="location-dropdown-menu">
                                <span
                                    onClick={() => handleLocationChange("Doha Qatar")}
                                    className="location-dropdown-item"
                                >
                                    Doha Qatar
                                </span>
                                <span
                                    onClick={() => handleLocationChange("New York")}
                                    className="location-dropdown-item"
                                >
                                    New York
                                </span>
                                <span
                                    onClick={() => handleLocationChange("London")}
                                    className="location-dropdown-item"
                                >
                                    London
                                </span>
                                <span
                                    onClick={() => handleLocationChange("Paris")}
                                    className="location-dropdown-item"
                                >
                                    Paris
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Search Bar - Enter Key Functionality */}
                    <div className="search-bar">
                        <FaSearch className="search-icon" />
                        <input
                            type="text"
                            placeholder="Medicine and healthcare items"
                            className="search-input"
                            // Connected with State
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            // Calls handleSearch when Enter key is pressed
                            onKeyDown={handleSearch}
                        />
                    </div>
                </div>

                {/* Right Section - Desktop */}
                <div className="navbar-right-section desktop-only">
                    <div className="healthcare-services-dropdown-container">
                        <div className="healthcare-services-toggle" onClick={toggleHealthcareDropdown}>
                            <span className="new-tag">New</span>
                            Health Care Services
                            {isHealthcareDropdownOpen ? (
                                <FaAngleUp className="dropdown-arrow-icon" />
                            ) : (
                                <FaAngleDown className="dropdown-arrow-icon" />
                            )}
                        </div>
                        {isHealthcareDropdownOpen && (
                            <div className="healthcare-dropdown-menu">
                                <Link to="/products" className="dropdown-item-link">
                                    Bone & Joint Care
                                </Link>
                                <Link to="/products" className="dropdown-item-link">
                                    Diabetes Care
                                </Link>
                                <Link to="/products" className="dropdown-item-link">
                                    Kidney Care
                                </Link>
                                <Link to="/products" className="dropdown-item-link">
                                    Liver Care
                                </Link>
                                <Link to="/products" className="dropdown-item-link">
                                    Respiratory Care
                                </Link>
                                <Link to="/products" className="dropdown-item-link">
                                    Eye Care
                                </Link>
                            </div>
                        )}
                    </div>

                    <Link to="/offers" className="nav-link-item offers-link">
                        <img src={OffersImage} alt="Offers" className="nav-icon" />
                        Offers
                    </Link>
                    <Link to="/about" className="nav-link-item">
                        About
                    </Link>
                    <Link to="/#contact-footer" className="nav-link-item">
                        Contact Us
                    </Link>

                    {/* Login/Logout Button */}
                    <Link to="/login" className="nav-link-item" onClick={handleAuthClick}>
                        <FaUser className="nav-icon" />
                        {isAuthenticated ? 'Logout' : 'Login'}
                    </Link>

                    {/* Desktop Cart Link - Uses Context Count */}
                    <Link to="/cart" className="nav-link-item cart-link-container">
                        <FaShoppingCart className="nav-icon" />
                        {shouldShowBadge && (
                            <span className="cart-count-badge">{totalCartItems}</span>
                        )}
                        Cart
                    </Link>
                </div>

                {/* Mobile Hamburger Menu */}
                <div className="mobile-only">
                    <button className="hamburger-btn" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
                <div className="mobile-menu">
                    {/* Location Selector (Mobile) */}
                    <div className="location-selector" onClick={toggleLocationDropdown}>
                        <FaMapMarkerAlt className="location-icon" />
                        <div className="location-text-group">
                            <span className="location-label">Select Location</span>
                            <span className="location-selected-text">{location}</span>
                        </div>
                        {isLocationDropdownOpen ? (
                            <FaAngleUp className="dropdown-arrow-icon" />
                        ) : (
                            <FaAngleDown className="dropdown-arrow-icon" />
                        )}
                        {isLocationDropdownOpen && (
                            <div className="location-dropdown-menu">
                                <span
                                    onClick={() => handleLocationChange("Doha Qatar")}
                                    className="location-dropdown-item"
                                >
                                    Doha Qatar
                                </span>
                                <span
                                    onClick={() => handleLocationChange("New York")}
                                    className="location-dropdown-item"
                                >
                                    New York
                                </span>
                                <span
                                    onClick={() => handleLocationChange("London")}
                                    className="location-dropdown-item"
                                >
                                    London
                                </span>
                                <span
                                    onClick={() => handleLocationChange("Paris")}
                                    className="location-dropdown-item"
                                >
                                    Paris
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Search Bar (Mobile) - Enter Key Functionality */}
                    <div className="search-bar mobile-search">
                        <FaSearch className="search-icon" />
                        <input
                            type="text"
                            placeholder="Medicine and healthcare items"
                            className="search-input"
                            // Connected with State
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            // Calls handleSearch when Enter key is pressed
                            onKeyDown={handleSearch}
                        />
                    </div>

                    {/* Healthcare Services (Mobile) */}
                    <div className="healthcare-services-dropdown-container mobile-item-group">
                        <div className="healthcare-services-toggle" onClick={toggleHealthcareDropdown}>
                            <span className="new-tag">New</span>
                            Health Care Services
                            {isHealthcareDropdownOpen ? (
                                <FaAngleUp className="dropdown-arrow-icon" />
                            ) : (
                                <FaAngleDown className="dropdown-arrow-icon" />
                            )}
                        </div>
                        {isHealthcareDropdownOpen && (
                            <div className="healthcare-dropdown-menu">
                                <Link to="/products" className="dropdown-item-link" onClick={toggleMobileMenu}>
                                    Bone & Joint Care
                                </Link>
                                <Link to="/products" className="dropdown-item-link" onClick={toggleMobileMenu}>
                                    Diabetes Care
                                </Link>
                                <Link to="/products" className="dropdown-item-link" onClick={toggleMobileMenu}>
                                    Kidney Care
                                </Link>
                                <Link to="/products" className="dropdown-item-link" onClick={toggleMobileMenu}>
                                    Liver Care
                                </Link>
                                <Link to="/products" className="dropdown-item-link" onClick={toggleMobileMenu}>
                                    Respiratory Care
                                </Link>
                                <Link to="/products" className="dropdown-item-link" onClick={toggleMobileMenu}>
                                    Eye Care
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Other Links (Mobile) */}
                    <Link to="/offers" className="mobile-nav-item" onClick={toggleMobileMenu}>
                        <img src={OffersImage} alt="Offers" className="nav-icon" />
                        Offers
                    </Link>
                    <Link to="/about" className="mobile-nav-item" onClick={toggleMobileMenu}>
                        About
                    </Link>
                    <Link to="/contact" className="mobile-nav-item" onClick={toggleMobileMenu}>
                        Contact Us
                    </Link>

                    {/* Login/Logout Button (Mobile) */}
                    <Link to="/login" className="mobile-nav-item" onClick={(e) => { handleAuthClick(e); toggleMobileMenu(); }}>
                        <FaUser className="nav-icon" />
                        {isAuthenticated ? 'Logout' : 'Login'}
                    </Link>

                    {/* Mobile Cart Link - Uses Context Count */}
                    <Link to="/cart" className="mobile-nav-item cart-link-container" onClick={toggleMobileMenu}>
                        <FaShoppingCart className="nav-icon" />
                        {shouldShowBadge && (
                            <span className="cart-count-badge">{totalCartItems}</span>
                        )}
                        Cart
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
