import React from 'react';
import { useSelector } from 'react-redux';
import image1 from '../assets/img1.png';
import image2 from '../assets/img2.png';
import image3 from '../assets/img3.png';
import image4 from '../assets/img4.png';
import spinner from '../assets/icons/loader.gif'
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { LiaSearchPlusSolid } from "react-icons/lia";

const FeaturedProducts = () => {
  // Get the products, loading status, and error message from the Redux state
  const { isLoading, products, message } = useSelector((state) => state.product);
  console.log(products)

  // Display loading state or error message if applicable
  if (isLoading) {
    return <div className='flex justify-center items-center top-[200px]'>
      <img src={spinner} />
    </div>;
  }

  if (message) {
    return <div>Error: {message}</div>;
  }

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-sans py-[100px] text-[30px] font-bold text-purple-950">Featured Products</h1>
        <div className="flex w-[70%] justify-center items-center gap-5 flex-wrap">
          {products.slice(15, 19).map((item, index) => (
            <div key={index} className="flex flex-col justify-center items-center pb-[8px] shadow-md w-[200px] group hover:bg-[#2f1ac4] hover:text-white">
              <div className="text-blue-700 flex ml-[-120px] absolute mt-[-230px] gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-blue-950">
                <CiShoppingCart />
                <CiHeart />
                <LiaSearchPlusSolid />
              </div>
              <div className="bg-gray-100 w-[200px] top-0 h-[210px]  flex justify-center items-center">
                <img src={item.images[0]} className="w-[200px] h-[210px]" />
              </div>
              <button className="bg-green-500 text-white py-[4px] px-[10px] rounded-sm text-[13px] absolute mt-[90px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View details
              </button>
              <h2 className="text-pink-700 font-semibold font-sans py-[5px] group-hover:text-white
              px-[5px] text-[16px] text-center">{item.title}</h2>
              {/* <p className="text-[12px] py-[8px]">{item.code}</p> */}
              <p className="text-[12px]">Price : ${item.price}.00</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
