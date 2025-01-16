import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import spinner from '../assets/icons/loader.gif';
import { CiShoppingCart } from "react-icons/ci";
import { FaHeart, FaRegHeart, FaShoppingCart } from 'react-icons/fa'; // Import filled and outlined heart and cart icons
import { LiaSearchPlusSolid } from "react-icons/lia";
import { toggleFavorite } from '@/Slices/FavoriteSlice';
import { toggleCart } from '@/Slices/CartSlice'; // Import the toggleCart function

const FeaturedProducts = () => {
    const dispatch = useDispatch();
    const { isLoading, products, message } = useSelector((state) => state.product);
    
    // Ensure cartProducts is defined before using it
    const cartProducts = useSelector((state) => state.cart?.cartProducts || []);
    const favoriteProducts = useSelector((state) => state.favorite?.favoriteProducts || []); // Access favorite products
    
    console.log(cartProducts); // Debugging cartProducts state

    // Handle adding/removing items to/from the cart
    const handleAddToCart = (data) => {
        const isAlreadyInCart = cartProducts.some((cartItem) => cartItem.id === data.id);

        if (isAlreadyInCart) {
            // Item is in cart, remove it
            dispatch(toggleCart(data)); // Dispatch action to remove item from cart
        } else {
            // Item is not in cart, add it
            dispatch(toggleCart(data)); // Dispatch action to add item to cart
        }
    };

    // Handle adding/removing items to/from favorites
    const handleFavorite = (data) => {
        dispatch(toggleFavorite(data)); // Dispatch action to toggle favorites
    };

    // Check if item is in the cart (for displaying button states)
    const isInCart = (item) => {
        return cartProducts.some((cartItem) => cartItem.id === item.id);
    };

    // Check if item is in the favorites (for displaying heart icon states)
    const isFavorite = (item) => {
        return favoriteProducts.some((favItem) => favItem.id === item.id);
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
                            {/* Hover Actions */}
                            <div className="text-blue-700 flex ml-[-120px] absolute mt-[-250px] gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-blue-950">
                                {/* Cart Icon: Filled if item is in cart */}
                                <button onClick={() => handleAddToCart(item)}>
                                    {isInCart(item) ? (
                                        <FaShoppingCart className="text-blue-900" />
                                    ) : (
                                        <CiShoppingCart className="text-blue-700" />
                                    )}
                                </button>

                                {/* Heart Icon: Filled if item is in favorites */}
                                <button onClick={() => handleFavorite(item)}>
                                    {isFavorite(item) ? (
                                        <FaHeart className="text-red-700" />
                                    ) : (
                                        <FaRegHeart className="text-red-700" />
                                    )}
                                </button>

                                {/* Search Icon */}
                                <LiaSearchPlusSolid />
                            </div>
                            
                            {/* Product Image */}
                            <div className="bg-gray-100 w-[200px] top-0 h-[210px] flex justify-center items-center">
                                <img src={item.images[0]} className="w-[200px] h-[210px]" alt="Product" />
                            </div>
                            
                            {/* Product Title with Truncate */}
                            <h2 className="text-pink-700 font-semibold font-sans py-[5px] group-hover:text-white px-[5px] text-[16px] text-center truncate w-full overflow-hidden whitespace-nowrap">
                                {item.title}
                            </h2>
                            
                            {/* Product Price */}
                            <p className="text-[12px]">Price: ${item.price}.00</p>

                            {/* Add to Cart Button */}
                            <div className="text-center mt-2">
                                <button
                                    onClick={() => handleAddToCart(item)}
                                    className={`text-white py-1 px-4 rounded-md ${isInCart(item) ? 'bg-pink-800' : 'bg-blue-900'} hover:bg-opacity-80 transition-all`}
                                >
                                    {isInCart(item) ? 'Added to Cart' : 'Add to Cart'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;
