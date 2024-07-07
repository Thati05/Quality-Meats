import React from 'react'
import { cow, sheep, pig, chicken, goat } from '@/assets'
import Image from 'next/image'

const Explore = () => {
  return (
    <section className=' p-20 px-48 flex flex-1 flex-col items-center justify-center '>
      <div className=' mb-20'>
        <h2 className=' text-2xl items-center'>Explore The Range</h2>
      </div>

      <div className=' items-center flex justify-between gap-5 w-full flex-row'>
        <div className=' items-center justify-center flex flex-col '>
          <Image src={cow}
            className='w-[120px] object-contain'
          />
          <p>Cow</p>
        </div>
        <div className=' items-center justify-center flex flex-col '>
          <Image src={sheep}
            className='w-[120px] object-contain'
          />
          <p>Lamb</p>
        </div>
        <div className=' mt-[15px] items-center justify-center flex flex-col '>
          <Image src={chicken}
            className='w-[100px] pb-2 object-contain'
          />
          <p>Chicken</p>
        </div>
        <div className=' items-center justify-center flex flex-col '>
          <Image src={pig}
            className='w-[125px] object-contain'
          />
          <p>Pork</p>
        </div>
        <div className=' mt-2 items-center justify-center flex flex-col '>
          <Image src={goat}
            className='w-[100px] pb-3 object-contain'
          />
          <p>Goat</p>
        </div>
      </div>
    </section >
  )
}

export default Explore