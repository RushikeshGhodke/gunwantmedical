"use client";
import {useRef} from "react";
import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";

export default function Home() {
    const videoRef = useRef(null);

    return (
        <div className="bg-[#468585] px-4 py-9 relative w-full h-max 2xl:h-screen 2xl:flex justify-center items-center">
            {/* Video Background */}
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

            {/* Gradient Overlay */}
            <div
                className="absolute inset-0 bg-gradient-to-r from-[rgba(0,57,57,0.8)] to-[rgba(28,104,104,0.8)] bg-opacity-50"></div>

            <Navbar/>
            <HeroSection/>
        </div>
    );
}
