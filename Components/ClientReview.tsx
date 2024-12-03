import React from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/16/solid';

interface Props {
  name:string;
  image:string;
}
const ClientReview = ({name,image}:Props) => {
  return (
    <div className='flex flex-col text-center justify-center'>
      <Image src={image} alt={name} width={100} height={100} objectFit='contain' className='mx-auto mb-[2rem] rounded-full' />
      <div className='flex items-center mx-auto'>
        <StarIcon className='w-[2rem] h-[2rem] text-[#7b2499]'></StarIcon>
        <StarIcon className='w-[2rem] h-[2rem] text-[#7b2499]'></StarIcon>
        <StarIcon className='w-[2rem] h-[2rem] text-[#7b2499]'></StarIcon>
        <StarIcon className='w-[2rem] h-[2rem] text-[#7b2499]'></StarIcon>
        <StarIcon className='w-[2rem] h-[2rem] text-[#7b2499]'></StarIcon>
      </div>
      <h1 className='text-[25px] text-white mt-[1rem]'>{name}</h1>
      <p className='text-[16px] text-white opacity-50 w-[90%] md:w-[50%] mx-auto'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
  )
}

export default ClientReview
