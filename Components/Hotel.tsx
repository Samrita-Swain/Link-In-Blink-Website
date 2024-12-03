import React from 'react'
import Image from 'next/image';


const Hotel = () => {
  return (
    <div id='hotel' className='bg-[#121212] pb-[4rem] pt-[4rem] md:pt-[8rem]'>
      <div className='grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center'>
        <div>
          <h1 className='text-[#7b2499] text-[40px] font-bold mb-[1rem]'>Booking ID Explorer</h1>
          <div className='mb-[3rem] flex items-center md:space-x-10 text-white'>
            <p className='text-[16px] text-slate-300 w-[80%]'>Gone are the days of searching through emails or printed confirmations. With <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#c084fc] to-[#db2777]'>Link In Blink</span>, you can access your hotel details with just a single entry. It&apos; fast, reliable, and designed to save you time, so you can focus on enjoying your trip instead of managing paperwork.</p>
          </div>
        </div>
        <div data-aos='fade-left' className='lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative'>
          <Image src="/images/hotel.jpg" alt="user" layout="fill" objectFit='contain' className='relative z-[11] w-[100%] h-[100%] object-contain' />
          <div className='absolute w-[100%] h-[100%] z-[10] bg-[#7b2499] top-[-2rem] right-[-2rem]'></div>
        </div>
      </div>
    </div>
  )
}

export default Hotel
