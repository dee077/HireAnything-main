import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Admin_local } from '../utils/constent';

const categories = [
    {
      category: "Passenger Transport",
      subcategories: [
        "Limousine Hire",
        "Minibus Hire",
        "Coach Hire",
        "Horse and Carriage Hire",
        "Boat Hire",
        "Funeral Car Hire",
        "Chauffeur Driven Prestige Car Hire"
      ]
    },
    {
        category: "Tool Hire",
        subcategories: [
          "Access Equipment",
          "Air Con & Cooling",
          "Breaking & Drilling",
          "Lifting & Handling",
          "Lighting & Power",
          "Surveying & Measurement",
          "Cutting & Grinding",
          "Cleaning & Floorcare",
          "Gardening & Landscaping Tools"
        ]
      },
      {
        category: "Artist Hire",
        subcategories: [
          "Visual Artists",
          "Performing Artists",
          "Muralists"
        ]
      },
    
    {
      category: "Bouncy Castle Hire",
      subcategories: [
        "Kids' Bouncy Castles",
        "Adult Bouncy Castles",
        "Inflatable Slides",
        "Obstacle Courses"
      ]
    },
    {
      category: "Motorhome Hire",
      subcategories: [
        "Campervans",
        "Large Motorhomes",
        "Luxury Motorhomes"
      ]
    },
    {
      category: "Van Hire",
      subcategories: [
        "Man and Van Services",
        "Moving Vans",
        "Cargo Vans"
      ]
    },
    {
      category: "Haulage Truck Hire",
      subcategories: [
        "Small Trucks",
        "Large Trucks",
        "Refrigerated Trucks"
      ]
    },
    {
      category: "Skip Hire",
      subcategories: [
        "Mini Skips",
        "Midi Skips",
        "Large Skips"
      ]
    },
    {
      category: "Marquee Hire",
      subcategories: [
        "Wedding Marquees",
        "Party Tents",
        "Corporate Event Marquees"
      ]
    },
    {
      category: "Car Hire",
      subcategories: [
        "Luxury Car Hire",
        "Standard Car Hire",
        "Extended Car Rental",
        "Premium Car Hire",
        "Wedding Car Hire",
        "Sports Car Hire"
      ]
    },
    {
      category: "Photographers",
      subcategories: [
        "Wedding Photographers",
        "Event Photographers",
        "Portrait Photographers",
        "Commercial Photographers"
      ]
    },
    {
      category: "Venue Hire",
      subcategories: [
        "Wedding Venues",
        "Corporate Event Venues",
        "Party Venues"
      ]
    },
    {
      category: "Makeup Artist Hire",
      subcategories: [
        "Bridal Makeup",
        "Event Makeup",
        "Theatrical Makeup"
      ]
    },
    {
      category: "Tutor Hire",
      subcategories: [
        "Academic Tutors",
        "Music Tutors",
        "Language Tutors"
      ]
    },
    {
      category: "Meeting Room Hire",
      subcategories: [
        "Small Meeting Rooms",
        "Conference Rooms",
        "Boardrooms"
      ]
    },
    {
      category: "Spare Room Hire",
      subcategories: [
        "Short-term Rentals",
        "Long-term Rentals",
        "Vacation Rentals"
      ]
    },
    {
      category: "Vacation Rental Hire",
      subcategories: [
        "Cabins",
        "Cottages",
        "Apartments",
        "Holiday Homes",
        "Villas"
      ]
    },{
      category: "Tradesperson Hire",
      subcategories: [
        "Architectural Services",
        "Bathroom Fitting",
        "Bricklaying & Repointing",
        "Carpenter",
        "Carpet & Lino Fitter",
        "Conservatory Installer",
        "Conversions Specialist",
        "Damp Proofing Specialist",
        "Decking Specialist",
        "Demolition Contractor",
        "Driveway Installer",
        "Electrician",
        "Extension Builder",
        "Fascias & Soffits Specialist",
        "Fencer",
        "Fireplace & Flue Specialist",
        "Flat Roofer",
        "Flooring Fitter",
        "Gardener",
        "Gas Engineer",
        "Ground Worker",
        "Guttering Installer",
        "Handyman",
        "Heating Engineer",
        "Insulation Installer",
        "Joiner",
        "Kitchen Fitter",
        "Landscaper",
        "Locksmith",
        "Loft Conversion Specialist",
        "New Home Builder",
        "Painter & Decorator",
        "Pitched Roofer",
        "Plasterer",
        "Plumber",
        "Repointing Specialist",
        "Restoration & Refurbishment Specialist",
        "Security System Installer",
        "Stonemason",
        "Tarmac Specialist",
        "Tiler",
        "Tree Surgeon",
        "Waste Clearance Specialist",
        "Windows & Doors Fitter (UPVC & Metal)",
        "Windows and Doors Fitter (Wooden)"
      ]
    },
    {
      category: "Musician Hire",
      subcategories: [
        "Bands",
        "Function Bands",
        "Cover Bands",
        "Soul & Motown Bands",
        "Blues Bands",
        "Disco & Funk Bands",
        "Folk-rock Bands",
        "Party Bands",
        "Pop Bands",
        "Rock Bands",
        "Wedding Bands",
        "Singers",
        "Harpists",
        "String Quartets",
        "Bagpipers",
        "Pianists",
        "DJs",
        "Singing Guitarists",
        "Organists",
        "Ceilidh Bands",
        "Jazz & Brass Groups",
        "Jazz Bands",
        "Saxophonists",
        "Swing & Jive Bands",
        "Vintage-themed Jazz Bands",
        "Gypsy Jazz Bands",
        "Jazz Trios",
        "Brass Bands",
        "Trombonists",
        "Trumpeters",
        "Classical",
        "Pianists",
        "Violinists",
        "Classical Guitarists",
        "Cellists",
        "Flautists",
        "Clarinettists",
        "Oboists",
        "Violists",
        "Piano Trios",
        "Acoustic Acts",
        "Acoustic Duos",
        "Classical Duos",
        "Roaming Bands",
        "A Cappella Groups",
        "Gospel Choirs",
        "Flute and Harp Duos",
        "Carol Singers",
        "World & Folk",
        "Ceilidh Bands",
        "Bavarian Oompah Bands",
        "Bollywood Ensembles",
        "Mariachi Bands",
        "Steel Drum Bands",
        "Ska Bands",
        "Bagpipers",
        "Sitar Players",
        "Tribute Bands",
        "2000s Tribute Bands",
        "90s Tribute Bands",
        "80s Tribute Bands",
        "70s Tribute Bands",
        "60s Tribute Bands",
        "ABBA Tribute Bands",
        "Beatles Tribute Bands",
        "Queen Tribute Bands",
        "Original Artists",
        "Vintage-themed Bands",
        "Electric Violinists",
        "Accordionists",
        "Ukulele Players",
        "Drummers",
        "Dhol Players",
        "Medieval Groups"
      ]
    },
    
    {
      category: "Storage Space Hire",
      subcategories: [
        "Personal Storage Units",
        "Business Storage Units",
        "Vehicle Storage"
      ]
    }
  ];
  

  const Service = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
  
    // State for expanded categories
    const [expandedCategory, setExpandedCategory] = useState(null);
    const [categories, setCategories] = useState([]); 
  
    // Toggle the expanded state
    const handleToggle = (category) => {
      setExpandedCategory(expandedCategory === category ? null : category);
    };
  
   


    useEffect(() => {
      fetchCategory();
    }, []);

    const fetchCategory = async () => {
      try {
        const response = await fetch(`${Admin_local}/api/category`);
        
        // Check if the response is OK (status code 200–299)
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
    
        const data = await response.json(); // Parse the JSON from the response
        setCategories(data); // Set the fetched categories
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    };
        // Limit the services to the first 4 for the Home page
    const limitedServices = isHomePage ? categories.slice(0, 4) : categories;
    return (
      <div className="categorypage">
      <div className="page-wrapper container">
        {/* Conditionally render the heading only on inner pages */}
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
                  {/* Use the 'image' field from your backend */}
                  <img className="img-fluid" src={service.image} alt={service.name} />
                </div>
                <div className="category-text">
                  <a href="#">
                    <h4>{service.name}</h4>
                  </a>
                  <p>{service.info}</p>
                  <Link className="catprimary-btn text-uppercase" to="/signup">
                    Get Quote
                  </Link>
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
  
  export default Service;