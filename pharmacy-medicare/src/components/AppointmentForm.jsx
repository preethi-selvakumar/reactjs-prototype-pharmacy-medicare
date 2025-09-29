import React, { useState } from 'react';
import SuccessImage from '../assets/images/appointment-image.png'; 

const AppointmentForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        specialty: '',
        doctor: '',
        date: '',
    });

    const [errors, setErrors] = useState({});
    const [showPopup, setShowPopup] = useState(false);

    const validateForm = () => {
        const newErrors = {};
        const { name, phone, email, date } = formData;

        if (!name) newErrors.name = 'Patient / Visitor Name is required.';
        if (!phone) {
            newErrors.phone = 'Phone / Mobile is required.';
        } else if (!/^\d{10}$/.test(phone)) {
            newErrors.phone = 'Please enter a valid 10-digit phone number.';
        }
        if (!email) {
            newErrors.email = 'Email Address is required.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Please enter a valid email address.';
        }
        if (!date) newErrors.date = 'Preferred Date is required.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' }); // Clear error on change
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setShowPopup(true);
        }
    };

    const handlePopupClick = () => {
        setShowPopup(false);
        setFormData({
            name: '',
            phone: '',
            email: '',
            specialty: '',
            doctor: '',
            date: '',
        });
        // Redirect to home page
        window.location.href = '/';
    };

    return (
        <div className="appointment-form-wrapper">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8">
                        <form className="appointment-form" onSubmit={handleSubmit}>
                            <div className="row">
                                {/* Personal Information Section */}
                                <div className="col-12 col-md-6 form-section-column">
                                    <div className="form-section-container">
                                        <h2 className="section-title">Personal Information</h2>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className={`form-input-field ${errors.name ? 'input-error' : ''}`}
                                                placeholder="Patient / Visitor Name *"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                            {errors.name && <div className="error-message">{errors.name}</div>}
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="tel"
                                                className={`form-input-field ${errors.phone ? 'input-error' : ''}`}
                                                placeholder="Phone / Mobile *"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                            />
                                            {errors.phone && <div className="error-message">{errors.phone}</div>}
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                className={`form-input-field ${errors.email ? 'input-error' : ''}`}
                                                placeholder="Email Address *"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                            {errors.email && <div className="error-message">{errors.email}</div>}
                                        </div>
                                    </div>
                                </div>
                                {/* Appointment Schedule Section */}
                                <div className="col-12 col-md-6 form-section-column">
                                    <div className="form-section-container">
                                        <h2 className="section-title">Appointment Schedule</h2>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-input-field"
                                                placeholder="Cardiology"
                                                name="specialty"
                                                value={formData.specialty}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-input-field"
                                                placeholder="Dr. Jhon"
                                                name="doctor"
                                                value={formData.doctor}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className={`form-input-field ${errors.date ? 'input-error' : ''}`}
                                                placeholder="Preferred Date *"
                                                name="date"
                                                value={formData.date}
                                                onFocus={(e) => e.target.type = 'date'}
                                                onBlur={(e) => e.target.type = 'text'}
                                                onChange={handleChange}
                                                required
                                            />
                                            {errors.date && <div className="error-message">{errors.date}</div>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 text-center mt-4">
                                    <button type="submit" className="submit-btn">submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Success Popup */}
            {showPopup && (
                <div className="success-popup-overlay" onClick={handlePopupClick}>
                    <div className="success-popup-content">
                        <img src={SuccessImage} alt="Success" className="popup-image" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default AppointmentForm;