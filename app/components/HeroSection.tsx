import React, {useEffect, useState} from 'react'
import Image from "next/image";

const HeroSection = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <div>
            {/* Keep Original Layout for Desktop */}
            {!isMobile && (

                <div
                    className="relative mt-7 px-4 flex flex-col md:flex-row items-center justify-center lg:mt-24 lg:gap-16 text-[#FFF]">
                    <div className={'mt-8'}>
                        <h2 className="text-[6rem] font-normal text-[#EBEBEB] leading-none">
                            <div>Your <span className="text-[#9CDBA6]">Health</span></div>
                            <div>Journey,</div>
                            <div>Made Simple</div>
                        </h2>

                        <p className="mt-10 text-[10px] font-light md:text-xl">
                            Affordable prices. Quick delivery. Trusted care. <br/>Shop everything you need for a
                            healthier
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
            )}


            {/* Render Images Below Heading on Mobile */}
            {isMobile && (
                <div className={`relative mt-7 px-4 flex flex-col text-[#FFF]`}>
                    <div className="mt-8">
                        <h2 className="text-6xl md:text-6xl lg:text-[6rem] font-normal text-[#EBEBEB] leading-none">
                            <div>Your <span className="text-[#9CDBA6]">Health</span></div>
                            <div>Journey,</div>
                            <div>Made Simple</div>
                        </h2>

                        <div className="flex flex-row md:flex-row gap-5 items-end mt-10 md:mt-0">
                            <div className="flex flex-col">
                                <img className="w-[180px] md:w-[240px]" src={'/white-shelf.png'} alt={'Shelf'}/>
                            </div>
                            <div className="flex flex-col gap-5">
                                <img className="w-[180px] md:w-[260px]" src={'/orange-medicine.png'}
                                     alt={'Medicine'}/>
                                <img className="w-[180px] md:w-[260px]" src={'/org-shelf.png'} alt={'Shelf'}/>
                            </div>
                        </div>

                        <p className="mt-6 md:mt-10 font-light text-[16px] md:text-xl">
                            Affordable prices. Quick delivery. Trusted care. <br/>Shop everything you need for a
                            healthier tomorrow.
                        </p>
                        <p className="mt-8 flex items-center font-light gap-2">
                            ⭐ 4.8/5 rated on
                            <span>
                            <Image src={'/google.png'} width={26} height={26} alt={'Google'}/>
                        </span>
                        </p>
                    </div>


                </div>
            )}
        </div>
    );
}
export default HeroSection
