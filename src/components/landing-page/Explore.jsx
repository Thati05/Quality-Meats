import React from 'react'
import { animals } from '@/constants'
import Image from 'next/image'

const Explore = () => {
  return (
    <section className=' p-20 flex flex-1 flex-col items-center justify-center '>
      <div>
        <h2 className=' text-4xl items-center'>Explore The Range</h2>
      </div>

      <div className=' items-center flex justify-between gap-5 flex-row'>

        {animals.map((animal) => (

          <div className=' flex flex-1 flex-col justify-center w-full'>
            <Image className='w-[250px] h-[100px] ' src={animal.src} />
            <p>{animal.title}</p>

          </div>
        ))}



      </div>


    </section>
  )
}

export default Explore