import FeaturedProducts from '@/Custom-Components/FeaturedProducts';
import LeatestProducts from '@/Custom-Components/LeatestProducts';
import WhatShopexOffer from '@/Custom-Components/WhatShopexOffer';
import React from 'react'


const Home = () => {
  return (
    <div>
      <FeaturedProducts />
      <LeatestProducts />
      <WhatShopexOffer />
    </div>
  )
}

export default Home;
