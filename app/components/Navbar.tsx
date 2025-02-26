"use client";
import React, {useState} from 'react'
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import Image from "next/image";

const Navbar = () => {
    const [toggleNav, setToggleNav] = useState(false);

    return (
        <header>
            <nav
                className="fixed instrument-sans top-4 left-4 right-4 z-50 flex items-center justify-between px-6 py-3 bg-white text-[#468585] rounded-md lg:rounded-2xl lg:px-16 lg:py-4 lg:left-10 lg:right-10"
            >
                {/* Logo Section */}
                <div className="flex items-center justify-between gap-4">
                    <Image src={`/logo.png`} alt={`logo`} width={24} height={40}/>
                    <h1 className="text-[16px] tracking-wide lg:text-[20px]">
                        Gunwant Medicals
                    </h1>
                </div>

                {/* Hamburger Menu */}
                <div className="lg:hidden">
                    {toggleNav ? (
                        <XMarkIcon
                            onClick={() => setToggleNav(false)}
                            className="h-7 w-7 text-[#468585] cursor-pointer hover:text-[#356E6E]"
                        />
                    ) : (
                        <Bars3Icon
                            onClick={() => setToggleNav(true)}
                            className="h-7 w-7 text-[#468585] cursor-pointer hover:text-[#356E6E]"
                        />
                    )}
                </div>

                {/* Desktop Links */}
                <div className="hidden lg:flex gap-10">
                    <a href="#home" className="text-[17px] font-normal hover:text-[#356E6E]">Home</a>
                    <a href="#gallery" className="text-[17px] font-normal hover:text-[#356E6E]">Gallery</a>
                    <a href="#categories"
                       className="text-[17px] font-normal hover:text-[#356E6E]">Categories</a>
                    <a href="#contact" className="text-[17px] font-normal hover:text-[#356E6E]">Contact Us</a>
                </div>
            </nav>

            {/* Expandable Mobile Menu */}
            <div
                className={`fixed left-4 right-4 top-4 rounded-md z-40 h-[95%] bg-white text-[#468585] transform transition-transform duration-300 ${
                    toggleNav ? "translate-x-0" : "-translate-x-[-120%]"
                }`}
            >
                <ul className="flex flex-col items-center justify-center gap-7 h-full">
                    <li>
                        <a
                            href="#home"
                            className="text-[18px] font-normal hover:text-[#356E6E]"
                            onClick={() => setToggleNav(false)}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#gallery"
                            className="text-[18px] font-normal hover:text-[#356E6E]"
                            onClick={() => setToggleNav(false)}
                        >
                            Gallery
                        </a>
                    </li>
                    <li>
                        <a
                            href="#categories"
                            className="text-[18px] font-normal hover:text-[#356E6E]"
                            onClick={() => setToggleNav(false)}
                        >
                            Categories
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="text-[18px] font-normal hover:text-[#356E6E]"
                            onClick={() => setToggleNav(false)}
                        >
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>

        </header>
    )
}
export default Navbar
