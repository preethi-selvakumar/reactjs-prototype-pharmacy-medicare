import React from 'react';
import DoctorConsultationSection from '../components/DoctorConsultationSection';
import AppointmentForm from '../components/AppointmentForm';

const Consultation = () => {
    return (
        <div className="consultation-page-wrapper">
            <DoctorConsultationSection />
            <AppointmentForm />
        </div>
    );
};

export default Consultation;