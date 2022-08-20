import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, Close, MobileWhite,
    Mobile,
    LogoWhite,
    Logo,  Search,
    User, } from '../public/images'
import Nav_Nav from './Nav_Nav'
import NavStories from './NavStories'

function Navbar() {
    const [toggle, setToggle] = useState(false)
    
  return (
    <div>
         {
        toggle && (
            <div className={`${!toggle ? 'hidden' : 'block'} transition-all w-screen h-full md:h-screen bg-white text-black`}>
                <div className='max-w-7xl mx-auto'>
                    
                    <div className='pt-14 w-full'>

                        {/* Top Navigation */}
                        <div className='flex justify-between'>
                            {/* Left section */}
                            <div className='flex space-x-8 items-center'>
                                <div className='z-10' onClick={() => setToggle((prev) => !prev)}>
                                    <Image className='cursor-pointer hover:opacity-70' src={!toggle ? Menu : Close} width={40} height={40} />
                                </div>
                            </div>
                            {/* Middle section */}
                            <div className='relative w-40 h-6 lg:h-10'>
                                <div className='hidden lg:block'>
                                    <Image src={Logo} layout='fill' objectFit='contain' className='cursor-pointer hover:opacity-70' />
                                </div>
                                <div className='lg:hidden'>
                                    <Image src={Mobile} layout='fill' objectFit='contain' className='cursor-pointer hover:opacity-70' />
                                </div>
                            </div>
                            {/* Right section */}
                            <div className='space-x-2 opacity-100 flex child-hover:cursor-pointer child-hover:opacity-70'>
                            <div>
                                <Link href="/">
                                    <Image src={User} width={30} height={30} />
                                </Link>
                            </div>
                            <div>
                                <Link href="/">
                                    <Image src={Search} width={30} height={30} />
                                </Link>
                            </div>
                        </div>

                    </div>

                        <div className='max-w-7xl flex flex-col lg:flex-row lg:space-x-12 mt-12'>
                            <Nav_Nav />
                            <NavStories />
                        </div>

                </div>
            </div>
    </div>
            )
        }
    <nav className={`${toggle ? 'hidden' : 'block'} transition-all w-full h-24 absolute mt-14 top-0 z-0`}>
        <div className='max-w-7xl mx-auto'>
            <div className='flex justify-between text-white'>
                {/* Left section */}
                <div className='flex space-x-8 items-center'>
                    <div className='z-10' onClick={() => setToggle((prev) => !prev)}>
                        <Image className='invert cursor-pointer hover:opacity-70' src={!toggle ? Menu : Close} width={30} height={30} />
                    </div>
                    <div className='space-x-10 child-hover:opacity-70 hidden lg:flex'>
                        <Link href="/">Watches</Link>
                        <Link href="/">Our World</Link>
                        <Link href="/">Stories</Link>
                    </div>
                </div>
                {/* Middle section */}
                <div className='relative w-40 h-6 lg:h-10'>
                    <div className='hidden lg:block'>
                         <Image src={LogoWhite} layout='fill' objectFit='contain' className='cursor-pointer hover:opacity-70' />
                    </div>
                        <div className='lg:hidden'>
                          <Image src={MobileWhite} layout='fill' objectFit='contain' className='cursor-pointer hover:opacity-70' />
                    </div>
                </div>
                {/* Right section */}
                <div className='flex lg:space-x-8 items-center'>
                    <div className='hidden space-x-8 child-hover:opacity-70 lg:block'>
                        <Link href="/">Services</Link>
                        <Link href="/">Boutiques</Link>
                    </div>
                        <div className='space-x-2 opacity-100 flex invert child-hover:cursor-pointer child-hover:opacity-70'>
                            <div>
                                <Link href="/">
                                    <Image src={User} width={30} height={30} />
                                </Link>
                            </div>
                            <div>
                                <Link href="/">
                                    <Image src={Search} width={30} height={30} />
                                </Link>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </nav>
    </div>
  )
}

export default Navbar