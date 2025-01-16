import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CiShoppingCart } from "react-icons/ci";
import { LiaSearchPlusSolid } from "react-icons/lia";
import { IoMdStar } from "react-icons/io";
import { AiFillHeart } from "react-icons/ai";
import { toggleFavorite } from '@/Slices/FavoriteSlice';

const FavoriteProducts = () => {
    const favoriteProducts = useSelector((state) => state.favorite.favoriteProducts);
    const dispatch = useDispatch();

    const handleFavorite = (data) => {
        dispatch(toggleFavorite(data));
    };

    return (
        <div className="w-[100%] flex justify-center items-center">
        <div className="w-full sm:w-4/5 lg:w-3/5 py-12">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row justify-between bg-gray-50 p-5">
            <h1 className="text-[#101750] text-lg sm:text-xl font-semibold font-sans">Favorite Products</h1>
            <p className="text-[#fb2e86] text-[12px]">Total Products: {favoriteProducts.length}</p>
          </div>
      
          {/* Favorite Items Section */}
          <div className="flex flex-col gap-5 py-10 w-[100%] justify-center items-center px">
            {favoriteProducts.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center sm:items-start rounded-sm shadow-md w-full sm:w-11/12 lg:w-4/5 m-auto hover:bg-gray-100 py-3 px-4"
              >
                {/* Image Container */}
                <div className="flex-shrink-0 w-48 sm:w-56 bg-gray-100 rounded-md overflow-hidden flex justify-center items-center">
                  <div className="flex justify-center items-center h-full">
                    <img
                      src={item.images || "https://via.placeholder.com/240"}
                      className="max-h-full max-w-full object-cover"
                      alt="Product"
                    />
                  </div>
                </div>
      
                {/* Product Details */}
                <div className="text-center sm:text-left flex-1 pl-0 sm:pl-4 mt-4 sm:mt-0">
                  <h1 className="text-[#101750] font-semibold text-base sm:text-lg">{item.title}</h1>
                  <span className="flex justify-center sm:justify-start gap-2">
                    <p className="text-xs sm:text-sm px-1 text-[#101750]">${item.price}.00</p>
                    <s className="text-[10px] sm:text-xs text-[#fb2e86]">${item.prevPrice}.00</s>
                    <span className="flex text-[#f0c63b] text-xs">
                      <IoMdStar />
                      <IoMdStar />
                      <IoMdStar />
                      <IoMdStar />
                      <IoMdStar className="text-gray-500" />
                    </span>
                  </span>
                  <p className="text-[#101750] text-xs sm:text-sm py-2">{item.description}</p>
                  <span className="flex justify-center sm:justify-start text-[#101750] gap-4 py-2 cursor-pointer">
                    <CiShoppingCart />
                    <AiFillHeart
                      className="text-red-600"
                      onClick={() => handleFavorite(item)}
                    />
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

export default FavoriteProducts;
