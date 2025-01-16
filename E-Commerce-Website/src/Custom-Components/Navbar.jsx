import React, { useState } from 'react';
import { IoMdHome } from "react-icons/io";
import { AiFillProduct } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";
import { BsFillSignIntersectionFill } from "react-icons/bs";
import { PiShoppingCartLight } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { favoriteProducts } = useSelector((state) => state?.favorite);
    console.log(favoriteProducts)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Define main navigation items for both desktop and mobile
    const navItems = [
        {
            id: 1,
            title: "Home",
            url: "/",
            icon: <IoMdHome />
        },
        {
            id: 2,
            title: "Products",
            url: "/Products",
            icon: <AiFillProduct />
        },
        {
            id: 3,
            title: "Contact",
            url: "/Contact",
            icon: <IoMdContact />
        },
        {
            id: 6,
            title: "Signin",
            url: "/Signin",
            icon: <BsFillSignIntersectionFill />
        },
    ];

    return (
        <div>
            <div className='w-full py-[25px] flex justify-between lg:px-[80px] px-[20px] border border-b shadow-sm'>
                <div>
                    <h1 className='lg:text-[30px] text-[20px] font-semibold text-black font-sans'>OnlineShop</h1>
                </div>

                {/* Desktop Navigation */}
                <div className='hidden lg:flex items-center space-x-6'>
                    {navItems.map((items) => (
                        <Link
                            key={items.id}
                            to={items.url}
                            className='text-gray-700 flex items-center space-x-2 hover:text-black'
                        >
                            <span>{items.icon}</span>
                            <span
                                className='border-b-2 border-transparent transition-all duration-300 ease-in-out hover:border-black'
                            >
                                {items.title}
                            </span>
                        </Link>
                    ))}
                </div>

                <div className='flex items-center gap-4'>
                    {/* Search Bar */}
                    <div className='hidden lg:flex items-center border rounded-sm'>
                        <input
                            type="text"
                            className='focus:outline-none p-[5px]'
                            name="search"
                            id="search"
                            placeholder='Search'
                        />
                        <CiSearch size={25} />
                    </div>

                    <Link to="/Favorites" className="relative hover:text-black">
                        <div className="relative">
                            {/* Only show the badge if there are favorite products */}
                            {favoriteProducts?.length > 0 && (
                                <span className="absolute top-[-6px] right-[-4px] bg-pink-600 text-white text-xs w-[16px] h-[16px] flex justify-center items-center rounded-full z-10">
                                    {favoriteProducts.length}
                                </span>
                            )}
                            <CiHeart size={25} />
                        </div>
                    </Link>

                    <Link to="/Cart" className='hover:text-black'>
                        <PiShoppingCartLight size={25} />
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <div className='lg:hidden'>
                        <CiMenuBurger size={22} onClick={toggleMenu} />
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`lg:hidden fixed top-0 left-0 w-[250px] h-full bg-white transition-all duration-300 ease-in-out transform ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <ul className='flex flex-col px-[20px] pt-[20px]'>
                    {/* Search Bar */}
                    <label htmlFor="search">
                        <div className='flex border rounded-sm items-center w-full'>
                            <input
                                type="text"
                                className='focus:outline-none p-[5px] w-full'
                                name="search"
                                id="search"
                                placeholder='Search'
                            />
                            <CiSearch size={25} />
                        </div>
                    </label>

                    {/* Render Main Navigation Items */}
                    {navItems.map((items) => (
                        <li key={items.id} className='flex my-[16px] gap-2 px-[10px] hover:text-black'>
                            <span>{items.icon}</span>
                            <Link to={items.url}>{items.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
