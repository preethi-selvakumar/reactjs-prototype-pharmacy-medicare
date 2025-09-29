import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, InputGroup } from 'react-bootstrap';

import { BsFillSendFill } from 'react-icons/bs'; 

import googlePay from '../assets/images/google-pay.webp';
import paytm from '../assets/images/paytm.webp';
import socialIcons from '../assets/images/social-icons.jpeg';

const Footer = () => {
    // State to store email and checkbox status
    const [email, setEmail] = useState('');
    const [isAccepted, setIsAccepted] = useState(false);

    // Function to handle the form submission
    const handleSubscribe = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior

        if (!email) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!isAccepted) {
            alert("Please accept the terms and conditions to subscribe.");
            return;
        }

        // If both are valid, show the success message
        alert(`Thank you for subscribing, ${email}!`);
        // Reset the form fields after successful submission
        setEmail('');
        setIsAccepted(false);
    };

    return (
        <footer className="footer-container" id="contact-footer">
            <div className="footer-content-wrapper">
                <Container>
                    {/* 🔹 Top Row */}
                    <Row className="footer-top-row">
                        <Col md={3} className="footer-column">
                            <h5 className="footer-heading">Company</h5>
                            <ul>
                                <li>About</li>
                                <li>Press</li>
                                <li>Careers</li>
                                <li>Social Good</li>
                            </ul>
                        </Col>

                        <Col md={3} className="footer-column">
                            <h5 className="footer-heading">Community</h5>
                            <ul>
                                <li>Medicare of Business</li>
                                <li>2025 creator Report</li>
                                <li>Charities</li>
                                <li>Profile Directory</li>
                                <li>Explore Templates</li>
                            </ul>
                        </Col>

                        <Col md={3} className="footer-column">
                            <h5 className="footer-heading">Customer Service</h5>
                            <ul>
                                <li>Return Policy</li>
                                <li>Our Stores</li>
                                <li>FAQs</li>
                            </ul>
                        </Col>

                        <Col md={3} className="footer-column">
                            <h5 className="footer-heading">Contact Us</h5>
                            <ul>
                                <li>No.222 Victoria Island</li>
                                <li>SalesNo:66464941</li>
                                <li>Customer Care: 1800 00 001</li>
                                <li>info@medicare.com</li>
                            </ul>
                        </Col>
                    </Row>

                    {/* 🔹 Bottom Row */}
                    <Row className="footer-bottom-row align-items-center">
                        <Col md={12} className="footer-bottom-content d-flex justify-content-between align-items-center">
                            {/* Left: Payment Icons */}
                            <div className="d-flex align-items-center">
                                <img src={googlePay} alt="Google Pay" className="payment-icon" />
                                <img src={paytm} alt="Paytm" className="payment-icon ms-3" />
                            </div>

                            {/* Center: Social Icons */}
                            <div>
                                <img src={socialIcons} alt="Social Media" className="social-media-icons" />
                            </div>

                            {/* Right: Subscribe Form */}
                            <Form className="footer-subscribe-form" onSubmit={handleSubscribe}>
                                <p className="contact-text">
                                    Stay tuned for latest updates and new features
                                </p>
                                <InputGroup className="email-input-group">
                                    <Form.Control
                                        type="email"
                                        placeholder="Email address"
                                        className="email-input"
                                        aria-label="Email address"
                                        value={email} // Binds the input value to the state
                                        onChange={(e) => setEmail(e.target.value)} // Updates the state on change
                                        required // Makes the email field required
                                    />
                                    <Button type="submit" className="subscribe-button">
                                        <BsFillSendFill className="send-icon" />
                                        Subscribe
                                    </Button>
                                </InputGroup>
                                <Form.Group controlId="formBasicCheckbox" className="terms-checkbox mt-2">
                                    <Form.Check
                                        type="checkbox"
                                        label="I accept terms and conditions & privacy policy"
                                        checked={isAccepted} // Binds the checkbox status to the state
                                        onChange={(e) => setIsAccepted(e.target.checked)} // Updates the state on change
                                        required // Makes the checkbox required
                                    />
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;