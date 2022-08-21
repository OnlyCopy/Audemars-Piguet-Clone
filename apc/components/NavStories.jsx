import React from 'react'
import NavCard from './NavCard'
import { navcards } from '../public/const'

function NavStories() {
  return (
    <div className='sm:mb-12 sm:overflow-x-scroll md:overflow-hidden'>
        <h1 className='text-gray-700 text-4xl lg:text-6xl'>Latest</h1>
        <h1 className='font-semibold text-4xl lg:text-6xl'>Stories</h1>
        <div className='flex flex-col sm:space-x-6 md:space-x-0 sm:grid sm:grid-cols-2 text-start w-full'>
            {navcards.map((navcards) => (
                <NavCard key={navcards.id} {...navcards} />
            ))}
        </div>
    </div>
  )
}

export default NavStories