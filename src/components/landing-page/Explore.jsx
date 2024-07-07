import React from 'react'
import { cow, sheep, pig, chicken, goat } from '@/assets'
import Image from 'next/image'

const Explore = () => {
  return (
    <section className=' p-20 mt-7 px-36 flex flex-1 flex-col items-center justify-center max-md:hidden '>
      <div className=' mb-20 w-full items-center flex justify-center'>
        <h2 className=' text-3xl items-center'>Explore The Range</h2>
      </div>

      <div className=' items-center flex justify-between gap-7 w-full flex-row  max-md:flex-col'>
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
            className='w-[100px] pb-2 object-contain max-[400px]:w-9 max-[360px]:w-12'
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