import React from 'react';
import img1 from "../assets/HeroSection-images/img-1.png";

const AddToCart = () => {
  const cartItems = [
    {
      id: 1,
      image: img1,
      title: "GitPullRequestClosed",
      size: "XL",
      price: 45,
      Quantity: 2,
      total: 800,
    },
    {
      id: 2,
      image: img1,
      title: "GitPullRequestClosed",
      size: "XL",
      price: 45,
      Quantity: 2,
      total: 800,
    },
    {
      id: 3,
      image: img1,
      title: "GitPullRequestClosed",
      size: "XL",
      price: 45,
      Quantity: 2,
      total: 800,
    },
  ];

  // Calculate subtotal and total
  const subtotal = cartItems.reduce((acc, item) => acc + item.total, 0);
  const total = subtotal; // You can add taxes or discounts here if needed

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-12">
        <h1 className="bg-gray-100 text-blue-950 font-semibold text-2xl py-6">
          Shopping Cart
        </h1>
      </div>

      {/* Table Header */}
      <div className="hidden sm:flex justify-between items-center gap-6 text-blue-950 font-semibold w-full sm:w-[80%] mx-auto mb-6">
        <div className="text-center w-[40%]">
          <h2 className="text-sm text-gray-500">Product</h2>
        </div>
        <div className="text-center w-[20%]">
          <h2 className="text-sm text-gray-500">Price</h2>
        </div>
        <div className="text-center w-[20%]">
          <h2 className="text-sm text-gray-500">Quantity</h2>
        </div>
        <div className="text-center w-[20%]">
          <h2 className="text-sm text-gray-500">Total</h2>
        </div>
      </div>

      {/* Cart Items */}
      <div className="flex flex-col justify-center items-center space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row justify-between items-center border-b py-4 px-6 sm:px-10 bg-white rounded-lg shadow-sm w-[80%]"
          >
            {/* Product Details Section */}
            <div className="flex justify-center items-center gap-4 w-full sm:w-[30%] mb-4 sm:mb-0">
              <img src={item.image} className="w-[80px] h-[100px]" alt={item.title} />
              <div className="flex flex-col justify-center items-center">
                <p className="text-gray-600 text-[11px]">{item.title}</p>
                <p className="text-gray-500 text-[10px]">{item.size}</p>
              </div>
            </div>

            {/* Price, Quantity, and Total Sections */}
            <div className="flex justify-between w-full sm:w-[60%] sm:gap-8 text-center">
              <div className="w-[20%]">
                <p className="text-gray-800 text-sm sm:text-base">${item.price}</p>
              </div>
              <div className="w-[20%]">
                <p className="text-gray-800 text-sm sm:text-base">{item.Quantity}</p>
              </div>
              <div className="w-[20%]">
                <h2 className="text-gray-800 text-sm sm:text-base">${item.total}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Totals Section */}
      <div className="flex flex-col items-center space-y-4 mt-10 w-full sm:w-[80%] mx-auto">
        <h1 className="text-xl font-semibold text-blue-950">Cart Totals</h1>
        <div className="flex justify-between w-full text-gray-600">
          <p className="text-sm">Subtotal:</p>
          <p className="text-sm">${subtotal}</p>
        </div>
        <div className="flex justify-between w-full text-gray-600">
          <p className="text-sm">Total:</p>
          <p className="text-sm">${total}</p>
        </div>

        <div className="flex justify-between w-full mt-6">
          <button className="bg-pink-600 text-white py-2 px-6 rounded-md hover:bg-pink-700 transition duration-300">
            Proceed to Checkout
          </button>
          <button className="bg-pink-600 text-white py-2 px-6 rounded-md hover:bg-pink-700 transition duration-300">
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
