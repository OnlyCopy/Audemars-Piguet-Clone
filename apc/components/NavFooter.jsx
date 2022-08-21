import { GlobeAltIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React from 'react' 
import { FacebookLogo,
    InstagramLogo,
    TwitterLogo,
    PinterestLogo,
    YoutubeLogo,
    MessaageLogo,
    Conversation} from '../public/images'

function NavFooter() {
  return (
    <footer className='mt-16 w-full'>
        <div className='hidden md:flex space-x-4 cursor-pointer hover:opacity-70 transition-all w-fit'>
                <GlobeAltIcon className='w-6 h-6 text-gray-600' />
                <span className='font-extralight text-gray-500'>
                    Change language / currency
                </span>
            </div>
            <br />
            <div className='flex flex-col md:flex-row md:justify-between items-center pb-6 '>
                <ul className='flex space-x-4 child-hover:opacity-70 transition-all'> 
                    <li><a href="/"><Image width="24" height="24" src={FacebookLogo} alt="Facebook" /></a></li>
                    <li><a href="/"><Image width="24" height="24" src={InstagramLogo} alt="Instagram" /></a></li>
                    <li><a href="/"><Image width="24" height="24" src={PinterestLogo} alt="Pintrest" /></a></li>
                    <li><a href="/"><Image width="24" height="24" src={TwitterLogo} alt="Twitter" /></a></li>
                    <li><a href="/"><Image width="24" height="24" src={YoutubeLogo} alt="YouTube" /></a></li>
                    <li><a href="/"><Image width="24" height="24" src={MessaageLogo} alt="WEChat" /></a></li>
                    <li><a href="/"><Image width="24" height="24" src={Conversation} alt="LINE" /></a></li>
                </ul>
                <div className='py-6 sm:p-0'>
                    <span>&copy; 2022 A Caip Year Website</span>
                </div>
            </div>
    </footer>
  )
}

export default NavFooter