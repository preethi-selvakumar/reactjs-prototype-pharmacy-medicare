import React from 'react';
import ProductCard from './ProductCard';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

import Image1 from '../assets/images/dietary_supplements.png';
import Image2 from '../assets/images/nitrile_gloves.png';
import Image3 from '../assets/images/women_multi_vitamin.png';
import Image4 from '../assets/images/antibacterial_soap.png';

const products = [
    { id: 1, image: Image1, title: 'Dietary Supplements Health Products', category: 'Nutrition', price: '$38.00', discount: '20% OFF' },
    { id: 2, image: Image2, title: 'Nitrile Disposable gloves 100', category: 'Health Care', price: '$18.00' },
    { id: 3, image: Image3, title: 'Women Multi-vitamin A,Biotin -cranberry', category: 'Wellness', price: '$138.00' },
    { id: 4, image: Image4, title: 'Antibacterial Liquid Hand Soap', category: 'Hygiene', price: '$118.00' },
];

const HomeFeaturedProducts = () => {
    const featuredProducts = products.slice(0, 4);

    return (
        <div className="most-popular-section-wrapper">
            <div className="container-fluid">
                {/* Header Section */}
                <div className="popular-header-row row">
                    <div className="col-12 popular-header-content">
                        <h2 className="featured-heading">Today best deals <br />for you!</h2>
                        <Link to="/products" className="see-all-link">
                            SEE ALL PRODUCTS
                            <IoIosArrowRoundForward className="arrow-icon" />
                        </Link>
                    </div>
                </div>

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

export default HomeFeaturedProducts;
