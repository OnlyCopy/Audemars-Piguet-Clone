import React from 'react'
import { watches, stories, boutiques, our_world, services } from '../public/const'
import { GlobeAltIcon } from '@heroicons/react/outline'

function Nav_Nav() {
  return (
    <nav className='h-full'>
        {/* Web Navigation */}
        <div className='hidden lg:inline space-y-8'>
            <div className='text-gray-600 text-md space-y-2'>
                <span className='font-semibold'>WATCHES</span>
                <ul className='space-y-2'>
                    {watches.map((watches) => (
                        <li className='hover:opacity-70 cursor-pointer' key={watches.id}>{watches.title}</li>
                    ))}
                </ul>
            </div>

            <div className='text-gray-600 text-md space-y-2'>
                <span className='font-semibold'>OUR WORLD</span>
                <ul className='space-y-2'>
                    {our_world.map((World) => (
                        <li className='hover:opacity-70 cursor-pointer' key={our_world.id}>{World.title}</li>
                    ))}
                </ul>
            </div>

            <div className='text-gray-600 text-md space-y-2'>
                <span className='font-semibold'>STORIES</span>
                <ul className='space-y-2'>
                    {stories.map((Stories) => (
                        <li className='hover:opacity-70 cursor-pointer' key={stories.id}>{Stories.title}</li>
                    ))}
                </ul>
            </div>

            <div className='text-gray-600 text-md space-y-2'>
                <span className='font-semibold'>SERVICES</span>
                <ul className='space-y-2'>
                    {services.map((Services) => (
                        <li className='hover:opacity-70 cursor-pointer' key={services.id}>{Services.title}</li>
                    ))}
                </ul>
            </div>

            <div className='text-gray-600 text-md space-y-2'>
                <span className='font-semibold'>BOTIQUES</span>
                <ul className='space-y-2'>
                    {boutiques.map((boutiques) => (
                        <li className='hover:opacity-70 cursor-pointer' key={boutiques.id}>{boutiques.title}</li>
                    ))}
                </ul>
            </div>
        </div>
        {/* Mobile navigation */}
        <div className='lg:hidden px-6 w-full space-y-6 pb-8'>
            <ul className='font-semibold space-y-6'>
                <li className='cursor-pointer hover:opacity-70'>
                    <span>Watches</span>
                </li>
                <li className='cursor-pointer hover:opacity-70'>
                    <span>Our World</span>
                </li>
                <li className='cursor-pointer hover:opacity-70'>
                    <span>Stories</span>
                </li>
                <li className='cursor-pointer hover:opacity-70'>
                    <span>Services</span>
                </li>
                <li className='cursor-pointer hover:opacity-70'>
                    <span>Botiques</span>
                </li>
            </ul>
            <div className='flex space-x-4'>
                <GlobeAltIcon className='w-6 h-6 text-gray-600' />
                <span className='font-extralight text-gray-500'>
                    Change language / currency
                </span>
            </div>
        </div>
        
    </nav>
  )
}

export default Nav_Nav