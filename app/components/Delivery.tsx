import React, { useState, useEffect } from 'react'
import DeliveryCards from './DeliveryCards'
import DeliveryBoy from './DeliveryBoy'

const Delivery = () => {

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
        <div className='h-[150vh] lg:h-[100vh] flex flex-col items-center lg:flex-row p-10 lg:p-32 gap-10 lg:gap-24'>
            {
                isMobile === true ? (
                    <>
                        <DeliveryBoy />
                        <DeliveryCards />
                    </>
                ) : (
                    <>
                        <DeliveryCards />
                        <DeliveryBoy />
                    </>
                )
            }
            <img src="./male.png" alt="Male" className='w-[280px] lg:w-[420px] absolute bottom-0 lg:right-60' />

        </div>
    )
}

export default Delivery
