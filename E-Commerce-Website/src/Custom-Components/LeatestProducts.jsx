import React, { useState } from 'react';
import image5 from '../assets/img5.png';
import image6 from '../assets/img6.png';
import image7 from '../assets/img7.png';
import image8 from '../assets/img8.png';
import image9 from '../assets/img9.png';
import image10 from '../assets/img4.png';
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { LiaSearchPlusSolid } from "react-icons/lia";

const LeatestProducts = () => {
    const [activeCategory, setActiveCategory] = useState('New Arrivals');

    const categories = ['New Arrivals', 'Best Sellers', 'Featured', 'Special Offers'];

    const leatestProductsItems = [
        {
            id: 1,
            title: "Comfort Handy Craft",
            price: 42.00,
            prevIousPrice: 65.00,
            image: image5
        },
        {
            id: 2,
            title: "Comfort Handy Craft",
            price: 42.00,
            prevIousPrice: 65.00,
            image: image6
        },
        {
            id: 3,
            title: "Comfort Handy Craft",
            price: 42.00,
            prevIousPrice: 65.00,
            image: image7
        },
        {
            id: 4,
            title: "Comfort Handy Craft",
            price: 42.00,
            prevIousPrice: 65.00,
            image: image8
        },
        {
            id: 5,
            title: "Comfort Handy Craft",
            price: 42.00,
            prevIousPrice: 65.00,
            image: image9
        },
        {
            id: 6,
            title: "Comfort Handy Craft",
            price: 42.00,
            prevIousPrice: 65.00,
            image: image10
        },
    ];

    return (
        <div>
            <div className='flex flex-col justify-center items-center w-[100%]'>
                <h1 className='font-sans py-[50px] text-[30px] font-bold text-purple-950'>Leatest Products</h1>
                
                {/* Dynamic Menu */}
                <div className='flex justify-center gap-8 pb-6'>
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className={`px-3 py-2 text-sm font-semibold ${
                                activeCategory === category ? 'text-[#fb4997] border-b-2 border-[#fb4997]' : 'text-[#151855]'
                            } transition-all hover:border-b-2 border-[#fb4997] hover:text-[#fb4997]`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </div>
                    ))}
                </div>

                {/* Conditional Rendering */}
                {activeCategory === 'New Arrivals' ? (
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-[80%] mx-auto justify-center items-center m-[10px]'>
                        {leatestProductsItems.map((item, index) => (
                            <div key={index} className='flex flex-col w-[250px] h-[220px] mx-auto rounded-sm group'>
                                <div className='bg-gray-100 flex justify-center items-center w-[250px] h-[180px] group-hover:bg-white'>
                                    <img src={item.image} className='w-[150px] h-[140px]' alt={item.title} />
                                </div>
                                <div className='absolute bg-[#3f509e] px-[22px] text-white rounded-tl-lg rounded-br-lg rotate-[-30deg] mx-[6px] my-[26px] opacity-0 group-hover:opacity-100'>
                                    <h1 className='text-[12px]'>Sale</h1>
                                </div>
                                <div className='text-blue-700 absolute flex flex-col mt-[100px] px-[10px] gap-2 transition-opacity duration-300 hover:text-blue-950 opacity-0 group-hover:opacity-100'>
                                    <CiShoppingCart />
                                    <CiHeart />
                                    <LiaSearchPlusSolid />
                                </div>
                                <div className='flex justify-between'>
                                    <h2 className='text-[12px] text-[#2f1ac4] font-semibold'>{item.title}</h2>
                                    <div className='flex justify-between gap-2'>
                                        <p className='text-[10px] text-[#2f1ac4]'>${item.price}.00</p>
                                        <s className='text-[10px] text-pink-700'>${item.prevIousPrice}.00</s>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className='flex justify-center items-center h-[200px]'>
                        <p className='text-lg text-gray-600 font-semibold'>
                            {activeCategory} p
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LeatestProducts;
