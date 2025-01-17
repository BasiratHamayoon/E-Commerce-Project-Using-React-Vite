import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdStar } from "react-icons/io";
import { FaHeart, FaRegHeart } from 'react-icons/fa'; // Importing the icons
import { toggleFavorite } from '@/Slices/FavoriteSlice';
import { toggleCart } from '@/Slices/CartSlice';
import img1 from '../assets/HeroSection-images/img-1.png';

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(img1); // State to track the selected image
  const dispatch = useDispatch();

  const images = [img1, img1, img1, img1]; // Array of images (use unique images here if available)

  // Get cart and favorite state from Redux
  const cartProducts = useSelector((state) => state.cart?.cartProducts);
  const favoriteProducts = useSelector((state) => state.favorite?.favoriteProducts);

  // Check if item is in the cart
  const isInCart = (item) => {
    return cartProducts.some((cartItem) => cartItem.id === item.id);
  };

  // Check if item is in the favorites
  const isFavorite = (item) => {
    return favoriteProducts.some((favItem) => favItem.id === item.id);
  };

  // Add/remove item from cart
  const handleAddToCart = (data) => {
    dispatch(toggleCart(data));
  };

  // Add/remove item from favorites
  const handleFavorite = (data) => {
    dispatch(toggleFavorite(data));
  };

  const product = {
    id: 1,
    title: "Black Jacket",
    price: 28,
    originalPrice: 48,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quae fugit error sint doloremque ab, voluptatibus veritatis illo fugiat delectus molestias. Distinctio hic labore temporibus?",
  };

  return (
    <div className='flex flex-col w-full items-center justify-center'>
      <div className='flex flex-col justify-center items-center w-full max-w-4xl px-4 lg:px-6'>
        <h1 className='bg-gray-100 text-blue-950 font-semibold text-[20px] w-full text-center my-6 font-sans py-3'>
          Product Detail
        </h1>

        <div className='flex flex-wrap w-full gap-4 lg:gap-6 justify-center items-start'>
          {/* Small Images */}
          <div className='hidden lg:flex flex-col items-center gap-2'>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                onClick={() => setSelectedImage(image)} // Update the selected image on click
                className="w-16 h-20 cursor-pointer hover:opacity-80 rounded-md shadow-md"
                alt={`Thumbnail ${index + 1}`}
              />
            ))}
          </div>

          {/* Main Large Image */}
          <div className='flex justify-center items-center flex-grow max-w-sm'>
            <img
              src={selectedImage}
              className='w-[95%] max-w-xs h-[390px] rounded-md shadow-lg bg-slate-600'
              alt="Selected Product"
            />
          </div>

          {/* Product Details */}
          <div className='flex flex-col items-center lg:items-start px-4 lg:px-0 w-full lg:w-[260px] gap-3 bg-white pt-[40px]'>
            <h1 className='text-[18px] text-blue-950 font-semibold font-sans text-center lg:text-left'>{product.title}</h1>

            <div className='text-yellow-600 flex text-base'>
              {[...Array(5)].map((_, i) => (
                <IoMdStar key={i} />
              ))}
            </div>

            <div className='flex items-center gap-2'>
              <p className='text-[14px] font-bold'>${product.price}.00</p>
              <s className='text-pink-700 text-[12px]'>${product.originalPrice}.00</s>
            </div>

            <h2 className='text-blue-950 font-sans text-[14px] font-semibold'>Color</h2>

            <div>
              <h4 className='text-blue-950 text-[12px] font-sans font-semibold'>Description</h4>
              <p className='text-[12px] text-gray-600 leading-relaxed text-center lg:text-left'>
                {product.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className='flex gap-2 mt-2'>
              {/* Cart Button */}
              <button
                onClick={() => handleAddToCart(product)}
                className={`py-1 px-4 rounded-md text-sm transition-all ${
                  isInCart(product) ? 'bg-pink-900 text-white' : 'bg-pink-700 text-white'
                }`}
              >
                {isInCart(product) ? 'Added to Cart' : 'Add to Cart'}
              </button>

              {/* Favorite Button */}
              <button
                onClick={() => handleFavorite(product)}
                className='py-1 px-4 text-sm text-red-700 hover:text-red-700 transition-all'
              >
                {isFavorite(product) ? <FaHeart /> : <FaRegHeart />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
