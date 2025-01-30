"use client";
import { useRef } from "react";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";

export default function Home() {
    const videoRef = useRef(null);
    return (
        <div className={`bg-[#468585] px-4 py-9 relative w-full h-screen overflow-hidden`}>
            {/* Video background */}
            <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/video.mp4" type="video/mp4" />
            </video>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,57,57,0.8)] to-[rgba(28,104,104,0.8)] bg-opacity-50"></div>

            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <div
                className="relative mt-7 z-20 flex flex-col gap-4 items-start w-[60%] justify-center h-full px-4 md:px-20 text-[#FFF] stolzl">
                <h2 className="text-[5.5rem] font-normal text-[#EBEBEB] flex flex-col gap-2 leading-none">
                    <div>Your <span className="text-[#9CDBA6]">Health</span></div>
                    <div>Journey,</div>
                    <div>Made Simple</div>
                </h2>

                <p className="mt-4 text-[10px] font-light md:text-xl">
                    Affordable prices. Quick delivery. Trusted care. <br/>Shop everything you need for a healthier
                    tomorrow.
                </p>
                <p className="mt-10 flex lg:text-2xl items-center justify-center md:justify-start font-light gap-2">
                    ⭐ 4.8/5 rated on <span><Image src={'/google.png'} width={32} height={32} alt={'Google'}/></span>
                </p>
            </div>
        </div>
    );
}
