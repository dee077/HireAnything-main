import React, { useState } from 'react';
import { Local_host } from '../utils/constent';

// Contactmy Component
const Contactmy = () => {
  return (
    <div className="contact-us" style={{ flex: 0.3 }}>
      <h1>Contact Us</h1>
      <div className="contact-details">
        <p><strong>Email:</strong> hireanything2024@gmail.com</p>
        <p><strong>Phone:</strong> +44 7800 909102</p>
        <p><strong>Office Address:</strong></p>
        <p>
          Hire Anything<br />
          96 Greenside, Slough<br />
          Berkshire, England, United Kingdom<br />
        </p>
      </div>
    </div>
  );
};

// ContactForm Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    enquiryType: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${Local_host}/api/contact/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message); // Show success message
      } else {
        alert(result.message); // Show error message
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('There was a problem submitting the form');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form" style={{ flex: 0.7 }}>


      <div className="form-group">
        <label htmlFor="firstName">First Name *</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Enter your First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="lastName">Last Name *</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Enter your Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter a valid email address"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone *</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Enter a valid Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="enquiryType">Enquiry Type *</label>
        <select
          className="u-input u-input-rectangle u-palette-1-light-3"
          name="enquiryType"
          id="enquiryType"
          value={formData.enquiryType}
          onChange={handleChange}
          required
        >
          <option value="">- Select -</option>
          <option value="New Booking Enquiry">New Booking Enquiry</option>
          <option value="Existing Booking Enquiry">Existing Booking Enquiry</option>
          <option value="Partner Enquiry">Partner Enquiry</option>
          <option value="PR / Media Enquiry">PR / Media Enquiry</option>
          <option value="SEO / Marketing Enquiry">SEO / Marketing Enquiry</option>
          <option value="Something Else">Something Else</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          placeholder="Enter your message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

// Main Contact Component
const Contact = () => {
  return (
    <div className="contact-container" style={{ display: 'flex' }}>
      <Contactmy />
      <ContactForm />
    </div>
  );
};

export default Contact;
