import React from 'react';
import Navbar from '../components/Navbar';
import ProductDetailView from '../components/ProductDetailView';
import FrequentlyPurchased from '../components/FrequentlyPurchased';
import RelatedProducts from '../components/RelatedProducts';
import ProductFeatures from '../components/ProductFeatures';
import Footer from '../components/Footer';

const ProductDetails = () => {
    return (
        <div>
            <Navbar />
            <ProductDetailView />
            <FrequentlyPurchased />
            <RelatedProducts />
            <ProductFeatures />
            <Footer />
        </div>
    );
};

export default ProductDetails;