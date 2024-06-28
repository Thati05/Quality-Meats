import React from 'react'
import Image from 'next/image'
import { hero } from '@/assets'

const Hero = () => {
  return (
    <section className='w-full flex xl:flex-row max-container flex-col gap-10 justify-center min-h-screen '>
      <div className='relative flex justify-center items-center overflow-hidden w-full '>

        <Image
          width={612}
          height={1351}
          src={hero}
          className=' object-contain '
        />
        <Image
          width={612}
          height={1351}
          src={hero}
          className=' object-contain absolute '
        />

      </div>
    </section>
  )
}

export default Hero