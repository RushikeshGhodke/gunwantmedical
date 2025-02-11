import React from 'react'
import Link from 'next/link'

const Developer = () => {
  return (
    <>
      <div className='text-white text-sm font-light p-5'><span className='block lg:inline'>© 2025 Gunwant Medical.</span> All Rights Reserved <span className='hidden lg:visible'>|</span> <span className='mt-3 block lg:inline'>Developed and Managed by <Link href={'https://rushikeshghodke.tech'} target='_blank' className='ml-1 underline tracking-wide'> ghodkeTechnologies</Link></span></div>
    </>
  )
}

export default Developer