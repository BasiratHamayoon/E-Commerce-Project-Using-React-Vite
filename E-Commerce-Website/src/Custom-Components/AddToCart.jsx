import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '@/Slices/CartSlice';
import { toggleFavorite } from '@/Slices/FavoriteSlice'; // Import toggleFavorite action
import { FaHeart, FaRegHeart } from 'react-icons/fa'; // Import React Icons for favorites


const AddToCart = () => {
  const dispatch = useDispatch();

  // Access the cartProducts and favoriteProducts directly from the Redux state
  const cartProducts = useSelector((state) => state.cart?.cartProducts);
  const favoriteProducts = useSelector((state) => state.favorite.favoriteProducts); // Access favoriteProducts

  // Calculate subtotal and total
  const subtotal = cartProducts.reduce((acc, item) => acc + item.total, 0);
  const total = subtotal; // You can add taxes or discounts here if needed

  // Check if the item is in the favorites list
  const isFavorite = (item) => {
    return favoriteProducts.some((favItem) => favItem.id === item.id);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="bg-gray-100 text-blue-950 font-semibold text-2xl py-6">
          Shopping Cart
        </h1>
      </div>

      {/* Cart Table Header (without Quantity) */}
      <div className="hidden sm:flex justify-between items-center gap-6 text-blue-950 font-semibold w-full sm:w-[80%] mx-auto mb-6">
        <div className="text-center w-[40%]">
          <h2 className="text-sm text-gray-500">Product</h2>
        </div>
        <div className="text-center w-[20%]">
          <h2 className="text-sm text-gray-500">Price</h2>
        </div>
        <div className="text-center w-[20%]">
          <h2 className="text-sm text-gray-500">Total</h2>
        </div>
        <div className="text-center w-[20%]">
          <h2 className="text-sm text-gray-500">Actions</h2>
        </div>
      </div>

      {/* Cart Items Section */}
      <div className="flex flex-col justify-center items-center space-y-4">
        {cartProducts.length > 0 ? (
          cartProducts.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row justify-between items-center border-b py-4 px-6 sm:px-10 bg-white rounded-lg shadow-sm w-[80%]"
            >
              {/* Product Details Section */}
              <div className="flex justify-center items-center gap-4 w-full sm:w-[30%] mb-4 sm:mb-0">
                <img
                  src={item.images}
                  className="w-[80px] h-[100px]"
                  alt={item.title}
                />
                <div className="flex flex-col justify-center items-center">
                  <p className="text-gray-600 text-[11px]">{item.title}</p>
                  <p className="text-gray-500 text-[10px]">{item.size}</p>
                </div>
              </div>

              {/* Price, Total, and Actions Sections */}
              <div className="flex justify-between w-full sm:w-[60%] sm:gap-8 text-center">
                <div className="w-[20%]">
                  <p className="text-gray-800 text-sm sm:text-base">${item.price}</p>
                </div>
                <div className="w-[20%]">
                  <h2 className="text-gray-800 text-sm sm:text-base">${item.total}</h2>
                </div>

                {/* Actions: Add to Favorites and Remove */}
                <div className="flex flex-col gap-2 justify-center items-center w-[20%] sm:w-[20%]">
                  {/* Heart Icon for Add to Favorites */}
                  <button
                    onClick={() => dispatch(toggleFavorite(item))}
                    className="text-sm"
                  >
                    {isFavorite(item) ? (
                      <FaHeart className="text-red-700 hover:text-red-800" />
                    ) : (
                      <FaRegHeart className="text-red-700 hover:text-red-800" />
                    )}
                  </button>

                  <button
                    onClick={() => dispatch(toggleCart(item))}
                    className="bg-pink-600 text-white hover:bg-pink-700 transition duration-300 text-sm py-1 px-4 rounded-md"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-300 px-10">Your cart is empty.</p>
        )}
      </div>

      {/* Cart Totals Section */}
      <div className="flex flex-col items-center space-y-4 mt-10 w-full sm:w-[80%] mx-auto">
        <h1 className="text-xl font-semibold text-blue-950">Cart Totals</h1>
        <div className="flex justify-between w-full text-gray-600">
          <p className="text-sm">Subtotal:</p>
          <p className="text-sm">${subtotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between w-full text-gray-600">
          <p className="text-sm">Total:</p>
          <p className="text-sm">${total.toFixed(2)}</p>
        </div>

        <div className="flex justify-between w-full mt-6">
          <button className="bg-pink-600 text-white py-2 px-6 rounded-md hover:bg-pink-700 transition duration-300">
            Proceed to Checkout
          </button>
          <button
            onClick={() => cartProducts.forEach((item) => dispatch(toggleCart(item)))}
            className="bg-pink-600 text-white py-2 px-6 rounded-md hover:bg-pink-700 transition duration-300"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
