import React from 'react'
import Image from 'next/image';

const Event = () => {
  return (
    <div id='event' className='bg-[#000] pb-[4rem] pt-[4rem] md:pt-[8rem]'>
     <div className='grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center'>
     <div data-aos='fade-right' className='lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative'>
      <Image src="/images/event.jpg" alt="user" layout="fill" objectFit='contain' className='relative z-[11] w-[100%] h-[100%] object-contain'/>
      <div className='absolute w-[100%] h-[100%] z-[10] bg-[#7b2499] top-[-2rem] left-[-2rem]'></div>
      </div>
      <div>
        <h1 className='text-[#7b2499] text-[40px] font-bold mb-[1rem]'>Ready to Book Your Event?</h1>
        <div className='mb-[3rem] flex items-center md:space-x-10 text-white'>
          <p className='text-[16px] text-slate-300 w-[80%]'>Booking tickets for your next event has never been easier with <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#c084fc] to-[#db2777]'>Link In Blink</span>. Whether you&apos;re attending a concert, theater performance, sports game, or special event, our platform offers a seamless and secure way to purchase tickets.We provide real-time updates on ticket availability, exclusive offers, and multiple payment options to ensure a hassle-free experience.</p>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Event
