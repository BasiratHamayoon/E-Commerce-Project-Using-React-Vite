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

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle Menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

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
            id: 5,
            title: "Signin",
            url: "/Signin",
            icon: <BsFillSignIntersectionFill />
        },
    ];

    return (
        <div>
            <div className='w-full py-[25px] flex justify-between lg:px-[80px] px-[20px] border border-b shadow-sm'>
                {/* Logo */}
                <div>
                    <h1 className='lg:text-[30px] text-[20px] font-bold font-sans'>OnlineShop</h1>
                </div>

                {/* Menu Items for Large Screens */}
                <div className='hidden lg:flex items-center space-x-6'>
                     {navItems.map((items) => (
                         <Link
                         key={items.id}
                         to={items.url}
                         className='text-gray-700 hover:text-gray-900 flex items-center space-x-2'
                         >
                        <span>{items.icon}</span>
                        <span className='border-b-2 border-transparent hover:border-gray-700 transition-all duration-300 ease-in-out'>
                        {items.title}
                        </span>
                        </Link>
                     ))}
              </div>


                {/* Right Section */}
                <div className='flex items-center gap-4'>
                    {/* Search for Large Screens */}
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

                    {/* Icons */}
                    <CiHeart size={25} />
                    <PiShoppingCartLight size={25} />

                    {/* Burger Menu for Small and Medium Screens */}
                    <div className='lg:hidden'>
                        <CiMenuBurger size={25} onClick={toggleMenu} />
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden fixed top-0 left-0 w-[250px] h-full bg-white transition-all duration-300 ease-in-out transform ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <ul className='flex flex-col px-[20px] pt-[20px]'>
                    {/* Search for Mobile Menu */}
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
                    {navItems.map((items) => (
                        <li key={items.id} className='flex my-[16px] gap-2 px-[10px]'>
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
