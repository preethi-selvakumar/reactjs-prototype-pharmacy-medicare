import React from 'react';
import ProductCard from './ProductCard';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

import Image1 from '../assets/images/strepsils.png';
import Image2 from '../assets/images/salonpas.png';
import Image3 from '../assets/images/panadal_extra.png';
import Image4 from '../assets/images/panadal.png';

const products = [
    { id: 1, image: Image1, title: 'Strepsils', category: 'General Care', price: '$38.00' },
    { id: 2, image: Image2, title: 'Salonpas Pain Relief Patch', category: 'General Care', price: '$18.00' },
    { id: 3, image: Image3, title: 'Panadal Extra', category: 'General Care', price: '$138.00' },
    { id: 4, image: Image4, title: 'Panadal', category: 'General Care', price: '$118.00' },
];

const MostPopularProducts = () => {
    const featuredProducts = products.slice(0, 4);

    return (
        <div className="most-popular-section-wrapper">
            <div className="container-fluid">
                {/* Header Section */}
                <div className="popular-header-row row">
                    <div className="col-12 popular-header-content">
                        <h2 className="featured-heading">Most Popular</h2>
                        <Link to="/products" className="see-all-link">
                            SEE ALL PRODUCTS
                            <IoIosArrowRoundForward className="arrow-icon" />
                        </Link>
                    </div>
                </div>

                {/* Product List Section - Using Bootstrap Grid */}
                <div className="product-list-row row">
                    {featuredProducts.map((product) => (
                        // Use product.id as the key instead of index
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

export default MostPopularProducts;
