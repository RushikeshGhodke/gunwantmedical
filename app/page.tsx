"use client";
import {useRef} from "react";
import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";

export default function Home() {
    const videoRef = useRef(null);

    return (
        <div className="bg-[#468585] px-4 py-9 relative w-full h-[125vh] lg:h-screen">
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
