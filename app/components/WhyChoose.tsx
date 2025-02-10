import React from 'react'
import Image from 'next/image'

const WhyChoose = () => {
    return (
        <div className='h-max bg-[#EEEEEE] flex flex-col items-center gap-16 px-6 sm:px-8 md:px-16'>
            <h1 className='text-[#252525] text-[32px] sm:text-[40px] mt-16 text-center'>
                Why choose <span className='text-[#468585]'>us?</span>
            </h1>

            <div className='flex flex-col sm:flex-row gap-10 justify-center px-8 items-center flex-wrap'>
                {/* card */}
                <div className='w-full sm:w-72 bg-[#468585] p-6 sm:p-10 text-white rounded-xl drop-shadow-xl'>
                    <Image className='text-[#525252] mt-6' src={'/bestprices.svg'} width={85} height={85} alt={'Best Prices'} />
                    <h1 className='text-[20px] sm:text-[22px] leading-[24px] sm:leading-[26px] mt-8 sm:mt-12'>
                        Best<br />prices
                    </h1>
                    <p className='font-light leading-[18px] sm:leading-[20px] mt-4 sm:mt-6'>
                        Enjoy affordable healthcare solutions with unbeatable deals and discounts.
                    </p>
                </div>

                <div className='w-full sm:w-72 bg-[#FFFFFF] p-6 sm:p-10 text-black rounded-xl drop-shadow-xl'>
                    <Image className='text-[#525252] mt-6' src={'/genuine.svg'} width={85} height={85} alt={'Genuine'} />
                    <h1 className='text-[20px] sm:text-[22px] leading-[24px] sm:leading-[26px] mt-8 sm:mt-12'>
                        100% genuine products
                    </h1>
                    <p className='font-light leading-[18px] sm:leading-[20px] mt-4 sm:mt-6'>
                        All medicines are directly sourced from manufacturers with quality assurance.
                    </p>
                </div>

                <div className='w-full sm:w-72 bg-[#FFFFFF] p-6 sm:p-10 text-black rounded-xl drop-shadow-xl'>
                    <Image className='text-[#525252] mt-6' src={'/support.svg'} width={85} height={85} alt={'Support'} />
                    <h1 className='text-[20px] sm:text-[22px] leading-[24px] sm:leading-[26px] mt-8 sm:mt-12'>
                        24/7 <br /> Support
                    </h1>
                    <p className='font-light leading-[18px] sm:leading-[20px] mt-4 sm:mt-6'>
                        Our experts are always available to assist you with any questions or concerns.
                    </p>
                </div>
            </div>

            <p className='text-[#7A7676] text-sm sm:text-lg text-center font-semibold mt-8 mb-24'>
                We ensure trusted healthcare with quality products, <br /> great value, and dedicated customer support.
            </p>
        </div>
    )
}

export default WhyChoose
