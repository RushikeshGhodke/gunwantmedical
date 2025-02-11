import React from 'react'

const GetInTouch = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-between items-start h-auto lg:h-[100vh] p-10 lg:p-32 gap-10'>
            {/* Left Section: Contact Details */}
            <div className='lg:w-[50%] flex flex-col gap-10'>
                <h1 className='text-3xl lg:text-5xl font-semibold'>
                    Get in touch
                </h1>
                <p className='text-[#7A7676] font-light text-lg lg:text-xl'>
                    Reach out to us for any queries, assistance, or support—we&apos;re here to help!
                </p>

                <div className='flex flex-col gap-6'>
                    <div className='flex flex-row gap-5 items-start'>
                        <img src="./getintouch-call.png" alt="Call" className='w-6 lg:w-8' />
                        <p className='text-[#949494] lg:text-lg'>7058812287</p>
                    </div>

                    <div className='h-[1px] bg-[#D9D9D9] w-full'></div>

                    <div className='flex flex-row gap-5 items-start'>
                        <img src="./getintouch-mail.png" alt="Email" className='w-6 lg:w-8' />
                        <p className='text-[#949494] lg:text-lg'>gunwantmedical@gmail.com</p>
                    </div>

                    <div className='h-[1px] bg-[#D9D9D9] w-full'></div>

                    <div className='flex flex-row gap-5 items-start'>
                        <img src="./getintouch-map.png" alt="Location" className='w-6 lg:w-8' />
                        <p className='text-[#949494] lg:text-lg leading-6'>
                            Rajiv Gandhi Bhavan (NMC), 5, Balwant Chambers Near, Sharanpur Rd, Nashik, Maharashtra - 422002.
                        </p>
                    </div>
                    <div className='h-[1px] bg-[#D9D9D9] w-full'></div>
                </div>
            </div>

            {/* Right Section: Contact Form */}
            <div className='bg-[#7DC38833] w-[100%] lg:w-[40%] p-8 lg:p-10 h-max rounded-xl'>
                <form className='flex flex-col gap-5'>
                    <div className='flex flex-col lg:flex-row gap-4'>
                        <div className='flex flex-col w-full lg:w-1/2'>
                            <label htmlFor="firstName" className='text-[#024444] text-sm mb-1'>First name</label>
                            <input type="text" id='firstName' placeholder='Rushikesh' className='font-light text-[13px] p-2 tracking-[1px] rounded-md' />
                        </div>
                        <div className='flex flex-col w-full lg:w-1/2'>
                            <label htmlFor="lastName" className='text-[#024444] text-sm mb-1'>Last name</label>
                            <input type="text" id='lastName' placeholder='Ghodke' className='font-light text-[13px] p-2 tracking-[1px] rounded-md' />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="email" className='text-[#024444] text-sm mb-1'>Email</label>
                        <input type="email" id='email' placeholder='rushikeshnandughodke@gmail.com' className='font-light text-[13px] p-2 tracking-[1px] rounded-md' />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="phone" className='text-[#024444] text-sm mb-1'>Phone</label>
                        <input type="tel" id='phone' placeholder='7458963214' className='font-light text-[13px] p-2 tracking-[1px] rounded-md' />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="message" className='text-[#024444] text-sm mb-1'>Message</label>
                        <textarea id='message' placeholder='How can I help you?' cols={100} rows={4} className='font-light text-[13px] p-2 tracking-[1px] rounded-md'></textarea>
                    </div>

                    <button className='bg-[#468585] text-white flex flex-row items-center justify-between px-4 py-2 rounded-md'>
                        <span>Send message</span>
                        <img src="./send-msg-arrow.png" alt="Arrow" />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default GetInTouch
