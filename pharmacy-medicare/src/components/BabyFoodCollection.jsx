import React from 'react';
import ProductCard from './ProductCard';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

import BabyImage1 from '../assets/images/breast_milk_storage.png';
import BabyImage2 from '../assets/images/aptamil_500g.png';
import BabyImage3 from '../assets/images/sweet_surprise.png';
import BabyImage4 from '../assets/images/royal_cookies.png';

const products = [
    { id: 1, image: BabyImage1, title: 'Breast Milk Storage', category: 'Baby Care', price: '$38.00' },
    { id: 2, image: BabyImage2, title: 'Aptamil 500g', category: 'Baby Care', price: '$18.00' },
    { id: 3, image: BabyImage3, title: 'Sweet Surprise', category: 'Baby Care', price: '$138.00' },
    { id: 4, image: BabyImage4, title: 'Royal Cookies', category: 'Baby Care', price: '$118.00' },
];

const BabyFoodCollection = () => {
    const featuredProducts = products.slice(0, 4);

    return (
        <div className="most-popular-section-wrapper">
            <div className="container-fluid">
                {/* Header Section */}
                <div className="popular-header-row row">
                    <div className="col-12 popular-header-content">
                        <h2 className="featured-heading">Baby Food <br />Collection</h2>
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

export default BabyFoodCollection;
