import React from 'react'

const Footer = () => {
    return (
        <div className='text-white flex flex-col lg:flex-row gap-20 h-max p-10 lg:p-20'>
            <div className='lg:w-1/4'>
                <p className='text-[#9CDBA6] text-xl mb-4'>Gunwant Medical</p>
                <p className='text-white font-light text-sm tracking-[0.8px]'>Providing trusted medicines and healthcare products across India. Your one-stop destination for prescription medicines, wellness products, and medical equipment.</p>
            </div>

            <div className='flex flex-row gap-10'>
                <div className='lg:w-1/4'>
                    <p className='text-[#9CDBA6] text-lg mb-4'>Our Services</p>
                    <ul className='text-white font-light text-sm tracking-[0.8px] flex flex-col gap-3'>
                        <li>Online Medicine Delivery</li>
                        <li>Health & Wellness Products</li>
                        <li>Prescription Medicines</li>
                        <li>Medical Equipment</li>
                        <li>Doctor Consultation</li>
                    </ul>
                </div>

                <div className='lg:w-1/4'>
                    <p className='text-[#9CDBA6] text-lg mb-4'>Company</p>
                    <ul className='text-white font-light text-sm tracking-[0.8px] flex flex-col gap-3'>
                        <li>About Us</li>
                        <li>Our Team</li>
                        <li>Blog</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>


            <div className='lg:w-1/4'>
                <p className='text-[#9CDBA6] text-lg mb-4'>Stay Connected</p>
                <p className='text-white font-light text-sm tracking-[0.8px]'>Follow us for health tips & offers!</p>
                <p className='flex flex-row items-center mt-3 gap-1'><img src="./white-pill.png" width={25} alt="Pill" />Your Health, Our Priority!</p>
            </div>
        </div>
    )
}

export default Footer