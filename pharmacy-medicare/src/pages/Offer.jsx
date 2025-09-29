import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Offerings from '../components/Offerings';
import FilterSidebar from '../components/FilterSidebar';
import DiscountDeals from '../components/DiscountDeals';

const Offer = () => {
    // Title and item count variables
    const pageTitle = "Discounted Products";
    const itemCount = "0 Items Found";

    return (
        <div>
            <Navbar />

            <div className="container-fluid">
                {/* Offerings component - Props passed with unchanged variable names */}
                <Offerings
                    title={pageTitle}
                    itemCount={itemCount}
                />

                {/* Two-column layout: Filter Sidebar (Left) and Discount Deals (Right) */}
                <div className="row">
                    {/* Left column for the FilterSidebar component */}
                    <div className="col-lg-3 col-md-4">
                        <FilterSidebar />
                    </div>

                    {/* Right column for the DiscountDeals component */}
                    <div className="col-lg-9 col-md-8">
                        <DiscountDeals />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Offer;
