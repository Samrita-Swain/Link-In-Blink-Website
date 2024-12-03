import React from 'react'
import TestimonialSlider from './TestimonialSlider'

const Testimonial = () => {
  return (
    <div id='reviews' className='bg-[#121212] pt-[4rem] md:pt-[8rem]'>
      <h1 className='flex justify-center text-[40px] text-[#fff]'>Client <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#c084fc] to-[#db2777]'>Review</span></h1>
      <div className='pt-[5rem] pb-[4rem] w-[80%] mx-auto'>
        {/* testimonial slider */}
        <TestimonialSlider />
      </div>
    </div>
  )
}

export default Testimonial
