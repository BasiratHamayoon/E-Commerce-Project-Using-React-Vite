import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { LiaSearchPlusSolid } from "react-icons/lia";
import { IoMdStar } from "react-icons/io";
import image from '../assets/img3.png'

const FavoriteProducts = () => {
    const favoriteItems = [
        {
            id: 1,
            title: "Accumsan tincidunt",
            image: image,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, repellendus fuga. Qui, ullam. Quis, alias?',
            price: 26,
            prevPrice: 52,
            icon1: <CiShoppingCart />,
            icon2: <CiHeart />,
            icon3: <LiaSearchPlusSolid />
        },
        {
            id: 1,
            title: "Accumsan tincidunt",
            image: image,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, repellendus fuga. Qui, ullam. Quis, alias?',
            price: 26,
            prevPrice: 52,
            icon1: <CiShoppingCart />,
            icon2: <CiHeart />,
            icon3: <LiaSearchPlusSolid />
        }
    ]
  return (
    <div className='w-[100%] flex justify-center items-center'>
           <div className='w-[70%] py-[50px] justify-center items-center'>
              <div className='flex justify-between bg-gray-50 p-[20px]'>
                  <h1 className='text-[#101750] text-[23px] font-smibold font-sans'>Favorite Products</h1>
                   <p className='text-[#fb2e86] text-[12px]'>Products: 2 </p>
              </div>
              <div className='flex flex-col gap-5 py-[40px] w-[100%] justify-center items-center'>
                {favoriteItems.map((item, index) => (
                    <div className='flex rounded-sm shadow-md m-auto hover:bg-gray-100 py-[5px] justify-center items-center' key={item.id}>
                        <div className='px-[20px]'>
                           <img src={item.image} className='w-[150px] h-[140px]' /> 
                        </div>
                        <div className='px-[10px]'>
                            <h1 className='text-[#101750] font-semibold text-[18px]'>{item.title}</h1>
                            <span className='flex gap-2'>
                                <p className='text-[12px] px-[2px] text-[#101750]'>${item.price}.00</p>
                                <s className='text-[10px] text-[#fb2e86]'>${item.prevPrice}.00</s>
                                <span className='flex text-[#fb2] text-[12px]'>
                                <IoMdStar  />
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar  className='text-gray-500'/>

                                </span>
                            </span>
                            <p className='text-[#101750] text-wrap text-[12px] pr-[10px] py-[5px]'>{item.description}</p>
                            <span className='flex text-[#101750] gap-4 py-[4px] hover:text-[#101752S] cursor-pointer'>
                                {item.icon1}
                                {item.icon2}
                                {item.icon3}
                            </span>
                        </div>
                    </div>
                ))}
              </div>
           </div>
    </div>
  )
}

export default FavoriteProducts;
