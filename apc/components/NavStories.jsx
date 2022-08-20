import React from 'react'
import NavCard from './NavCard'
import { navcards } from '../public/const'

function NavStories() {
  return (
    <div className='px-6'>
        <h1 className='text-gray-700 text-4xl lg:text-6xl'>Latest</h1>
        <h1 className='font-semibold text-4xl lg:text-6xl'>Stories</h1>
        <div className='flex flex-col lg:grid lg:grid-cols-2 lg:space-x-2 items-center text-start w-full'>
            {navcards.map((navcards) => (
                <NavCard key={navcards.id} {...navcards} />
            ))}
        </div>
    </div>
  )
}

export default NavStories