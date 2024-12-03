import React from 'react'
import Image from 'next/image';


const Hotel = () => {
  return (
    <div id='hotel' className='bg-[#121212] pb-[4rem] pt-[4rem] md:pt-[8rem]'>
      <div className='grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center'>
        <div>
          <h1 className='text-[#7b2499] text-[40px] font-bold mb-[1rem]'>Find the Perfect Room
            for Your Stay</h1>
          <div className='mb-[3rem] flex items-center md:space-x-10 text-white'>
            <p className='text-[16px] text-slate-300 w-[80%]'>Retrieving your hotel reservation using your booking ID is quick and hassle-free at <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#c084fc] to-[#db2777]'>Link In Blink</span>. Simply enter your unique booking ID on our website&apos;s &quot;Manage Your Booking&quot; page, and you&apos;ll instantly access your reservation details. Whether you need to view your booking, modify dates, add special requests, or cancel your stay, managing your reservation is easy and convenient.</p>
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
