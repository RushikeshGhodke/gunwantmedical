import React from 'react'

const FeaturedCategories = () => {
    return (
        <div className='h-max py-24 lg:px-32 flex flex-col justify-center items-center'>
            <h1 className='text-[#252525] text-3xl sm:text-[40px] text-center mb-12'>Healthcare made simple</h1>
            <p className='text-[#7A7676] text-center text-md md:text-xl px-6 font-light mb-14 lg:w-[55%]'>Easily access quality healthcare essentials with seamless ordering, reliable service, and hassle-free delivery.</p>

            <div className='flex px-6 flex-col gap-5'>
                <div className='flex flex-col lg:flex-row gap-5'>
                    <div className="relative overflow-hidden rounded-md">
                        <div className="overflow-hidden">
                            <img
                                src="/medicines.png"
                                className="h-64 w-full object-cover transform transition-transform duration-300 hover:scale-110"
                                alt="Medicines"
                            />
                        </div>
                        <h1 className="absolute bottom-4 left-5 text-2xl text-white">Medicines</h1>
                    </div>

                    <div className="relative overflow-hidden rounded-xl">
                        <div className="overflow-hidden">
                            <img
                                src="/personal-care-facewash.png"
                                className="h-64 w-full object-cover transform transition-transform duration-300 hover:scale-110"
                                alt="Personal Care"
                            />
                        </div>
                        <h1 className="absolute bottom-4 left-5 text-2xl text-white">Personal Care</h1>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row gap-5'>
                    <div className="relative overflow-hidden rounded-md">
                        <div className="overflow-hidden">
                            <img
                                src="/suppliments.png"
                                className="h-64 w-full object-cover transform transition-transform duration-300 hover:scale-110"
                                alt="Suppliments"
                            />
                        </div>
                        <h1 className="absolute bottom-4 left-5 text-2xl text-white">Suppliments</h1>
                    </div>

                    <div className="relative overflow-hidden rounded-md">
                        <div className="overflow-hidden">
                            <img
                                src="/energy.png"
                                className="h-64 w-full object-cover transform transition-transform duration-300 hover:scale-110"
                                alt="Energy"
                            />
                        </div>
                        <h1 className="absolute bottom-4 left-5 text-2xl text-white">Energy</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedCategories