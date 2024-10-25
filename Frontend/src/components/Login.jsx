import React, { useState } from 'react';
import { Form, Button, Container, Alert, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Local_host } from '../utils/constent';

// Function to check if user is authenticated
const isAuthenticated = () => {
  const token = localStorage.getItem('authToken');
  console.log('Checking auth token:', token); // Log the token for debugging
  return token !== null; // Check if token exists
};

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false); // State for success message
  const [loading, setLoading] = useState(false); // State for loading indicator
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true); // Start loading
    try {
      const response = await axios.post(`${Local_host}/api/auth/login`, form, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Full Response:', response);
      console.log('Response Data:', response.data);

      if (response.data.token) {
        // Store the token in localStorage
        localStorage.setItem('authToken', response.data.token);
        setSuccess(true); // Set success state to true
        setError(null); // Clear any existing errors
        setTimeout(() => {
          navigate('/Vendors'); // Redirect to the Vendor page after a short delay
        }, 2000); // Delay for showing the success message
      } else {
        setError('Invalid credentials');
        setSuccess(false);
      }
    } catch (error) {
      console.error('There was an error!', error);
      if (error.response && error.response.status === 401) {
        setError('Unauthorized: Invalid email or password');
      } else {
        setError('Login failed. Please try again.');
      }
      setSuccess(false);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <Container className="mt-5 sign">
      <Form onSubmit={handleSubmit} className='siginform'>
        <h3>Sign In</h3>
        {success && (
          <Alert variant="success">
            Login successful! Redirecting to the Offering Page...
          </Alert>
        )}
        {error && <Alert variant="danger">{error}</Alert>}
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={form.email}
            onChange={handleChange}
            required // Add required for accessibility
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
            required // Add required for accessibility
          />
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Check type="checkbox" variant="primary" label="Remember me" />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={loading}>
          {loading ? <Spinner animation="border" size="sm" /> : 'Submit'}
        </Button>
        <p className="mt-3">
           <a href="#" className='primary-btn'> Forgot password?</a>
        </p>
      </Form>
    </Container>
  );
};

export default Login;
