import React from 'react'
import Particle from './Particle'
import Image from 'next/image';
import { Link } from 'react-scroll';


const Hero = () => {
  return (
    <div id='home' className='flex h-[90vh] bg-black bg-cover bg-center mt-[10vh] p-14'
    style={{ backgroundImage: "url('/images/ErrorBoundaryHandler.jpg')" }}>
      <Particle />
      <div className='w-[100%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-100% items-center justify-items-center'>
        <div className='text-left'>
        <h1 className='text-[35px] md:text-[50px] text-white font-bold'>Welcome To <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#c084fc] to-[#db2777]'>Link In Blink</span></h1>
        <div className='mt-[2rem]'>
        <Link activeClass="active" to="footer" spy={true} smooth={true} offset={-100} duration={500}>
        <button className='px-[2rem] hover:bg-[#87289a9a] transition-all duration-200 py-[1rem] text-[18px] font-bold text-white bg-[#87289a] rounded-full'>Contact Us</button>
            </Link>
        </div>
        </div>
        <div data-aos='zoom-in' className='w-[500px] bg-[#87289a] relative lg:flex items-center rounded-full h-[500px] hidden'>
          <Image src="/images/home.jpg" alt="user" layout="fill" className="object-cover rounded-full"/>
        </div>
      </div>
    </div>
  )
}

export default Hero
