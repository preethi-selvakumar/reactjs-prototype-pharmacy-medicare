import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { FaLock, FaEye, FaEyeSlash, FaUser, FaEnvelope } from "react-icons/fa";

import DoctorImage from "../assets/images/doctor_signup_image.png";
import GoogleIcon from "../assets/images/google-icon.png";
import FacebookIcon from "../assets/images/facebook-icon.png";
import AppleIcon from "../assets/images/apple-icon.png";

const SignUp = () => {
    // States: Name, Email, Password
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Store error messages
    const [errors, setErrors] = useState({});

    // Toggle password visibility
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => setShowPassword(!showPassword);

    const navigate = useNavigate();

    // Function: Validate Email format
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    // Function: Validate Password format
    const validatePassword = (password) => {
        const improvedRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        return improvedRegex.test(password);
    };

    // Main function: Validate all form inputs
    const validateForm = () => {
        let formErrors = {};
        let isValid = true;

        if (name.trim() === '') {
            formErrors.name = "Name is required.";
            isValid = false;
        }

        if (email.trim() === '') {
            formErrors.email = "Email is required.";
            isValid = false;
        } else if (!validateEmail(email)) {
            formErrors.email = "Please enter a valid email address.";
            isValid = false;
        }

        if (!validatePassword(password)) {
            formErrors.password = "Password must be 8+ characters and include at least one uppercase letter, one lowercase letter, and one number.";
            isValid = false;
        }

        setErrors(formErrors);
        return isValid;
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

        // Save Email to Local Storage
        localStorage.setItem('ecomUserEmail', email);
        // Save Password to Local Storage
        localStorage.setItem('ecomUserPassword', password);

        // Show alert for successful registration
        const isConfirmed = window.confirm(
            `Registration successful! Your Email: ${email}. \nClick 'OK' to proceed to the Login page.`
        );

        if (isConfirmed) {
            navigate('/login');
        }
    };

    return (
        <div className="signup-page-container">
            <div className="row signup-full-row">
                {/* Left Column: Image */}
                <div className="col-md-6 signup-image-col">
                    <img src={DoctorImage} alt="Doctor" className="signup-doctor-image" />
                </div>

                {/* Right Column: Sign Up Form */}
                <div className="col-12 col-md-6 signup-form-col">
                    <div className="signup-form-box">
                        <p className="signup-subtitle">LET'S GET YOU STARTED</p>
                        <h2 className="signup-title">Create an Account</h2>
                        <form onSubmit={handleSignUp}>
                            {/* Name Input */}
                            <div className="signup-input-group">
                                <FaUser className="signup-input-icon" />
                                <input
                                    type="text" placeholder="Your Name"
                                    className={`signup-input-field ${errors.name ? 'input-error-border' : ''}`}
                                    required value={name}
                                    onChange={(e) => { setName(e.target.value); setErrors({ ...errors, name: '' }); }}
                                />
                            </div>
                            {errors.name && <p className="error-message">{errors.name}</p>}

                            {/* Email Input */}
                            <div className="signup-input-group">
                                <FaEnvelope className="signup-input-icon" />
                                <input
                                    type="email" placeholder="Email"
                                    className={`signup-input-field ${errors.email ? 'input-error-border' : ''}`}
                                    required value={email}
                                    onChange={(e) => { setEmail(e.target.value); setErrors({ ...errors, email: '' }); }}
                                />
                            </div>
                            {errors.email && <p className="error-message">{errors.email}</p>}

                            {/* Password Input */}
                            <div className="signup-input-group">
                                <FaLock className="signup-input-icon" />
                                <input
                                    type={showPassword ? "text" : "password"} placeholder="Password"
                                    className={`signup-input-field password-input ${errors.password ? 'input-error-border' : ''}`}
                                    required value={password}
                                    onChange={(e) => { setPassword(e.target.value); setErrors({ ...errors, password: '' }); }}
                                />
                                <button type="button" onClick={togglePassword} className="signup-password-toggle">
                                    {showPassword ? (<FaEyeSlash className="signup-toggle-icon" />) : (<FaEye className="signup-toggle-icon" />)}
                                </button>
                            </div>
                            {errors.password && <p className="error-message">{errors.password}</p>}

                            {/* Submit Button */}
                            <button type="submit" className="signup-btn">
                                GET STARTED
                            </button>
                        </form>

                        {/* Divider and Social Login */}
                        <div className="signup-divider">Or</div>
                        <div className="signup-social-group">
                            <button className="signup-social-btn"><img src={GoogleIcon} alt="Google" className="signup-social-icon" />Sign up with Google</button>
                            <button className="signup-social-btn"><img src={FacebookIcon} alt="Facebook" className="signup-social-icon" />Sign up with Facebook</button>
                            <button className="signup-social-btn"><img src={AppleIcon} alt="Apple" className="signup-social-icon" />Sign up with Apple</button>
                        </div>

                        {/* Login Redirect */}
                        <p className="signup-login-text">
                            Already have an account?{" "}
                            <Link to="/login" className="signup-login-link">LOGIN HERE</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
