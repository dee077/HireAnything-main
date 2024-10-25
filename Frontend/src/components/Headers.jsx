import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';

const navlinks = [
  { name: 'Home', route: '/' },
  { name: 'About', route: '/about' },
  { name: 'Category', route: '/category' },
  { name: 'Our Services', route: '/service' },
  { name: 'Partner Signup', route: '/partner' },
  { name: 'Offerings', route: '/Vendors' },
  { name: 'Contact', route: '/contact' },
];

export default function Headers() {
  const [navBg, setNavBg] = useState('bg-[#4010f2]'); // Placeholder for your background logic
  const [menuOpen, setMenuOpen] = useState(false); // State to toggnle menu
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    address: null,
  });
  const [error, setError] = useState(null);

  // Function to get user's location
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          setLocation({ latitude: lat, longitude: lng });
          getAddress(lat, lng); // Call getAddress after setting location
        },
        (err) => {
          setError(err.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  // Function to convert lat/lng to address using Nominatim API
  const getAddress = async (latitude, longitude) => {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

    try {
      const response = await axios.get(url);
      console.log('API Response:', response.data); // Log the entire response for debugging
      if (response.data && response.data.display_name) {
        const address = response.data.display_name; // Get the formatted address
        setLocation((prev) => ({ ...prev, address }));
      } else {
        console.error('API error: No address found'); // Log specific error status
        setError('Unable to retrieve address');
      }
    } catch (err) {
      console.error('Network error:', err); // Log any network error
      setError('Error fetching address');
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  


  const UserButton = (
    <>
    <ul className='btn'>

<li> <a href="/signup">
      Signup
      </a></li>
      <li> <a href="/login">
       Login
      </a></li>
    </ul>

     
     
    </>
  );

  const socialItems = (
    <>
      <a href="https://www.facebook.com/profile.php?id=61565067325640&sk=photos">
        <i className="fa fa-facebook"></i>acebook
      </a>
      {location.latitude && location.longitude ? (
        <p className='location'>
          <span className="scroll">
            {location.address ? location.address : "Fetching address..."}
          </span>
        </p>
      ) : (
        <p>{error ? `Error: ${error}` : "Getting location..."}</p>
      )}
    </>
  );

  return (
    <header id="header">
      <div className="header-top">
        <div className="container page-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-6 col-6 header-top-left">

            {  UserButton}

            </div>
            <div className="col-lg-6 col-sm-6 col-6 header-top-right">
     
              <div className="header-social mb-50">
                {socialItems}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-menu">
        <div className="row align-items-center justify-content-between d-flex">
          <div id="logo">
            <div className="mobile-container">
              <div className="topnav">
                <Link to="/" className='active'>
                  <img className="logo" src="image/Hireanything.jpg" alt="HireAnything Logo" title="HireAnything" />
                  <span className="sitename">Hireanything.com</span>
                </Link>
              </div>
              <div id="myLinks" className={menuOpen ? 'active' : ''}>
                <nav id="nav-menu-container page-wrapper">
                  <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                    {navlinks.map(link => (
                      <li key={link.route}>
                        <NavLink
                          to={link.route}
                          className={({ isActive }) =>
                            `font-bold ${isActive ? 'text-yellow dark text-lg' : `${navBg.includes('bg-transparent') ? 'text-yellow' : 'text-yellow dark:text-yellow'}`} hover:text-yellow duration-300`
                          }
                        >
                          {link.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <a href="javascript:void(0);" className="icon" onClick={toggleMenu}>
                <i className="fa fa-bars"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
