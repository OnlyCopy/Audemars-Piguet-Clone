import Image from 'next/image'
import React from 'react'

function NavCard({img, title }) {
  return (
    <div className='flex flex-col sm:w-80 md:w-96 h-80 cursor-pointer'>
        <div className='relative w-full h-full'>
            <Image className='sm:hover:scale-110 transition-all duration-1000' src={img} objectFit='contain' layout='fill' />
        </div>
        <div className='text-md break-words'>{title}</div>
    </div>
  )
}

export default NavCard