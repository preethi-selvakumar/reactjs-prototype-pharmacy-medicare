import React from 'react';
import ProductCard from './ProductCard';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import SpecialtyButtons from '../components/SpecialtyButtons';

import NewImage1 from '../assets/images/cromsol_eye_drop.png';
import NewImage2 from '../assets/images/calcium_syrup.png';
import NewImage3 from '../assets/images/cool_soothing_gel.png';
import NewImage4 from '../assets/images/arthocare_capsules.png';

const products = [
    { id: 1, image: NewImage1, title: 'Cromsol Eye Drop 2%', category: 'Eye Care', price: '$38.00' },
    { id: 2, image: NewImage2, title: 'Calcium 200mg', category: 'Health Care', price: '$18.00' },
    { id: 3, image: NewImage3, title: 'Cooling and Soothing eye gel', category: 'Eye Care', price: '$138.00' },
    { id: 4, image: NewImage4, title: 'Arthocare 30 Capsules', category: 'Orthopaedics', price: '$118.00' },
];

const NewArrivals = () => {
    const featuredProducts = products.slice(0, 4);

    return (
        <div className="most-popular-section-wrapper">
            <div className="container-fluid">
                {/* Header Section */}
                <div className="popular-header-row row">
                    <div className="col-12 popular-header-content">
                        <h2 className="featured-heading">New Arrivals</h2>
                        <Link to="/products" className="see-all-link">
                            SEE ALL PRODUCTS
                            <IoIosArrowRoundForward className="arrow-icon" />
                        </Link>
                    </div>
                </div>

                <SpecialtyButtons />

                {/* Product List Section - Using Bootstrap Grid */}
                <div className="product-list-row row">
                    {featuredProducts.map((product) => (
                        // Use product.id as the key
                        <div key={product.id} className="col-lg-3 col-md-6 col-sm-6 product-col">
                            {/* The reusable ProductCard component */}
                            <ProductCard
                                {...product}
                                // On Home Page click, it will navigate to /products page
                                targetPath="/products"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewArrivals; 
