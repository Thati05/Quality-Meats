import React from 'react'
import Image from 'next/image'
import { hero } from '@/assets'

const Hero = () => {
  return (
    <section className='flex items-center  justify-center p-20 '>
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