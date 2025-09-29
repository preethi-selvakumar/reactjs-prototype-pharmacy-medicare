import React from 'react';
import { FiChevronDown } from 'react-icons/fi';

// props: title, itemCount, sortBy, and onSortChange are received
const Offerings = ({ title, itemCount, sortBy, onSortChange }) => {
    // sortBy state is not defined here; it comes from props.

    const handleSortChange = (event) => {
        // Sends the selected value back to the parent via onSortChange (setSortBy function)
        onSortChange(event.target.value);
    };

    return (
        <div className="offerings-container">
            <div className="offers-header-row row">
                <div className="col-12 col-md-8 offers-info-container">
                    <h2 className="offerings-title">{title}</h2>
                    <p className="offerings-item-count">{itemCount}</p>
                </div>

                <div className="col-12 col-md-4 sort-options-container">
                    <div className="sort-container">
                        <label htmlFor="sort-options" className="sort-label">Sort By:</label>
                        <div className="dropdown-wrapper">
                            <select
                                id="sort-options"
                                className="sort-dropdown"
                                // Uses sortBy value received from props
                                value={sortBy}
                                onChange={handleSortChange}
                            >
                                <option value="latest">Latest</option>
                                <option value="lowToHigh">Low to High</option>
                                <option value="highToLow">High to Low</option> 
                            </select>
                            <FiChevronDown className="offerings-dropdown-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offerings;
