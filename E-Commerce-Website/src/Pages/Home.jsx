// src/Custom-Components/Home.jsx
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '@/Slices/ProductSlice';
import FeaturedProducts from '@/Custom-Components/FeaturedProducts';
import LeatestProducts from '@/Custom-Components/LeatestProducts';
import WhatShopexOffer from '@/Custom-Components/WhatShopexOffer';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());  // Dispatch the fetchProducts action when the component mounts
  }, [dispatch]);

  return (
    <div>
      <FeaturedProducts />
      <LeatestProducts />
      <WhatShopexOffer />
    </div>
  );
}

export default Home;
