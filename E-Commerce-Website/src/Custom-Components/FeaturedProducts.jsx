import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import spinner from '../assets/icons/loader.gif';
import { CiShoppingCart, CiHeart } from "react-icons/ci";
import { LiaSearchPlusSolid } from "react-icons/lia";
import { toggleFavorite } from '@/Slices/FavoriteSlice';

const FeaturedProducts = () => {
    const dispatch = useDispatch();
    const { isLoading, products, message } = useSelector((state) => state.product);

    const handleFavorite = (data) => {
        dispatch(toggleFavorite(data));
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center top-[200px]">
                <img src={spinner} alt="Loading" />
            </div>
        );
    }

    if (message) {
        return <div>Error: {message}</div>;
    }

    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <h1 className="font-sans py-[100px] text-[30px] font-bold text-purple-950">
                    Featured Products
                </h1>
                <div className="flex w-[70%] justify-center items-center gap-5 flex-wrap">
                    {products.slice(15, 19).map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-center items-center pb-[8px] shadow-md w-[200px] group hover:bg-[#2f1ac4] hover:text-white"
                        >
                            <div className="text-blue-700 flex ml-[-120px] absolute mt-[-230px] gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-blue-950">
                                <CiShoppingCart />
                                <CiHeart onClick={() => handleFavorite(item)} />
                                <LiaSearchPlusSolid />
                            </div>
                            <div className="bg-gray-100 w-[200px] top-0 h-[210px] flex justify-center items-center">
                                <img src={item.images[0]} className="w-[200px] h-[210px]" alt="Product" />
                            </div>
                            <h2 className="text-pink-700 font-semibold font-sans py-[5px] group-hover:text-white px-[5px] text-[16px] text-center">
                                {item.title}
                            </h2>
                            <p className="text-[12px]">Price: ${item.price}.00</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;
