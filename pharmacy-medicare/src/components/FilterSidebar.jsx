import React from 'react'; 
import { IoChevronDown, IoChevronForward } from 'react-icons/io5';

// Props received: minPrice, maxPrice (values), setMinPrice, setMaxPrice (update functions), and handlePriceFilter (button action)
const FilterSidebar = ({ minPrice, maxPrice, setMinPrice, setMaxPrice, handlePriceFilter }) => {

    return (
        <div className="filter-sidebar-container">
            <div className="filter-sidebar-card">
                <h4 className="filter-sidebar-title">Filter</h4>

                {/* 1. Discount Deals Section */}
                <div className="filter-sidebar-section">
                    <div className="filter-dropdown-container">
                        <span className="filter-dropdown-text">Discount Deals</span>
                        <IoChevronDown className="filter-dropdown-icon" />
                    </div>
                </div>

                <hr className="filter-sidebar-divider" />

                {/* 2. Categories Section */}
                <div className="filter-sidebar-section">
                    <h5 className="filter-section-title">Categories</h5>
                    <div className="filter-category-item">
                        <span className="filter-category-text">Cardiology</span>
                        <IoChevronForward className="filter-category-icon" />
                    </div>
                    <div className="filter-category-item">
                        <span className="filter-category-text">Paediatrics</span>
                        <IoChevronForward className="filter-category-icon" />
                    </div>
                    <div className="filter-category-item">
                        <span className="filter-category-text">Nephrology</span>
                        <IoChevronForward className="filter-category-icon" />
                    </div>
                </div>

                <hr className="filter-sidebar-divider" />

                {/* 3. Brands Section */}
                <div className="filter-sidebar-section">
                    <h5 className="filter-section-title">Brands</h5>
                    <ul className="filter-brand-list">
                        <li>Pfizer</li>
                        <li>gsk</li>
                        <li>Merck</li>
                    </ul>
                </div>

                <hr className="filter-sidebar-divider" />

                {/* 4. Price Section - Managed via Props */}
                <div className="filter-sidebar-section">
                    <h5 className="filter-section-title">Price</h5>
                    <div className="filter-price-group">
                        <input
                            type="number"
                            className="filter-price-input"
                            placeholder="0"
                            value={minPrice} // Value coming from ProductsPage
                            // Function to send value back to ProductsPage
                            onChange={(e) => setMinPrice(e.target.value)}
                        />
                        <span className="filter-price-separator">To</span>
                        <input
                            type="number"
                            className="filter-price-input"
                            placeholder="1000"
                            value={maxPrice} // Value coming from ProductsPage
                            // Function to send value back to ProductsPage
                            onChange={(e) => setMaxPrice(e.target.value)}
                        />
                        <button
                            className="filter-button"
                            onClick={handlePriceFilter} // Apply button click action
                        >
                            <IoChevronForward />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterSidebar;
