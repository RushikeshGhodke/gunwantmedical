import React from 'react'

const DeliveryCards = () => {
    return (
        <div className='flex flex-col gap-4 lg:gap-6 w-full lg:w-[35%]'>
            <div className='bg-[#A4E5AF33] flex flex-row px-6 py-4 gap-4 rounded-md lg:rounded-xl w-full'>
                <img src={'/order-confirmation.png'} alt='Express Delivery' className='w-[60px] h-[60px]' />
                <div className='flex flex-col justify-center items-start'>
                    <h1 className='text-[#252525] lg:text-xl text-left'>Order confirmation</h1>
                    <p className='text-[#949494] font-light text-xs lg:text-[16px] text-left'>Instant confirmation after order placement</p>
                </div>
            </div>

            <div className='bg-[#A4E5AF33] flex flex-row px-6 py-4 gap-4 rounded-xl w-full'>
                <img src={'/express-delivery.png'} alt='Express Delivery' className='w-[60px] h-[60px]' />
                <div className='flex flex-col justify-center items-start'>
                    <h1 className='text-[#252525] lg:text-xl text-left'>Express delivery</h1>
                    <p className='text-[#949494] font-light text-xs lg:text-[16px] text-left'>30min delivery in your area</p>
                </div>
            </div>

            <div className='bg-[#A4E5AF33] flex flex-row px-6 py-4 gap-4 rounded-xl w-full'>
                <img src={'/secure-payment.png'} alt='Express Delivery' className='w-[60px] h-[60px]' />
                <div className='flex flex-col justify-center items-start'>
                    <h1 className='text-[#252525] lg:text-xl text-left'>Secure payment</h1>
                    <p className='text-[#949494] font-light text-xs lg:text-[16px] text-left'>Pay online or cash on delivery</p>
                </div>
            </div>

        </div>
    )
}

export default DeliveryCards