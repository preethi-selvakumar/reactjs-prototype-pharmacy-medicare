import React from 'react';

import BoneJointImg from '../assets/images/joint-care.png';
import DiabetesImg from '../assets/images/diabetes.jpeg';
import KidneyImg from '../assets/images/kidneycare.jpeg';
import LiverImg from '../assets/images/liver-care.jpg';
import RespiratoryImg from '../assets/images/respiratory.jpg';
import EyeCareImg from '../assets/images/eye-care.jpg';

const sliderCategories = [
    { name: 'Bone & Joint Care', image: BoneJointImg },
    { name: 'Diabetes Care', image: DiabetesImg },
    { name: 'Kidney Care', image: KidneyImg },
    { name: 'Liver Care', image: LiverImg },
    { name: 'Respiratory Care', image: RespiratoryImg },
    { name: 'Eye Care', image: EyeCareImg },
];

const MedicalCategoriesSlider = () => {
    return (
        <div className="medical-slider-wrapper">
            <div className="medical-slider-scroll-container">
                <div className="row medical-slider-row">
                    {sliderCategories.map((category, index) => (
                        <div key={index} className="medical-slider-col">
                            <div className="medical-slider-card">
                                <div className="medical-slider-image-wrapper">
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="medical-slider-image"
                                    />
                                </div>
                                <p className="medical-slider-name">{category.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MedicalCategoriesSlider;