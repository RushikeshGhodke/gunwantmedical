import React from 'react'

const Testimonials = () => {
    return (
        <div className='h-[270vh] lg:h-[130vh] bg-[#EEEEEE] flex flex-col items-center gap-16 px-6 sm:px-8 md:px-16'>

            <h1 className='text-[#252525] text-[32px] sm:text-[40px] mt-16 text-center'>
                What our <span className='text-[#468585]'>customers</span> say
            </h1>
            <p className='text-[#7A7676] text-center text-md md:text-xl px-6 font-light mb-10 lg:w-[45%]'>Trusted by thousands for our quality products, reliable service, and exceptional customer experience.</p>

            <div className='flex flex-col lg:flex-row gap-10'>
                <div className='border-2 border-[#9CDBA6] rounded-3xl flex flex-col gap-5 p-10 w-80'>
                    <div>
                        <img src="./rahulsharma.png" alt="" />
                    </div>
                    <div>
                        <h1 className='text-[#024444] text-2xl lg:text-2xl'>Rahul Sharma</h1>
                        <p className='text-[#949494] text-md lg:text:lg font-[300]'>Regular customer</p>
                    </div>
                    <p className='text-[#474747] text-lg font-[400] mb-4'>“Great medical store in Nashik. My personal experience with Gunwant Store was fabulous and awesome.”</p>
                    <div className='flex flex-row gap-3'>
                        <img src="./star-vector.png" alt="star" />
                        <img src="./star-vector.png" alt="star" />
                        <img src="./star-vector.png" alt="star" />
                        <img src="./star-vector.png" alt="star" />
                        <img src="./star-vector.png" alt="star" />
                    </div>
                </div>

                <div className='border-2 border-[#9CDBA6] rounded-3xl flex flex-col gap-5 p-10 w-80'>
                    <div>
                        <img src="./rahulsharma.png" alt="" />
                    </div>
                    <div>
                        <h1 className='text-[#024444] text-2xl lg:text-2xl'>Rahul Sharma</h1>
                        <p className='text-[#949494] text-md lg:text:lg font-[300]'>Regular customer</p>
                    </div>
                    <p className='text-[#474747] text-lg font-[400] mb-4'>“Great medical store in Nashik. My personal experience with Gunwant Store was fabulous and awesome.”</p>
                    <div className='flex flex-row gap-3'>
                        <img src="./star-vector.png" alt="star" />
                        <img src="./star-vector.png" alt="star" />
                        <img src="./star-vector.png" alt="star" />
                        <img src="./star-vector.png" alt="star" />
                        <img src="./star-vector.png" alt="star" />
                    </div>
                </div>

                <div className='border-2 border-[#9CDBA6] rounded-3xl flex flex-col gap-5 p-10 w-80'>
                    <div>
                        <img src="./rahulsharma.png" alt="" />
                    </div>
                    <div>
                        <h1 className='text-[#024444] text-2xl lg:text-2xl'>Rahul Sharma</h1>
                        <p className='text-[#949494] text-md lg:text:lg font-[300]'>Regular customer</p>
                    </div>
                    <p className='text-[#474747] text-lg font-[400] mb-4'>“Great medical store in Nashik. My personal experience with Gunwant Store was fabulous and awesome.”</p>
                    <div className='flex flex-row gap-3'>
                        <img src="./star-vector.png" alt="star" />
                        <img src="./star-vector.png" alt="star" />
                        <img src="./star-vector.png" alt="star" />
                        <img src="./star-vector.png" alt="star" />
                        <img src="./star-vector.png" alt="star" />
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default Testimonials