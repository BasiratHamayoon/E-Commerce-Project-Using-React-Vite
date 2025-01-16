import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import spinner from '../assets/icons/loader.gif';
import { CiShoppingCart } from 'react-icons/ci';
import { FaHeart, FaRegHeart, FaShoppingCart } from 'react-icons/fa'; // Import heart icons for favorites and filled cart icon
import { LiaSearchPlusSolid } from 'react-icons/lia';
import { toggleFavorite } from '@/Slices/FavoriteSlice'; // Import toggleFavorite action
import { toggleCart } from '@/Slices/CartSlice'; // Import toggleCart action

const LatestProducts = () => {
  const dispatch = useDispatch();

  const handleFavorite = (data) => {
    const isAlreadyFavorite = favoriteProducts.some((favItem) => favItem.id === data.id);

    if (isAlreadyFavorite) {
      dispatch(toggleFavorite(data)); // Remove item from favorites
    } else {
      dispatch(toggleFavorite(data)); // Add item to favorites
    }
  }

  const handleCart = (data) => {
    const isAlreadyInCart = cartProducts.some((cartItem) => cartItem.id === data.id);

    if (isAlreadyInCart) {
      dispatch(toggleCart(data)); // Remove item from cart
    } else {
      dispatch(toggleCart(data)); // Add item to cart
    }
  }

  const { isLoading, products, message } = useSelector((state) => state.product);
  const favoriteProducts = useSelector((state) => state.favorite.favoriteProducts); // Access favoriteProducts from Redux
  const cartProducts = useSelector((state) => state.cart.cartProducts); // Access cartProducts from Redux

  // Function to check if the item is in the favorites list
  const isFavorite = (item) => {
    return favoriteProducts.some((favItem) => favItem.id === item.id);
  };

  // Function to check if the item is in the cart
  const isInCart = (item) => {
    return cartProducts.some((cartItem) => cartItem.id === item.id);
  };

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center top-[200px]">
          <img src={spinner} alt="Loading..." />
        </div>
      ) : message ? (
        <div className="text-red-600 font-semibold">Error: {message}</div>
      ) : (
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="font-sans py-12 text-2xl font-bold text-purple-950">Latest Products</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-[80%] mx-auto">
            {products.slice(7, 13).map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-2 w-[250px] h-[240px] mx-auto rounded-sm group relative"
              >
                <div className="bg-gray-100 flex justify-center items-center w-[250px] h-[180px] group-hover:bg-white">
                  <img
                    src={item.images[0]}
                    className="w-[250px] h-[210px]"
                    alt={item.title}
                  />
                </div>
                <div className="absolute bg-[#3f509e] px-[22px] text-white rounded-tl-lg rounded-br-lg rotate-[-30deg] mx-[6px] my-[26px] opacity-0 group-hover:opacity-100">
                  <h1 className="text-[12px]">Sale</h1>
                </div>
                <div className="text-blue-700 absolute flex flex-col mt-[100px] px-[10px] gap-2 transition-opacity duration-300 hover:text-blue-950 opacity-0 group-hover:opacity-100">
                  {/* Cart Icon: Filled if the item is in the cart */}
                  <button onClick={() => handleCart(item)}>
                    {isInCart(item) ? (
                      <FaShoppingCart className="text-blue-900 hover:text-blue-800" />
                    ) : (
                      <CiShoppingCart className="text-blue-700 hover:text-blue-800" />
                    )}
                  </button>

                  {/* Heart Icon for Favorites */}
                  <button onClick={() => handleFavorite(item)}>
                    {isFavorite(item) ? (
                      <FaHeart className="text-red-700 hover:text-red-800" />
                    ) : (
                      <FaRegHeart className="text-red-700 hover:text-red-800" />
                    )}
                  </button>

                  {/* Search Icon */}
                  <LiaSearchPlusSolid />
                </div>
                <div className="flex justify-between mt-2 gap-2">
                  <h2 className="text-sm text-[#2f1ac4] font-semibold truncate">{item.title}</h2>
                  <div className="flex justify-between gap-2">
                    <p className="text-xs text-pink-700">
                      ${item.price}.00
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LatestProducts;
