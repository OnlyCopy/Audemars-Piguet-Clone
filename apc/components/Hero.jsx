import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { PlayIcon, PauseIcon } from '@heroicons/react/solid'


function Hero() {
    const [playing, setPlaying] = useState(false)

    const playVideo = () => {
        let video = document.getElementById('player')
        setPlaying((prev) => !prev)
        
        if (video.paused) {
            video.play()
        } else {
            video.pause()
        }
    }

  return (
    <div className='z-0 relative w-screen h-screen'>
        <div className='z-30 absolute text-white left-4 md:left-8 md:top-[50%] bottom-40'>
            <h1 className='text-5xl lg:text-8xl font-extralight'>ROYAL <br className='hidden' /> OAK <br /> OFFSHORE</h1>
            <h1 className='text-5xl lg:text-8xl font-normal'>MUSIC <br className='hidden' /> EDITION</h1>
            <div className='flex items-center space-x-2 mt-12 hover:opacity-70 group'>
                <span className="hover:w-8 w-12 h-[1px] bg-white"></span>
                <span>Discover more</span>
            </div>
        </div>
        <div className='w-fit h-fit'>
            <button onClick={playVideo} className='absolute m-12 z-30 bottom-0 text-gray-500 hover:opacity-70 cursor-pointer' type='button'>
                <PlayIcon className={`${!playing ? 'hidden' : 'block' } w-8 h-8`} />
            </button>
            <button onClick={playVideo} className='absolute m-12 z-30 bottom-0 text-gray-500 hover:opacity-70 cursor-pointer' type='button'>
                <PauseIcon className={`${playing ? 'hidden' : 'block' } w-8 h-8`} />
            </button>
        </div>
        <div className=' translate-x-[-570px] w-max h-screen g:h-max'>
            <video id='player' className="w-full h-full" loop autoplay muted src='https://www.audemarspiguet.com//content/dam/ap/com/novelties/ro-offshore-tribute-to-the-world-of-music/Header_ROO-Music_220630_03.mp4' />
        </div>
    </div>
  )
}

export default Hero