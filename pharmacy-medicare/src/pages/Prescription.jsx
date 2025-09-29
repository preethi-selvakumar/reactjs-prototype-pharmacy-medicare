import React from 'react';
import Navbar from '../components/Navbar';
import PrescriptionSection from '../components/PrescriptionSection';
import PrescriptionForm from '../components/PrescriptionForm';
import Footer from '../components/Footer';

const PrescriptionPage = () => {
    return (
        <div>
            <Navbar />
            <PrescriptionSection />
            <PrescriptionForm />
            <Footer />
        </div>
    );
};

export default PrescriptionPage;