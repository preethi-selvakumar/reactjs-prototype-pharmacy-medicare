import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useAuth } from '../context/AppContext';

import PharmacyLoginImage from '../assets/images/pharmacy_login_background.png';

import GoogleIcon from '../assets/images/google-icon.png';
import FacebookIcon from '../assets/images/facebook-icon.png';

const Login = () => {
    // get setIsAuthenticated from Auth Context
    const { setIsAuthenticated } = useAuth();
    const navigate = useNavigate();

    // Retrieve saved Email from Local Storage
    const savedEmail = localStorage.getItem('ecomUserEmail');

    // Use saved Email as initial value
    const [email, setEmail] = useState(savedEmail || '');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    // useEffect: Set local state from Local Storage email when component mounts
    useEffect(() => {
        if (savedEmail) {
            setEmail(savedEmail);
        }
    }, [savedEmail]);

    const handleLogin = (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert('Please enter both email and password.');
            return;
        }

        // Get stored password from Local Storage
        const storedPassword = localStorage.getItem('ecomUserPassword');

        // Compare entered Email and Password with Local Storage values
        if (email === savedEmail && password === storedPassword && storedPassword !== null) {

            // 1. Set login status in Auth Context
            setIsAuthenticated(true);

            alert('Login successful! Welcome back.');

            // 2. Navigate to Home Page
            navigate('/');
        } else {
            // Email/Password not found or mismatch in Local Storage
            alert('Invalid Password or Email. Please make sure you signed up first with this email and password.');
            // Clear password on failed attempt
            setPassword('');
        }
    };

    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login-page-container">
            <div className="row login-full-width-row">

                {/* Left Column: Image */}
                <div className="col-md-6 col-lg-7 login-image-col">
                    <img
                        src={PharmacyLoginImage}
                        alt="Pharmacy Staff serving customer"
                        className="login-pharmacy-image"
                    />
                </div>

                {/* Right Column: Login Form */}
                <div className="col-12 col-lg-5 login-form-col">
                    <div className="login-form-box">
                        <h2 className="login-title">Log In</h2>

                        <form onSubmit={handleLogin}>
                            {/* Email Input */}
                            <div className="login-input-group">
                                <FaEnvelope className="input-icon" />
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="login-input-field"
                                    value={email} // Email from SignUp will be here
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Password Input */}
                            <div className="login-input-group">
                                <FaLock className="input-icon" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    className="login-input-field password-input-field"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                {/* Icon button */}
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="password-toggle-btn"
                                >
                                    {showPassword ? (
                                        <FaEyeSlash className="toggle-icon" />
                                    ) : (
                                        <FaEye className="toggle-icon" />
                                    )}
                                </button>
                            </div>

                            {/* Login Button */}
                            <button type="submit" className="login-btn">
                                Log In
                            </button>

                            <Link to="/forgot-password" className="forgot-password-link">
                                Forgot password?
                            </Link>
                        </form>

                        {/* Divider */}
                        <div className="login-divider">
                            or
                        </div>

                        {/* Social Login Buttons */}
                        <div className="social-login-group">
                            {/* Google Button */}
                            <button className="social-login-btn google-btn">
                                <img src={GoogleIcon} alt="Google" className="social-icon" />
                                Google
                            </button>
                            {/* Facebook Button */}
                            <button className="social-login-btn facebook-btn">
                                <img src={FacebookIcon} alt="Facebook" className="social-icon" />
                                Facebook
                            </button>
                        </div>

                        {/* Sign Up Link */}
                        <p className="signup-text">
                            Don't have an account? <Link to="/signup" className="signup-link">Sign Up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
