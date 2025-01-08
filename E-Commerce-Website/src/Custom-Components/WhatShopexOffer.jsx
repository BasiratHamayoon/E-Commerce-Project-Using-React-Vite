import React from 'react'
import icon1 from '../assets/icon-1.png';
import icon2 from '../assets/icon-2.png';
import icon3 from '../assets/icon-3.png';
import icon4 from '../assets/icon-4.png';

const WhatShopexOffer = () => {

  const shopexItems = [
    {
      id: 1,
      title: '24/7 Support',
      discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nulla excepturi iusto odit atque minus',
      icon: icon1
    },
    {
      id: 2,
      title: '24/7 Support',
      discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nulla excepturi iusto odit atque minus',
      icon: icon2
    },
    {
      id: 3,
      title: '24/7 Support',
      discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nulla excepturi iusto odit atque minus',
      icon: icon3
    },
    {
      id: 4,
      title: '24/7 Support',
      discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nulla excepturi iusto odit atque minus',
      icon: icon4
    },
  ]
  return (
    <div>
          <div className='flex flex-col justify-center items-center'>
                <h1 className='font-sans py-[100px] text-[30px] font-bold text-purple-950'>What Shopex Offer!</h1>

                <div className='flex justify-center items-center gap-4 w-[70%] flex-wrap'>
                  {shopexItems.map((item,index) => (
                    <div key={item.id} className='flex flex-col justify-center
                     items-center rounded-sm shadow-lg px-3 py-6 w-[200px]'>
                      <div className=''>
                        <img src={item.icon} />
                      </div>
                      <h1 className='text-blue-900 text-[18px] font-sans
                      py-3 font-bold'>{item.title}</h1>
                      <p className='text-blue-900 text-[10px] text-center px-2'>{item.discription}</p>
                    </div>
                  ))}

                </div>
          </div>      
    </div>
  )
}

export default WhatShopexOffer;
