import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AppContext';

import Navbar from '../components/Navbar';
import HomeBanner from '../components/HomeBanner';
import MedicalCategoriesSlider from '../components/MedicalCategoriesSlider';
import HomeFeaturedProducts from '../components/HomeFeaturedProducts';
import PrescriptionOrder from '../components/PrescriptionOrder';
import FeaturedBrands from '../components/FeaturedBrands';
import NewArrivals from '../components/NewArrivals';
import CategoriesSection from '../components/CategoriesSection';
import BabyFoodCollection from '../components/BabyFoodCollection';
import MostPopularProducts from '../components/MostPopularProducts';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Home = () => {
    // Get isFirstTimeUser, finishFirstTimeVisit, and isAuthenticated from Auth Context
    const { isFirstTimeUser, finishFirstTimeVisit, isAuthenticated } = useAuth(); // isAuthenticated included
    const navigate = useNavigate();

    // 1. Initial Check on Home Page load (Alert & Redirect)
    useEffect(() => {
        // User must be a first-time visitor, but should NOT be logged in
        if (isFirstTimeUser && !isAuthenticated) {
            // First time user alert
            const shouldSignup = window.confirm(
                "Welcome to our website! To continue exploring, please click 'OK' to Sign Up first."
            );

            // Mark the first visit as finished in the Context
            finishFirstTimeVisit();

            if (shouldSignup) {
                navigate('/signup'); // Automatically navigate to the Signup page
            }
        }
    }, [isFirstTimeUser, finishFirstTimeVisit, navigate, isAuthenticated]); // Added isAuthenticated to dependencies

    // 2. Handler to block all clicks and enforce signup
    const handleHomeClick = (e) => {
        // This function will execute ONLY IF isFirstTimeUser is true AND NOT authenticated
        if (isFirstTimeUser && !isAuthenticated) {
            // Prevent default behavior for links and buttons
            if (e.target.closest('a') || e.target.closest('button')) {
                e.preventDefault();
            }
            // Show a reminder alert and navigate to Signup
            alert("Please Sign Up to proceed and view the website content.");
            navigate('/signup');
        }
    };

    // Attach the onClick handler to the main container
    return (
        <div
            // The handler is active only if isFirstTimeUser is true AND NOT authenticated
            onClick={isFirstTimeUser && !isAuthenticated ? handleHomeClick : undefined}
            // Ensure the cursor pointer works normally. 'auto' is fine.
            style={{ pointerEvents: 'auto' }}
        >
            <Navbar />
            <HomeBanner />
            <MedicalCategoriesSlider />
            <HomeFeaturedProducts />
            <PrescriptionOrder />
            <FeaturedBrands />
            <NewArrivals />
            <CategoriesSection />
            <BabyFoodCollection />
            <MostPopularProducts />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default Home;
