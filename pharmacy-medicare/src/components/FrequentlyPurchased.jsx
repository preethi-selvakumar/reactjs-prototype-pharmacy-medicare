import React from 'react';

import PanadolExtraImage from '../assets/images/panadol_extra_optizorb.png';
import PanadolNightImage from '../assets/images/panadol_night_tablet.png';
import PanadolMigraineImage from '../assets/images/panadol_migraine_tablet.png';

const FrequentlyPurchased = () => {

    const comboProducts = [
        {
            id: 1,
            image: PanadolExtraImage,
            title: 'Panadol Extra Optizorb Tablet 48 Tab'
        },
        {
            id: 2,
            image: PanadolNightImage,
            title: 'Panadol Night Tablet 24 PC'
        },
        {
            id: 3,
            image: PanadolMigraineImage,
            title: 'Panadol Migraine Tablet - 24 PC'
        },
    ];

    const productListItems = [
        "This product: Panadol Extra Optizorb Tablet 48 Tab",
        "Panadol Night Tablet 24 PC",
        "Panadol Migraine Tablet - 24 PC"
    ];

    return (
        <div className="frequently-purchased-wrapper">
            <div className="container">

                {/* Section Title */}
                <h3 className="fp-section-title">Frequently purchased together</h3>

                {/* Main Product Combo Section - Row for Images and Plus Signs */}
                <div className="fp-combo-row row">

                    {comboProducts.map((product, index) => (

                        <div
                            key={`product-${product.id}`} // Unique key
                            className="col-12 col-md-3 fp-product-item"
                        >
                            <div className="fp-image-container">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="fp-product-image"
                                />
                            </div>

                            {index < comboProducts.length - 1 && (
                                <div className="fp-plus-sign">
                                    +
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Bullet Point List Section */}
                <div className="fp-list-wrapper">
                    <ul className="fp-product-list">
                        {productListItems.map((item, index) => (
                            <li key={index} className="fp-list-item">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default FrequentlyPurchased;