import React, { useState } from 'react';

const PrescriptionForm = () => {
    const [userType, setUserType] = useState('patient');
    const [selectedFile, setSelectedFile] = useState(null);

    // State to hold form data for both patient and doctor
    const [formData, setFormData] = useState({
        // Patient fields
        patientFirstName: '',
        patientLastName: '',
        patientEmail: '',
        patientPhone: '',
        rndNumber: '',
        hospitalName: '',
        drugName: '',
        drugDosage: '',
        // Doctor fields
        doctorFirstName: '',
        doctorLastName: '',
        doctorEmail: '',
        doctorPhone: '',
        // Common field
        leaveNote: '',
    });

    // State to hold validation errors
    const [errors, setErrors] = useState({});

    // Generic handler for all input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        if (event.dataTransfer.files && event.dataTransfer.files[0]) {
            setSelectedFile(event.dataTransfer.files[0]);
        }
    };

    // Validation function
    const validateForm = () => {
        const newErrors = {};
        const commonFields = ['leaveNote'];

        if (userType === 'patient') {
            const patientFields = ['patientFirstName', 'patientLastName', 'patientEmail', 'patientPhone', 'rndNumber', 'hospitalName', 'drugName', 'drugDosage'];

            patientFields.forEach(field => {
                if (!formData[field]) {
                    newErrors[field] = 'This field is required.';
                }
            });

            if (!selectedFile) {
                newErrors.fileUpload = 'A prescription file is required.';
            }

            if (formData.patientEmail && !/\S+@\S+\.\S+/.test(formData.patientEmail)) {
                newErrors.patientEmail = 'Invalid email address.';
            }

            if (formData.patientPhone && !/^\d{10,15}$/.test(formData.patientPhone)) {
                newErrors.patientPhone = 'Invalid phone number.';
            }

        } else if (userType === 'doctor') {
            const doctorFields = ['doctorFirstName', 'doctorLastName', 'doctorEmail', 'doctorPhone'];

            doctorFields.forEach(field => {
                if (!formData[field]) {
                    newErrors[field] = 'This field is required.';
                }
            });

            if (!selectedFile) {
                newErrors.fileUpload = 'A prescription file is required.';
            }

            if (formData.doctorEmail && !/\S+@\S+\.\S+/.test(formData.doctorEmail)) {
                newErrors.doctorEmail = 'Invalid email address.';
            }

            if (formData.doctorPhone && !/^\d{10,15}$/.test(formData.doctorPhone)) {
                newErrors.doctorPhone = 'Invalid phone number.';
            }
        }

        // Validate common fields
        commonFields.forEach(field => {
            if (!formData[field]) {
                newErrors[field] = 'This field is required.';
            }
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = validateForm();

        if (isValid) {
            // Show an alert for successful submission
            alert('Prescription submitted successfully!');

            console.log("Form submitted successfully!", { userType, formData, selectedFile });

            // Reset the form after successful submission
            setFormData({
                patientFirstName: '',
                patientLastName: '',
                patientEmail: '',
                patientPhone: '',
                rndNumber: '',
                hospitalName: '',
                drugName: '',
                drugDosage: '',
                doctorFirstName: '',
                doctorLastName: '',
                doctorEmail: '',
                doctorPhone: '',
                leaveNote: '',
            });
            setSelectedFile(null);
            setErrors({});

        } else {
            console.log("Form has validation errors.");
        }
    };

    return (
        <div className="prescription-form-container">
            <h3 className="prescription-form-title">Who do you identify as?</h3>
            <p className="prescription-form-description">
                Please ensure you give accurate information on your prescription
                including name, strength and quantity of medication.
            </p>

            <div className="prescription-form-toggle">
                <button
                    className={`prescription-form-toggle-button ${userType === 'patient' ? 'active' : ''}`}
                    onClick={() => setUserType('patient')}
                >
                    As a Patient
                </button>
                <button
                    className={`prescription-form-toggle-button ${userType === 'doctor' ? 'active' : ''}`}
                    onClick={() => setUserType('doctor')}
                >
                    As a Doctor
                </button>
            </div>

            <form onSubmit={handleSubmit} className="prescription-form-content">
                {userType === 'patient' && (
                    <>
                        {/* Patient form fields */}
                        <div className="prescription-form-row two-column">
                            <div className="prescription-form-group">
                                <label htmlFor="patientFirstName" className="prescription-form-label">Patient First Name</label>
                                <input
                                    type="text"
                                    className={`prescription-form-input ${errors.patientFirstName ? 'has-error' : ''}`}
                                    id="patientFirstName"
                                    name="patientFirstName"
                                    value={formData.patientFirstName}
                                    onChange={handleChange}
                                />
                                {errors.patientFirstName && <span className="error-message">{errors.patientFirstName}</span>}
                            </div>
                            <div className="prescription-form-group">
                                <label htmlFor="patientLastName" className="prescription-form-label">Patient Last Name</label>
                                <input
                                    type="text"
                                    className={`prescription-form-input ${errors.patientLastName ? 'has-error' : ''}`}
                                    id="patientLastName"
                                    name="patientLastName"
                                    value={formData.patientLastName}
                                    onChange={handleChange}
                                />
                                {errors.patientLastName && <span className="error-message">{errors.patientLastName}</span>}
                            </div>
                        </div>

                        <div className="prescription-form-row two-column">
                            <div className="prescription-form-group">
                                <label htmlFor="patientEmail" className="prescription-form-label">Patient Email</label>
                                <input
                                    type="email"
                                    className={`prescription-form-input ${errors.patientEmail ? 'has-error' : ''}`}
                                    id="patientEmail"
                                    name="patientEmail"
                                    value={formData.patientEmail}
                                    onChange={handleChange}
                                />
                                {errors.patientEmail && <span className="error-message">{errors.patientEmail}</span>}
                            </div>
                            <div className="prescription-form-group">
                                <label htmlFor="patientPhone" className="prescription-form-label">Patient Phone number</label>
                                <input
                                    type="tel"
                                    className={`prescription-form-input ${errors.patientPhone ? 'has-error' : ''}`}
                                    id="patientPhone"
                                    name="patientPhone"
                                    value={formData.patientPhone}
                                    onChange={handleChange}
                                />
                                {errors.patientPhone && <span className="error-message">{errors.patientPhone}</span>}
                            </div>
                        </div>

                        <div className="prescription-form-row two-column">
                            <div className="prescription-form-group">
                                <label htmlFor="rndNumber" className="prescription-form-label">RND Number</label>
                                <input
                                    type="text"
                                    className={`prescription-form-input ${errors.rndNumber ? 'has-error' : ''}`}
                                    id="rndNumber"
                                    name="rndNumber"
                                    value={formData.rndNumber}
                                    onChange={handleChange}
                                />
                                {errors.rndNumber && <span className="error-message">{errors.rndNumber}</span>}
                            </div>
                            <div className="prescription-form-group">
                                <label htmlFor="hospitalName" className="prescription-form-label">Hospital Name</label>
                                <input
                                    type="text"
                                    className={`prescription-form-input ${errors.hospitalName ? 'has-error' : ''}`}
                                    id="hospitalName"
                                    name="hospitalName"
                                    value={formData.hospitalName}
                                    onChange={handleChange}
                                />
                                {errors.hospitalName && <span className="error-message">{errors.hospitalName}</span>}
                            </div>
                        </div>

                        <div className="prescription-form-row two-column">
                            <div className="prescription-form-group">
                                <label htmlFor="drugName" className="prescription-form-label">Drug Name</label>
                                <input
                                    type="text"
                                    className={`prescription-form-input ${errors.drugName ? 'has-error' : ''}`}
                                    id="drugName"
                                    name="drugName"
                                    value={formData.drugName}
                                    onChange={handleChange}
                                />
                                {errors.drugName && <span className="error-message">{errors.drugName}</span>}
                            </div>
                            <div className="prescription-form-group">
                                <label htmlFor="drugDosage" className="prescription-form-label">Drug Dosage</label>
                                <input
                                    type="text"
                                    className={`prescription-form-input ${errors.drugDosage ? 'has-error' : ''}`}
                                    id="drugDosage"
                                    name="drugDosage"
                                    value={formData.drugDosage}
                                    onChange={handleChange}
                                />
                                {errors.drugDosage && <span className="error-message">{errors.drugDosage}</span>}
                            </div>
                        </div>
                    </>
                )}

                {userType === 'doctor' && (
                    <>
                        {/* Doctor form fields */}
                        <div className="prescription-form-row two-column">
                            <div className="prescription-form-group">
                                <label htmlFor="doctorFirstName" className="prescription-form-label">First Name</label>
                                <input
                                    type="text"
                                    className={`prescription-form-input ${errors.doctorFirstName ? 'has-error' : ''}`}
                                    id="doctorFirstName"
                                    name="doctorFirstName"
                                    value={formData.doctorFirstName}
                                    onChange={handleChange}
                                />
                                {errors.doctorFirstName && <span className="error-message">{errors.doctorFirstName}</span>}
                            </div>
                            <div className="prescription-form-group">
                                <label htmlFor="doctorLastName" className="prescription-form-label">Last Name</label>
                                <input
                                    type="text"
                                    className={`prescription-form-input ${errors.doctorLastName ? 'has-error' : ''}`}
                                    id="doctorLastName"
                                    name="doctorLastName"
                                    value={formData.doctorLastName}
                                    onChange={handleChange}
                                />
                                {errors.doctorLastName && <span className="error-message">{errors.doctorLastName}</span>}
                            </div>
                        </div>
                        <div className="prescription-form-row two-column">
                            <div className="prescription-form-group">
                                <label htmlFor="doctorEmail" className="prescription-form-label">Email</label>
                                <input
                                    type="email"
                                    className={`prescription-form-input ${errors.doctorEmail ? 'has-error' : ''}`}
                                    id="doctorEmail"
                                    name="doctorEmail"
                                    value={formData.doctorEmail}
                                    onChange={handleChange}
                                />
                                {errors.doctorEmail && <span className="error-message">{errors.doctorEmail}</span>}
                            </div>
                            <div className="prescription-form-group">
                                <label htmlFor="doctorPhone" className="prescription-form-label">Phone Number</label>
                                <input
                                    type="tel"
                                    className={`prescription-form-input ${errors.doctorPhone ? 'has-error' : ''}`}
                                    id="doctorPhone"
                                    name="doctorPhone"
                                    value={formData.doctorPhone}
                                    onChange={handleChange}
                                />
                                {errors.doctorPhone && <span className="error-message">{errors.doctorPhone}</span>}
                            </div>
                        </div>
                    </>
                )}

                {/* components for both Patient and Doctor */}
                <div
                    className="prescription-form-upload"
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                >
                    <div className="prescription-form-upload-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 16L12 8M12 8L15 11M12 8L9 11M3 15C3 17.7614 5.23858 20 8 20H16C18.7614 20 21 17.7614 21 15C21 12.2386 18.7614 10 16 10H14C14 7.23858 11.7614 5 9 5C6.23858 5 4 7.23858 4 10C4 12.7614 6.23858 15 9 15H12"
                                stroke="#4CAF50" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round" />
                        </svg>
                    </div>
                    <p className="prescription-form-upload-text">Drag & Drop the image file or PDF File to Upload</p>
                    <input
                        type="file"
                        id="fileUpload"
                        className="prescription-form-file-hidden"
                        onChange={handleFileChange}
                        accept=".jpeg,.jpg,.pdf,.png"
                    />
                    <button
                        type="button"
                        className="prescription-form-select-file"
                        onClick={() => document.getElementById('fileUpload').click()}
                    >
                        Select File
                    </button>
                    {selectedFile && (
                        <p className="prescription-form-file-selected">
                            Selected: {selectedFile.name}
                        </p>
                    )}
                </div>
                {errors.fileUpload && <span className="error-message file-error-message">{errors.fileUpload}</span>}

                {/* New "Leave a Note" text area */}
                <div className="prescription-form-row">
                    <div className="prescription-form-group">
                        <label htmlFor="leaveNote" className="prescription-form-label">Leave a Note</label>
                        <textarea
                            className={`prescription-form-textarea ${errors.leaveNote ? 'has-error' : ''}`}
                            id="leaveNote"
                            name="leaveNote"
                            value={formData.leaveNote}
                            onChange={handleChange}
                        ></textarea>
                        {errors.leaveNote && <span className="error-message">{errors.leaveNote}</span>}
                    </div>
                </div>

                <button type="submit" className="prescription-form-submit">
                    Submit Prescription
                </button>
            </form>
        </div>
    );
};

export default PrescriptionForm;