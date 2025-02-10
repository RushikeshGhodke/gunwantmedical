import React from 'react'

const Gallery = () => {
    return (
        <div>
            <div className='h-[80vh] flex flex-col items-center lg:items-start justify-center gap-2 lg:px-48 lg:gap-10'>
                <h1 className='flex flex-row lg:flex-col text-3xl gap-2 lg:text-6xl lg:gap-3'>
                    <span className='text-white'>Our</span>
                    <span className='text-[#A4E5AF]'>Gallery</span>
                </h1>
                <button className='text-[#3D3D3D] w-max bg-white px-5 py-1 lg:px-7 lg:py-3 rounded-md lg:rounded-full'>View all</button>
            </div>
        </div>
    )
}

export default Gallery