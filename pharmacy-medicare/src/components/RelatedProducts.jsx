import React from 'react';
import ProductCard from './ProductCard';

import Image1 from '../assets/images/dietary_supplements.png';
import Image2 from '../assets/images/nitrile_gloves.png';
import Image3 from '../assets/images/women_multi_vitamin.png';

const products = [
    { id: 1, image: Image1, title: 'Dietary Supplements Health Products', category: 'Nutrition', price: '$38.00', discount: '20% OFF' },
    { id: 2, image: Image2, title: 'Nitrile Disposable gloves 100', category: 'Health Care', price: '$18.00' },
    { id: 3, image: Image3, title: 'Women Multi-vitamin A,Biotin -cranberry', category: 'Wellness', price: '$138.00' },
];

const RelatedProducts = () => {
    const relatedProducts = products;

    return (
        <div className="related-products-section-wrapper">
            <div className="container">
                {/* Custom header styling */}
                <h3 className="related-products-title">Related Products</h3>

                <div className="row related-products-row">

                    {relatedProducts.map((product) => (
                        <div
                            key={product.id}
                            className="col-12 col-md-6 col-lg-4 related-product-col"
                        >
                            {/* ProductCard component */}
                            <ProductCard
                                {...product}
                                targetPath={`/product-details/${product.id}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RelatedProducts;