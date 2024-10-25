import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Local_host, PartnerApi } from '../utils/constent';

const PartnerSignUp = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    otp: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    contactNumber: '',
    companyName: '',
    country: '',
    address: '',
    listingTitle: '',
    photos: [],
    description: '',
    seats: '',
    vehicleReg: '',
    vehicleModel: '',
    specialReq: '',
    bookingFee: '',
    mileage: '',
    category: ''
  });
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'photos') {
      setFormData((prevData) => ({
        ...prevData,
        photos: Array.from(files),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const sendOtp = async () => {
    try {
      const response = await fetch(`${PartnerApi}/api/send-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.email }),
      });

      if (response.ok) {
        setOtpSent(true);
        setError('');
      } else {
        throw new Error('Failed to send OTP');
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      setError('Failed to send OTP. Please try again.');
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await fetch(`${PartnerApi}/api/verify-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          otp: formData.otp,
        }),
      });

      const data = await response.json();
      if (response.ok && data.message === 'OTP verified successfully') {
        setOtpVerified(true);
        setError('');
      } else {
        setError('Invalid OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      setError('Failed to verify OTP. Please try again.');
    }
  };

  const validateStep = () => {
    const currentErrors = {};
    switch (step) {
      case 1:
        if (!formData.email) currentErrors.email = 'Email is required';
        if (!otpVerified) currentErrors.otp = 'OTP verification is required';
        if (!formData.password || formData.password.length < 10) currentErrors.password = 'Password must be at least 10 characters';
        if (formData.password !== formData.confirmPassword) currentErrors.confirmPassword = 'Passwords must match';
        break;
      case 2:
        if (!formData.firstName) currentErrors.firstName = 'First name is required';
        if (!formData.lastName) currentErrors.lastName = 'Last name is required';
        if (!formData.contactNumber || !/^\d+$/.test(formData.contactNumber)) currentErrors.contactNumber = 'Contact number must be numeric and is required';
        break;
      case 3:
        if (!formData.category) currentErrors.category = 'Category is required';
        if (!formData.companyName) currentErrors.companyName = 'Company name is required';
        if (!formData.country) currentErrors.country = 'Country/Region is required';
        if (!formData.address) currentErrors.address = 'Address is required';
        if (!formData.listingTitle) currentErrors.listingTitle = 'Listing title is required';
        if (formData.photos.length === 0) currentErrors.photos = 'At least one photo is required';
        if (!formData.description) currentErrors.description = 'Description is required';
        if (!formData.seats) currentErrors.seats = 'Number of seats is required';
        if (!formData.vehicleReg) currentErrors.vehicleReg = 'Vehicle registration number is required';
        if (!formData.vehicleModel) currentErrors.vehicleModel = 'Vehicle make & model is required';
        if (!formData.bookingFee) currentErrors.bookingFee = 'Booking fee is required';
        if (!formData.mileage) currentErrors.mileage = 'Mileage included is required';
        break;
      default:
        break;
    }
    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateStep()) {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        if (key === 'photos') {
          formData.photos.forEach((photo) => formDataToSend.append('photos', photo));
        } else {
          formDataToSend.append(key, formData[key]);
        }
      });

      try {
        const response = await fetch(`${PartnerApi}/api/partnersignup`, {
          method: 'POST',
          body: formDataToSend,
        });

        if (response.ok) {
          setShowSuccess(true);
          navigate('/Vendors');
        } else {
          throw new Error('Sign-up failed');
        }
      } catch (error) {
        console.error('Error during sign-up:', error);
        setError('Sign-up failed. Please try again.');
      }
    }
  };
  
  return (
    <Container>
      <h1>Partner Sign-Up</h1>
      {showSuccess && <Alert variant="success">Sign-up successful! Redirecting...</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        {step === 1 && (
          <div>
            <h2>Account Information</h2>
            <Form.Group>
              <Form.Control
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>
            {otpSent ? (
              <>
                <Form.Group>
                  <Form.Control
                    type="text"
                    name="otp"
                    placeholder="OTP"
                    value={formData.otp}
                    onChange={handleChange}
                    isInvalid={!!errors.otp}
                  />
                  <Form.Control.Feedback type="invalid">{errors.otp}</Form.Control.Feedback>
                </Form.Group>
                <Button onClick={verifyOtp}>Verify OTP</Button>
              </>
            ) : (
              <Button onClick={sendOtp}>Send OTP</Button>
            )}
            <Form.Group>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                isInvalid={!!errors.confirmPassword}
              />
              <Form.Control.Feedback type="invalid">{errors.confirmPassword}</Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="button" onClick={nextStep}>
              Next
            </Button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2>Personal Information</h2>
            <Form.Group>
              <Form.Control
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                isInvalid={!!errors.firstName}
              />
              <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                isInvalid={!!errors.lastName}
              />
              <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="contactNumber"
                placeholder="Contact Number"
                value={formData.contactNumber}
                onChange={handleChange}
                isInvalid={!!errors.contactNumber}
              />
              <Form.Control.Feedback type="invalid">{errors.contactNumber}</Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="button" onClick={prevStep}>
              Back
            </Button>
            <Button variant="primary" type="button" onClick={nextStep}>
              Next
            </Button>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2>Business Details</h2>
            <Form.Group>
              <Form.Control
                type="text"
                name="category"
                placeholder="Category"
                value={formData.category}
                onChange={handleChange}
                isInvalid={!!errors.category}
              />
              <Form.Control.Feedback type="invalid">{errors.category}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleChange}
                isInvalid={!!errors.companyName}
              />
              <Form.Control.Feedback type="invalid">{errors.companyName}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
                isInvalid={!!errors.country}
              />
              <Form.Control.Feedback type="invalid">{errors.country}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                isInvalid={!!errors.address}
              />
              <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="listingTitle"
                placeholder="Listing Title"
                value={formData.listingTitle}
                onChange={handleChange}
                isInvalid={!!errors.listingTitle}
              />
              <Form.Control.Feedback type="invalid">{errors.listingTitle}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Control
                as="textarea"
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                isInvalid={!!errors.description}
              />
              <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="number"
                name="seats"
                placeholder="Number of Seats"
                value={formData.seats}
                onChange={handleChange}
                isInvalid={!!errors.seats}
              />
              <Form.Control.Feedback type="invalid">{errors.seats}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="vehicleReg"
                placeholder="Vehicle Registration Number"
                value={formData.vehicleReg}
                onChange={handleChange}
                isInvalid={!!errors.vehicleReg}
              />
              <Form.Control.Feedback type="invalid">{errors.vehicleReg}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="vehicleModel"
                placeholder="Vehicle Make & Model"
                value={formData.vehicleModel}
                onChange={handleChange}
                isInvalid={!!errors.vehicleModel}
              />
              <Form.Control.Feedback type="invalid">{errors.vehicleModel}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="number"
                name="bookingFee"
                placeholder="Booking Fee"
                value={formData.bookingFee}
                onChange={handleChange}
                isInvalid={!!errors.bookingFee}
              />
              <Form.Control.Feedback type="invalid">{errors.bookingFee}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="number"
                name="mileage"
                placeholder="Mileage Included"
                value={formData.mileage}
                onChange={handleChange}
                isInvalid={!!errors.mileage}
              />
              <Form.Control.Feedback type="invalid">{errors.mileage}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Upload Photos</Form.Label>
              <Form.Control
                type="file"
                name="photos"
                onChange={handleChange}
                multiple
                isInvalid={!!errors.photos}
              />
              <Form.Control.Feedback type="invalid">{errors.photos}</Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="button" onClick={prevStep}>
              Back
            </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        )}
      </Form>
    </Container>
  );
};

export default PartnerSignUp;
