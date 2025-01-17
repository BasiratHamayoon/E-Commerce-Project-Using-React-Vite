import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { LiaSearchPlusSolid } from "react-icons/lia";
import { toggleFavorite } from "@/Slices/FavoriteSlice";
import { toggleCart } from "@/Slices/CartSlice";
import img1 from "../assets/HeroSection-images/img-4.jpg";

const FilterProducts = () => {
  const dispatch = useDispatch();
  const { isLoading, message } = useSelector((state) => state.product);

  const cartProducts = useSelector((state) => state.cart?.cartProducts || []);
  const favoriteProducts = useSelector(
    (state) => state.favorite?.favoriteProducts || []
  );

  const productBrandItems = [
    "Coaster Furniture",
    "Fusion Dot High Fashion",
    "Unique Furniture Restor",
    "Dream Furniture Flipping",
    "Young Repurposed",
  ];

  const filterByPriceItems = [
    "$-0.00 - $150.00",
    "$-0.00 - $150.00",
    "$-0.00 - $150.00",
    "$150.00 - $350.00",
    "$450.00 +",
  ];

  const filterByColor = ["Red", "Blue", "Pink", "Brown", "Sky", "Orange", "Yellow"];

  const categoryItems = ["Prestashop", "Bigcommerce", "Magento", "Bags", "Jewelry", "Watches"];

  const filterProducts = [
    {
      id: 1,
      title: "Makeup",
      price: 12.0,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, totam.",
      image: img1, // Replace with actual image
    },
    {
      id: 2,
      title: "Makeup",
      price: 13.0,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, totam.",
      image: img1, // Replace with actual image
    },
  ];

  // Handle adding/removing items to/from the cart
  const handleAddToCart = (data) => {
    const isAlreadyInCart = cartProducts.some((cartItem) => cartItem.id === data.id);
    dispatch(toggleCart(data)); // Dispatch action to toggle cart (add/remove)
  };

  // Handle adding/removing items to/from favorites
  const handleFavorite = (data) => {
    dispatch(toggleFavorite(data)); // Dispatch action to toggle favorites
  };

  // Check if item is in the cart
  const isInCart = (item) => {
    return cartProducts.some((cartItem) => cartItem.id === item.id);
  };

  // Check if item is in the favorites
  const isFavorite = (item) => {
    return favoriteProducts.some((favItem) => favItem.id === item.id);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center top-[200px]">
        <img src="/path/to/loader.gif" alt="Loading" />
      </div>
    );
  }

  if (message) {
    return <div>Error: {message}</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center px-4 sm:px-6 md:px-8">
      <h1 className="bg-gray-100 text-blue-950 text-[24px] sm:text-[28px] text-center w-full my-6 sm:my-8 py-4 font-sans font-semibold">
        Filter Products
      </h1>
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-[80%] m-auto">
        {/* Sidebar Filters */}
        <div className="flex flex-col gap-4 w-full md:w-1/3">
          <div>
            <h2 className="text-blue-950 text-[15px] font-sans font-semibold">Product Brand</h2>
            {productBrandItems.map((item, index) => (
              <p key={index} className="text-gray-600 text-[14px]">{item}</p>
            ))}
          </div>

          <div>
            <h2 className="text-blue-950 text-[15px] font-sans font-semibold">Categories</h2>
            {categoryItems.map((item, index) => (
              <p key={index} className="text-gray-600 text-[14px]">{item}</p>
            ))}
          </div>

          <div>
            <h2 className="text-blue-950 text-[15px] font-sans font-semibold">Filter By Price</h2>
            {filterByPriceItems.map((item, index) => (
              <p key={index} className="text-gray-600 text-[14px]">{item}</p>
            ))}
            <div className="flex border mt-2 justify-between items-center px-2 py-1">
              <input
                type="text"
                placeholder="Search Price"
                className="flex-grow outline-none text-[14px] px-1"
              />
              <CiSearch />
            </div>
          </div>

          <div>
            <h2 className="text-blue-950 text-[15px] font-sans font-semibold">Filter By Color</h2>
            {filterByColor.map((item, index) => (
              <p key={index} className="text-gray-600 text-[12px]">{item}</p>
            ))}
          </div>
        </div>

        {/* Product Cards */}
        <div className="flex flex-col gap-4 w-full md:w-2/3">
          {filterProducts.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center bg-gray-100 p-4 shadow-md hover:shadow-lg gap-4"
            >
              <div className="flex justify-center items-center">
                <img src={item.image} alt={item.title} className="w-[200px] h-[160px]" />
              </div>
              <div>
                <h1 className="text-blue-950 font-semibold font-sans">{item.title}</h1>
                <span className="flex gap-2">
                  <p className="text-[14px]">${item.price}</p>
                  <s className="text-pink-600 text-[13px]">$28.99</s>
                </span>
                <p className="text-[12px] text-gray-600">{item.description}</p>
                <span className="flex justify-start gap-4 py-2 cursor-pointer">
                  {/* Cart Icon */}
                  <button onClick={() => handleAddToCart(item)}>
                    {isInCart(item) ? (
                      <CiShoppingCart className="text-blue-900" />
                    ) : (
                      <CiShoppingCart className="text-blue-700" />
                    )}
                  </button>

                  {/* Heart Icon */}
                  <button onClick={() => handleFavorite(item)}>
                    {isFavorite(item) ? (
                      <FaHeart className="text-red-700" />
                    ) : (
                      <FaRegHeart className="text-red-700" />
                    )}
                  </button>

                  {/* Search Icon */}
                  <LiaSearchPlusSolid />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterProducts;
