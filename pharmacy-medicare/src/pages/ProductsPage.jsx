import React, { useState } from 'react'; // useState hook added for Sorting and Filtering
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Offerings from '../components/Offerings';
import FilterSidebar from '../components/FilterSidebar';
import AllFeaturedProducts from '../components/AllFeaturedProducts';

const ProductsPage = () => {
    // 1. Sorting State
    const [sortBy, setSortBy] = useState('latest');

    // 2. Price Filter Input States (current value in input fields)
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    // 3. Applied Filter States (values used after clicking Filter Apply button)
    const [appliedMinPrice, setAppliedMinPrice] = useState(0);
    const [appliedMaxPrice, setAppliedMaxPrice] = useState(Infinity);

    // Function called when the Filter Apply button is clicked
    const handlePriceFilter = () => {
        // Convert input values to float and update Applied States
        // If input is empty, set Min to 0 and Max to Infinity
        setAppliedMinPrice(minPrice === '' ? 0 : parseFloat(minPrice));
        setAppliedMaxPrice(maxPrice === '' ? Infinity : parseFloat(maxPrice));
    };

    // Page title and item count for Products Page
    const pageTitle = "Category Products";
    const itemCount = "40 Items Found";

    return (
        <div>
            {/* Navbar Component */}
            <Navbar />

            <div className="container-fluid">

                {/* Offerings component (Sorting Controls) */}
                <Offerings
                    title={pageTitle}
                    itemCount={itemCount}
                    // Pass Sort States and Handler
                    sortBy={sortBy}
                    onSortChange={setSortBy}
                />

                {/* Two-column layout: Filter Sidebar (Left) and Product Grid (Right) */}
                <div className="row">
                    {/* Left column: FilterSidebar component */}
                    <div className="col-lg-3 col-md-4">
                        {/* FilterSidebar Component (Price Filter Controls) */}
                        <FilterSidebar
                            // Pass Input States and Handlers
                            minPrice={minPrice}
                            maxPrice={maxPrice}
                            setMinPrice={setMinPrice}
                            setMaxPrice={setMaxPrice}
                            handlePriceFilter={handlePriceFilter} // Apply button Handler
                        />
                    </div>

                    {/* Right column: main list of products */}
                    <div className="col-lg-9 col-md-8">
                        {/* AllFeaturedProducts Component (Sorting and Applied Filter values passed) */}
                        <AllFeaturedProducts
                            sortBy={sortBy}
                            minPrice={appliedMinPrice} // Applied Filter values
                            maxPrice={appliedMaxPrice} // Applied Filter values
                        />
                    </div>
                </div>
            </div>

            {/* Footer Component */}
            <Footer />
        </div>
    );
};

export default ProductsPage;
