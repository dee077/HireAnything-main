import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';  // Using Axios to make HTTP requests
import { Admin_local } from '../utils/constent';

const HireServicesComponent = () => {
  const [services, setServices] = useState([]);
  const location = useLocation();

  // Check if the current page is Home
  const isHomePage = location.pathname === '/';

  // Fetch services data from the API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(`${Admin_local}/api/services`);  // Replace with your actual API endpoint
        setServices(response.data);  // Store fetched services in the state
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);  // Empty dependency array means this effect runs once on component mount

  // Limit the services to the first 4 for the Home page
  const limitedServices = isHomePage ? services.slice(0, 4) : services;

  return (
    <div className="categorypage">
      <div className="page-wrapper container">
        {/* Conditionally render the heading only on the inner pages */}
        {!isHomePage && (
          <div className="row">
            <div className="col-12 text-center mb-4">
              <h3 className="primary-btn cat">Explore Our Categories</h3>
              <h4>Discover Our Wide Range of Categories</h4>
            </div>
          </div>
        )}
        <h3 className="primary-btn">Find Affordable Options from Nearby Rental Providers</h3>

        <div className="row">
          {limitedServices.map((service, index) => (
            <div className="col-lg-3 col-md-12 col-sm-12 mb-5" key={index}>
              <div className="single-other-issue">
                <div className="thumb">
                  <img className="img-fluid" src={service.image} alt={service.name} /> {/* Ensure 'image' is the correct property */}
                </div>
                <div className="category-text">
                  <a href="#">
                    <h4>{service.name}</h4>
                  </a>
                  <p>{service.info}</p>
                  <Link className="catprimary-btn text-uppercase" to="/contact">Get Quote</Link> {/* Change the link to the correct route */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show the "View All" button only on the Home page */}
        {isHomePage && (
          <div className="row">
            <div className="col-12 text-center">
              <Link to="/category" className="primary-btn text-uppercase">
                View All
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HireServicesComponent;
