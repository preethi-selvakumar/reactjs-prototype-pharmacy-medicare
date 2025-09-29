import React from 'react';

import maternalHealthImg from '../assets/images/maternal-health.png';
import headacheMigraineImg from '../assets/images/headache-migraine.png';
import coldFluImg from '../assets/images/cold-flu.png';

const CategoriesSection = () => {
    return (
        <div className="categories-section py-5">
            {/* container adds left-right gap */}
            <div className="container-fluid">
                <div className="row g-4 justify-content-center">

                    {/* Card 1: Maternal Health */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="category-card position-relative overflow-hidden">
                            <img src={maternalHealthImg} className="img-fluid category-img" alt="Maternal Health" />
                            <div className="card-content p-3 position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-between">
                                <div>
                                    <h3 className="card-title">Maternal Health and <br />Comfort</h3>
                                    <a href="#" className="browse-link text-decoration-none d-flex align-items-center mt-2">
                                        BROWSE ALL <span className="ms-1">&rsaquo;</span>
                                    </a>
                                </div>
                                <div className="offer-badge p-2 mb-3 ms-3">
                                    5% <br />Cashback
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Headache and Migraine */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="category-card position-relative overflow-hidden">
                            <img src={headacheMigraineImg} className="img-fluid category-img" alt="Headache and Migraine Solutions" />
                            <div className="card-content p-3 position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-between">
                                <div>
                                    <h3 className="card-title">Headache and <br />Migraine <br />Solutions</h3>
                                    <a href="#" className="browse-link text-decoration-none d-flex align-items-center mt-2">
                                        BROWSE ALL <span className="ms-1">&rsaquo;</span>
                                    </a>
                                </div>
                                <div className="offer-badge split mb-3 ms-3">
                                    <span className="off">OFF</span>
                                    <span className="flat">Flat 10%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Cold and Flu Relief */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="category-card position-relative overflow-hidden">
                            <img src={coldFluImg} className="img-fluid category-img" alt="Cold and Flu Relief" />
                            <div className="card-content p-3 position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-between">
                                <div>
                                    <h3 className="card-title">Cold and Flu <br />Relief</h3>
                                    <a href="#" className="browse-link text-decoration-none d-flex align-items-center mt-2">
                                        BROWSE ALL <span className="ms-1">&rsaquo;</span>
                                    </a>
                                </div>
                                <div className="offer-badge split mb-3 ms-3">
                                    <span className="off">OFF</span>
                                    <span className="flat">Flat 10%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CategoriesSection;
