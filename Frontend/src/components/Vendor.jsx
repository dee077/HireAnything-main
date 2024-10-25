import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Local_host } from '../utils/constent';

const OrderCard = ({ order }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className="flex flex-col bg-white shadow-md rounded-lg p-4 mb-4 cursor-pointer"
      onClick={toggleExpanded}
    >
      <div className="flex items-center">
        {/* Assuming the first image in the photos array */}
        <img
          src={order.photos[0]}
          alt={order.listingTitle}
          className="w-24 h-12 object-contain mr-4"
        />
        <div>
          <h2 className="text-lg font-semibold">
            {order.firstName} {order.lastName}
          </h2>
          <p className="text-sm text-gray-500">{order.companyName}</p>
        </div>
      </div>

      {/* Conditionally render additional details */}
      {isExpanded && (
        <div className="mt-4">
          <p className="text-gray-500">Contact Number: {order.contactNumber}</p>
          <p className="text-gray-500">Address: {order.address}</p>
          <p className="text-gray-500">Vehicle Reg: {order.vehicleReg}</p>
          <p className="text-gray-500">Vehicle Model: {order.vehicleModel}</p>
          <p className="text-gray-500">Seats: {order.seats}</p>
          <p className="text-gray-500">Mileage: {order.mileage}</p>
          <div className="flex items-center space-x-6 mt-2">
            <div className="flex items-center space-x-2 text-gray-500">
              {/* Some Date/Time UI */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-6 8h6m-6 4h6m0 4h6"
                />
              </svg>
              <p>{order.listingTitle}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Vendorcon = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${Local_host}/api/offer`); // Replace with your actual API endpoint
        setOrders(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching orders:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto p-6">
      {orders.map((order, index) => (
        <OrderCard key={index} order={order} />
      ))}
    </div>
  );
};

export default Vendorcon;
