import React from 'react';
import { BsArrowRight, BsStarFill } from 'react-icons/bs';

import avatar1 from '../assets/images/avatar1.png';
import avatar2 from '../assets/images/avatar2.png';
import avatar3 from '../assets/images/avatar3.png';
import avatar4 from '../assets/images/avatar4.png';

const testimonialsData = [
    {
        id: 1,
        text: "I had a great experience with the healthcare team and pharmacy services. The doctors were very attentive and took the time to explain my diagnosis in detail. The staff was kind and professional, and I felt genuinely cared for throughout my visit.",
        author: "Jhon",
        avatar: avatar1,
        rating: 4
    },
    {
        id: 2,
        text: "I had a great experience with the healthcare team and pharmacy services. The doctors were very attentive and took the time to explain my diagnosis in detail. The staff was kind and professional, and I felt genuinely cared for throughout my visit.",
        author: "Jhon",
        avatar: avatar2,
        rating: 4
    },
    {
        id: 3,
        text: "I had a great experience with the healthcare team and pharmacy services. The doctors were very attentive and took the time to explain my diagnosis in detail. The staff was kind and professional, and I felt genuinely cared for throughout my visit.",
        author: "Jhon",
        avatar: avatar3,
        rating: 4
    },
    {
        id: 4,
        text: "I had a great experience with the healthcare team and pharmacy services. The doctors were very attentive and took the time to explain my diagnosis in detail. The staff was kind and professional, and I felt genuinely cared for throughout my visit.",
        author: "Jhon",
        avatar: avatar4,
        rating: 4
    },
];

const Testimonials = () => {
    return (
        <div className="testimonials-container">
            <div className="container-fluid">
                <div className="row align-items-center mb-4">
                    <div className="col">
                        <h2 className="testimonials-heading">What Our Customers Say</h2>
                        <div className="d-flex align-items-center mt-3">
                            {[...Array(5)].map((_, i) => (
                                <BsStarFill key={i} className="star-icon" />
                            ))}
                            <span className="reviews-count">480 Reviews on</span>
                            <BsStarFill className="turstpilot-star-icon ms-1" />
                            <span className="turstpilot-text ms-1">Turstpilot</span>
                        </div>
                    </div>
                    <div className="col-auto">
                        <button className="next-button">
                            Next <BsArrowRight className="ms-2" />
                        </button>
                    </div>
                </div>
                <div className="row g-4">
                    {testimonialsData.map((testimonial) => (
                        <div key={testimonial.id} className="col-12 col-md-6 col-lg-3 d-flex">
                            <div className="testimonial-card w-100 p-4">
                                <div className="testimonial-avatar-container">
                                    <div className="testimonial-stars-on-hover">
                                        {[...Array(5)].map((_, i) => ( // Changed to 5 stars
                                            <BsStarFill key={i} className="testimonial-star-on-hover" />
                                        ))}
                                    </div>
                                    <img src={testimonial.avatar} alt={`Avatar of ${testimonial.author}`} className="testimonial-avatar" />
                                </div>
                                <p className="testimonial-text mt-3">
                                    {testimonial.text}
                                </p>
                                <p className="testimonial-author">{testimonial.author}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;