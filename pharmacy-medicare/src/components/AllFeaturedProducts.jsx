import React, { useMemo } from 'react';
import ProductCard from './ProductCard';

// Importing product data from a separate file
import { products } from '../data/productsData';

// Receives props: sortBy, minPrice, maxPrice
const AllFeaturedProducts = ({ sortBy, minPrice, maxPrice }) => {

    // Helper function to convert price strings to numbers
    const parsePrice = (priceString) => parseFloat(priceString.replace('$', '').replace(',', ''));

    // useMemo now depends on minPrice, maxPrice, and sortBy
    const sortedAndFilteredProducts = useMemo(() => {

        // Take a copy of the original array to avoid mutating it
        let processedProducts = [...products];

        // 1. Filtering Logic (apply filtering first)
        processedProducts = processedProducts.filter(product => {
            // Convert price string to number
            const price = parsePrice(product.price);

            // Ensure minPrice & maxPrice are valid numbers
            const min = minPrice !== undefined ? minPrice : 0;
            const max = maxPrice !== undefined ? maxPrice : Infinity;

            // Check if price falls within min and max range
            return price >= min && price <= max;
        });

        // 2. Sorting Logic (sort after filtering)
        switch (sortBy) {
            case 'lowToHigh':
                processedProducts.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
                break;
            case 'highToLow':
                processedProducts.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
                break;
            case 'latest':
            default:
                // If 'latest', display by ascending id
                processedProducts.sort((a, b) => a.id - b.id);
                break;
        }

        return processedProducts;

    }, [sortBy, minPrice, maxPrice]); // Re-run useMemo if any of these props change

    return (
        <div className="most-popular-section-wrapper">
            <div className="container-fluid">

                {/* Product List Section - Using Bootstrap Grid */}
                <div className="product-list-row row">
                    {/* Use filtered and sorted products */}
                    {sortedAndFilteredProducts.map((product) => (
                        // 3 cards per row on large screens
                        <div
                            key={product.id}
                            className="col-lg-4 col-md-6 col-sm-12 product-col"
                        >
                            <ProductCard
                                {...product}
                                // Send Card to Details Page
                                targetPath={`/product-details/${product.id}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllFeaturedProducts;
