"use client";
import {useRef} from "react";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";

export default function Home() {
    const videoRef = useRef(null);

    return (
        <div className="bg-[#468585] px-4 py-9 relative w-full h-screen">
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

            {/* Navbar */}
            <Navbar/>

            {/* Hero Section */}
            <div
                className="relative mt-7 flex flex-row items-start justify-center lg:mt-24 lg:gap-16 text-[#FFF]">
                <div className={'mt-8'}>
                    <h2 className="text-[6rem] font-normal text-[#EBEBEB] leading-none">
                        <div>Your <span className="text-[#9CDBA6]">Health</span></div>
                        <div>Journey,</div>
                        <div>Made Simple</div>
                    </h2>

                    <p className="mt-10 text-[10px] font-light md:text-xl">
                        Affordable prices. Quick delivery. Trusted care. <br/>Shop everything you need for a healthier
                        tomorrow.
                    </p>
                    <p className="mt-12 flex lg:text-2xl items-center justify-center md:justify-start font-light gap-2">
                        ⭐ 4.8/5 rated on
                        <span>
                        <Image src={'/google.png'} width={32} height={32} alt={'Google'}/>
                    </span>
                    </p>
                </div>

                {/* Image Grid */}
                <div className="flex flex-row gap-7">
                    <div className="flex flex-col">
                        <img className={`w-[240px]`} src={'/white-shelf.png'} alt={'Shelf'}/>
                    </div>
                    <div className="flex flex-col gap-7">
                        <img className={`w-[260px]`} src={'/orange-medicine.png'} alt={'Medicine'}/>
                        <img className={`w-[260px]`} src={'/org-shelf.png'} alt={'Shelf'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
