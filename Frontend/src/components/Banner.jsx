import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useLocation } from 'react-router-dom';

// Example static data
const categories = [
  { id: 1, name: "Tool Hire" },
  { id: 2, name: "Luxury Car Rental" },
  { id: 3, name: "Standard Car Hire" },
  { id: 4, name: "Group Transport" },
  { id: 5, name: "Building Equipment" },
  { id: 6, name: "Professional Cleaning" },
  { id: 7, name: "Music Entertainment" },
  { id: 8, name: "Artistic Services" },
  { id: 9, name: "Custom Carpentry" },
  { id: 10, name: "Home Construction" },
  { id: 11, name: "Fencing Solutions" },
  { id: 12, name: "Flooring Installation" },
  { id: 13, name: "Professional Writing" },
  { id: 14, name: "Advanced Tool Hire" },
  { id: 15, name: "Comprehensive Tools" },
  { id: 16, name: "Experienced Trades People" },
  { id: 17, name: "Specialized Services" },
  { id: 18, name: "Architectural Design" },
  { id: 19, name: "Luxury Vehicle Hire" },
  { id: 20, name: "Extended Car Rental" },
  { id: 21, name: "Castle Event Services" },
  { id: 22, name: "Eco-Friendly Cleaning" },
  { id: 23, name: "Waste Collection Services" },
  { id: 24, name: "Creative Comics Art" },
  { id: 25, name: "Fireplace Solutions" },
  { id: 26, name: "Flat Roofing Experts" },
  { id: 27, name: "Carriage Hire" },
  { id: 28, name: "Versatile Horse and Car Rentals" },
  { id: 29, name: "Classic Horse and Carriage" },
  { id: 30, name: "Music Performance Services" },
  { id: 31, name: "Premium Car Hire" },
  { id: 32, name: "Secure Storage Solutions" }
];

export default function Banner() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const banner = {
    title: "",
    subtitle: "Find the Perfect Service Provider for Any Job",
    tagline: "",
    placeholder: "Search For Services..."
  };

  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const lowercasedQuery = query.toLowerCase();
    const filteredResults = categories.filter(category =>
      category.name.toLowerCase().includes(lowercasedQuery)
    );

    if (filteredResults.length > 0) {
      setResults(filteredResults);
      setMessage('');
    } else {
      setResults([]);
      setMessage('No results found. Kindly contact us, and we will provide a solution.');
    }
  }, [query]);

  const handleResultClick = () => {
    window.location.href = 'http://localhost:5173/';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) {
      // Display the popup message if the search field is empty
      alert('Kindly input the text for the search.');
      return;
    } else {
      setMessage('');
    }
  };

  return (
    <section className="banner-area relative">
      <div className="overlay overlay-bg"></div>
      <div className="page-wrapper container ">
        <div className="row fullscreen align-items-center justify-content-between">
          <div className="col-lg-12 col-md-12 banner-left">
            <h2 className="text-white pb-10">{banner.title}</h2>
            <h5 className="text-white pb-10">{banner.tagline}</h5>

            <div className="search-page-wrapper container ">
              <form onSubmit={handleSubmit}>
                <h5 className="text-white pb-10">{banner.subtitle}</h5>

                <input
                  type="text"
                  className="search-bar"
                  placeholder={banner.placeholder}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit" className="primary-btn text-uppercase">
                  Search
                </button>
              </form>

              {/* Message if no results found */}
              {message && <p className="search-message">{message}</p>}
            </div>

            {/* Display search results */}
            {results.length > 0 && (
              <ul className="search-results">
                {results.map((result) => (
                  <li
                    key={result.id}
                    onClick={handleResultClick}
                    className="search"
                    style={{ cursor: 'pointer' }}
                  >
                    {result.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const App = () => {
  return (
    <div>
      <Banner />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
