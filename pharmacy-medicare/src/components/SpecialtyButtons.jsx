import React from 'react';

const specialties = [
    'Cardiology',
    'Neurology',
    'Pediatrics',
    'Gastroenterology',
    'Nephrology',
    'Gynaecology',
    'Orthopaedics',
    'Urology',
];

const SpecialtyButtons = () => {
    return (
        <div className="specialty-buttons-wrapper">
            <div className="container-fluid">
                <div className="specialty-flex-container">
                    {specialties.map((specialty, index) => (
                        <div key={index} className="specialty-item-flex">
                            <div className="specialty-btn">
                                {specialty}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SpecialtyButtons;