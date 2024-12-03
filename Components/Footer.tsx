import { DevicePhoneMobileIcon, EnvelopeIcon, MapIcon } from '@heroicons/react/16/solid'
import React from 'react'

const Footer = () => {
  return (
    <div id='footer' className='pt-[8rem] pb-[4rem] bg-[#000]'>
      <div className='grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-[3rem]'>
        <div className='flex items-center space-x-6'>
          <div data-aos='fade-right' className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#7b2499]'>
            <MapIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black'/>
          </div>
          <div>
            <h1 className='text-[20px] mb-[0.2rem] font-semibold text-[#fff]'>
              Address
            </h1>
            <p className='text-[15px] w-[90%] text-white opacity-60'>
              Lorem ipsum dolor sit.
            </p>
          </div>
        </div>
        <div className='flex items-center space-x-6'>
          <div data-aos='zoom-in' className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#7b2499]'>
            <DevicePhoneMobileIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black'/>
          </div>
          <div>
            <h1 className='text-[20px] mb-[0.2rem] font-semibold text-[#fff]'>
              Phone
            </h1>
            <p className='text-[15px] w-[90%] text-white opacity-60'>
              +099876543210 <br />
              +911243567890
            </p>
          </div>
        </div>
        <div className='flex items-center space-x-6'>
          <div data-aos='fade-left' className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#7b2499]'>
            <EnvelopeIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black'/>
          </div>
          <div>
            <h1 className='text-[20px] mb-[0.2rem] font-semibold text-[#fff]'>
              Send Us Email
            </h1>
            <p className='text-[15px] w-[90%] text-white opacity-60'>
              example.com <br />
              example@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className='w-[80%] mt-[2rem] mx-auto flex items-center justify-center'>
        <div className='text-[18px] mb-[2rem] md:mb-0 text-white opacity-20'>
          Link In Blink
        </div>
      </div>
      
    </div>
  )
}

export default Footer
