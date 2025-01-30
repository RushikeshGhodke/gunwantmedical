"use client";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import Image from "next/image";
import {useRef, useState} from "react";

export default function Home() {
    const [toggleNav, setToggleNav] = useState(false);
    const videoRef = useRef(null);
    return (
        <div className={`bg-[#468585] px-4 py-9 relative w-full h-screen overflow-hidden`}>
            <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/video.mp4" type="video/mp4"/>
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,57,57,0.8)] to-[rgba(28,104,104,0.8)] bg-opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 md:px-20 text-white"></div>
                <header>
                    <nav
                        className="fixed instrument-sans top-4 left-4 right-4 z-50 flex items-center justify-between px-6 py-3 bg-white text-[#468585] rounded-2xl lg:px-16 lg:py-4"
                    >
                        {/* Logo Section */}
                        <div className="flex items-center justify-between gap-4">
                            <Image src={`/Gemini.svg`} alt={`logo`} width={24} height={40}/>
                            <h1 className="text-[16px] tracking-wide lg:text-[20px]">
                                Gunwant Medical
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
                        className={`fixed left-4 right-4 top-4 rounded-2xl z-40 h-[90%] bg-white text-[#468585] transform transition-transform duration-300 ${
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

                {/* Content below the navbar */}
                <div className="pt-20">
                    {/* Add the rest of your content here */}
                </div>
            </div>
            );
            }
