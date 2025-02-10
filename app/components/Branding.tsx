import Image from 'next/image'
import React from 'react'

const Branding = () => {
    return (
        <div className='h-[80vh] flex flex-col justify-center items-center'>
            <Image src={`/logo.png`} alt={`logo`} width={150} height={150} />
            <h1 className="bg-gradient-to-r font-bold text-center mt-6 tracking-[2px] from-[#468585] to-[#024444] bg-clip-text text-transparent text-4xl">
                Gunwant <br /> Medical
            </h1>

        </div>
    )
}

export default Branding