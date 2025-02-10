"use client";
import { useRef } from "react";
import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import WhyChoose from "./components/WhyChoose";
import MadeSimple from "./components/MadeSimple";

export default function Home() {
    const videoRef = useRef(null);

    return (
        <>
            {/* Video Background for Entire Website */}
            <div className="fixed inset-0 w-full h-full -z-10">
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

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,57,57,0.8)] to-[rgba(28,104,104,0.8)] bg-opacity-50"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10">
                <Navbar />
                <HeroSection />

                {/* Why Choose Us Section - Override video using bg-white */}
                <section className="relative z-20 bg-white">
                    <WhyChoose />
                </section>

                <section className="relative z-20 bg-white">
                    <MadeSimple />
                </section>

                {/* Any section that needs video visible, just remove bg-white */}
                <section className="relative z-10 h-[100vh]">
                    <div className="h-full flex items-center justify-center text-white">
                        This section will have the video background.
                    </div>
                </section>
            </div>
        </>
    );
}
