import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'


export default function Home() {
  return (
    <div className='bg-black w-screen h-screen overflow-x-hidden'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Nabvar */}
      <Navbar />
      {/* Hero */}
      <Hero />
      {/* Latest */}
      {/* Royal Oak */}
      {/* Embeded */}
      {/* Design */}
      {/* Sounds */}
      {/* History */}
      {/* Muse */}
      {/* Collections */}
      {/* Craft */}
      {/* Boutique */}
      {/* News */}
      {/* Footer */}

     
    </div>
  )
}
