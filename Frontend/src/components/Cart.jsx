import React, { useState } from 'react';

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Chicken Surprise Burger Combo',
      price: 237.14,
      quantity: 2,
      image: '/image/ezgif.com-gif-maker-98-5 copy.tiff', // Replace with the actual image path
    },
  ]); 

  const handleIncrement = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  if (cartItems.length === 0) {
    return (
      <div className='mt-[3%] mb-[5%] mx-[5%] min-h-[80vh] flex flex-col justify-center items-center bg-gray-100'>
        <h1 className='my-2 text-4xl font-semibold text-gray-800 text-center'>Your Cart is Empty!</h1>
        <img src="/path-to-empty-cart.png" alt="empty cart" />
      </div>
    );
  }

  return (
    <div className="mt-[3%] mb-[5%] mx-5 flex justify-center ">
      <div className="w-full flex justify-center flex-wrap-reverse tablet:flex-nowrap tablet:justify-between items-start">
        {/* Left Section - Cart Items */}
        <div className="w-full flex flex-col justify-between items-start">
              
              {cartItems.map((item) =>(
                
                <React.Fragment key={item.id}>

              <div className="my-3 mx-auto p-5 flex flex-wrap w-10/12 tablet:w-8/12 desktop:w-6/12 shadow-lg rounded-lg">
                      
                        <div key={item.id}>
                          {/* Item details */}
                          <div className="text-left flex flex-col w-1/2">
                            <h1 className="font-bold text-2xl my-3">{item.name}</h1>
                          </div>

                          {/* Item image */}
                          <div className="m-5 w-40 h-40">
                            <img
                              className="w-full h-full max-w-xs max-h-xs object-cover rounded-lg"
                              src={item.image}
                              alt={item.name}
                            />
                          </div>
                        </div>
                      
              </div>

              
              <div className="my-5 mx-auto p-5 flex flex-col w-10/12 tablet:8/12 desktop:w-8/12">
                  <h1 className="font-bold text-2xl text-gray-800 my-3">{item.name}</h1>
                  <p className="text-gray-600">₹{item.price}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => handleDecrement(item.id)}
                      disabled={item.quantity === 1}
                      className="bg-gray-300 hover:bg-gray-400 px-3 py-1 rounded-md text-gray-800 font-bold"
                    >
                      -
                    </button>
                    <span className="mx-4 text-lg text-gray-700">{item.quantity}</span>
                    <button
                      onClick={() => handleIncrement(item.id)}
                      className="bg-gray-300 hover:bg-gray-400 px-3 py-1 rounded-md text-gray-800 font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>
                <p className="text-lg font-bold text-gray-800">₹{(item.price * item.quantity).toFixed(2)}</p>
                </React.Fragment>
          ))}
        </div>
            
         

        {/* Right Section - Order Summary */}
        <div className="my-3 ml-5 mr-10 p-5 flex flex-col shadow-lg rounded-lg">
          <h1 className="m-3 p-2 text-3xl font-bold text-default whitespace-nowrap">Order Summary</h1>
          <ul className="mx-3 p-2">
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center mt-2 mb-5 text-lg text-gray-500">
                <div className='w-5/12 flex justify-center '>
                  <span className='line-clamp-2'>{item.name}</span>
                </div>
                <div className='w-2/12 flex justify-center'>
                  <span className='mx-1'>x</span> {item.quantity}
                </div>
                <div className='w-5/12 flex justify-center'>
                  ₹{item.price.toFixed(2)}
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-between m-3 p-2 font-bold text-xl">
            <span className='mx-2'>Total Bill</span>
            <span className='mx-2'>₹{calculateTotal().toFixed(2)}</span>
          </div>
          <button className="mx-5 shadow-lg bg-[#fe8b00] text-white text-xl font-semibold px-4 py-2 rounded-md transition duration-300 transform hover:bg-[#e57c00] hover:scale-105 hover:shadow-lg whitespace-nowrap will-change-transform">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
