import React, { useEffect, useState } from 'react';

const LocationComponent = () => {
    const [location, setLocation] = useState({});
    const [error, setError] = useState(null);
    const [address, setAddress] = useState('');

    // Replace this with your actual Google Maps API Key
    const API_KEY = 'AIzaSyAXzfLvMSJeJ-SAIjLOF0zo0my4n-3nINQ';

    useEffect(() => {
        // Function to fetch the geolocation
        const fetchLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    position => {
                        const latitude = position.coords.latitude;
                        const longitude = position.coords.longitude;
                        setLocation({ latitude, longitude });

                        // Fetch address from latitude and longitude
                        fetchAddress(latitude, longitude);
                    },
                    error => {
                        setError('Unable to retrieve your location');
                        console.error(error);
                    }
                );
            } else {
                setError('Geolocation is not supported by this browser.');
            }
        };

        // Function to fetch the address using Google Maps Geocoding API
        const fetchAddress = async (lat, lng) => {
            try {
                const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_KEY}`);
                const data = await response.json();

                if (data.status === 'OK') {
                    setAddress(data.results[0].formatted_address);
                } else {
                    setError('Unable to retrieve address.');
                }
            } catch (err) {
                setError('Error fetching address.');
                console.error(err);
            }
        };

        // Call the fetchLocation function
        fetchLocation();
    }, [API_KEY]);

    return (
        <div>
            {location.latitude && location.longitude ? (
                <p>
                    Latitude: {location.latitude}, Longitude: {location.longitude}
                </p>
            ) : (
                <p>{error ? `Error: ${error}` : "Getting location..."}</p>
            )}
            {address && <p>Address: {address}</p>}
        </div>
    );
};

export default LocationComponent;
