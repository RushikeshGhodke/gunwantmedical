import React from 'react'

const MadeSimple = () => {
    return (
        <div className='h-max py-24 lg:px-32 flex flex-col justify-center items-center'>
            <h1 className='text-[#252525] text-3xl sm:text-[40px] text-center mb-12'>Healthcare made simple</h1>
            <p className='text-[#7A7676] text-center text-md md:text-xl px-6 font-light mb-14 lg:w-[35%]'>Easily access quality healthcare essentials with seamless ordering, reliable service, and hassle-free delivery.</p>

            <div className=''>
                <div>
                    <div className='flex flex-row group gap-5 md:gap-12 lg:hover:bg-[#E4F8E7] md:px-20 md:py-16 p-3 rounded-3xl relative m-3 lg:w-3/4 lg:m-auto justify-center'>
                        <div className=''>
                            <div className="relative">
                                <div className='h-[30px] w-[30px] md:h-[35px] md:w-[35px] bg-[#9CDBA6] lg:group-hover:bg-[#468585] rounded-full'></div>
                                <div className="absolute top-[-6px] left-[-6px] md:top-[-7px] md:left-[-7px] h-[43px] w-[43px] md:h-[50px] md:w-[50px] border-4 border-[#A4C9BF] rounded-full opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className='w-[6px] h-[270px] md:w-[8px] lg:h-[375px] z-10 bg-[#1C68681A] absolute left-[13px] top-[30px] md:top-[35px]'></div>
                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row gap-4 md:gap-10'>
                            <img src={'/home-delivery.png'} alt='Home Delivery' className='w-[240px] h-[160px] lg:w-[380px] lg:h-[280px]' />
                            <div className=''>
                                <h1 className='text-xl mb-2 md:text-[27px] text-[#252525] lg:mb-3'>Home Delivery</h1>
                                <p className='font-light text-sm md:text-lg lg:group-hover:text-[#4A8887] text-[#949494]'>Get your medicines delivered at your doorstep within 30 minutes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div>
                <div className='flex flex-row group gap-5 md:gap-12 lg:hover:bg-[#E4F8E7] md:px-20 md:py-16 p-3 rounded-3xl relative m-3 lg:w-3/4 lg:m-auto justify-center'>
                    <div className=''>
                        <div className="relative">
                            <div className='h-[30px] w-[30px] md:h-[35px] md:w-[35px] bg-[#9CDBA6] lg:group-hover:bg-[#468585] rounded-full'></div>
                            <div className="absolute top-[-6px] left-[-6px] md:top-[-7px] md:left-[-7px] h-[43px] w-[43px] md:h-[50px] md:w-[50px] border-4 border-[#A4C9BF] rounded-full opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className='w-[6px] h-[270px] md:w-[8px] lg:h-[375px] z-10 bg-[#1C68681A] absolute left-[13px] top-[30px] md:top-[35px]'></div>
                        </div>                    </div>
                    <div className='flex flex-col lg:flex-row gap-4 md:gap-10'>
                        <img src={'/personal-care.png'} alt='Personal Care' className='w-[240px] h-[160px] lg:w-[380px] lg:h-[280px]' />
                        <div className=''>
                            <h1 className='text-xl mb-2 md:text-[27px] text-[#252525] lg:mb-3'>Personal Care</h1>
                            <p className='font-light text-sm md:text-lg lg:group-hover:text-[#4A8887] text-[#949494]'>Get personalized healthcare recommendation and remainders.</p>
                        </div>
                    </div>
                </div>
            </div>



            <div>
                <div className='flex flex-row group gap-5 md:gap-12 lg:hover:bg-[#E4F8E7] md:px-20 md:py-16 p-3 rounded-3xl relative m-3 lg:w-3/4 lg:m-auto justify-center'>
                    <div className=''>
                        <div className="relative">
                            <div className='h-[30px] w-[30px] md:h-[35px] md:w-[35px] bg-[#9CDBA6] lg:group-hover:bg-[#468585] rounded-full'></div>
                            <div className="absolute top-[-6px] left-[-6px] md:top-[-7px] md:left-[-7px] h-[43px] w-[43px] md:h-[50px] md:w-[50px] border-4 border-[#A4C9BF] rounded-full opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className='w-[6px] h-0 md:w-[8px] lg:h-0 z-10 bg-[#1C68681A] absolute left-[13px] top-[30px] md:top-[35px]'></div>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-4 md:gap-10'>
                        <img src={'/digital-prescriptions.png'} alt='Personal Care' className='w-[240px] h-[160px] lg:w-[380px] lg:h-[280px]' />
                        <div className=''>
                            <h1 className='text-xl mb-2 md:text-[27px] text-[#252525] lg:mb-3'>Digital Prescription</h1>
                            <p className='font-light text-sm md:text-lg lg:group-hover:text-[#4A8887] text-[#949494]'>Upload prescriptions online for fast, verified medicine orders, approved by licensed pharmacists.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MadeSimple