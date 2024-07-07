import React from 'react'
import Image from 'next/image'
import { aboutimg, image } from '@/assets'

const About = () => {
  return (
    <section className='flex w-full mt-20 relative '>
      <div className='bg-[#FDF7F7] py-20'>

        <div className='   items-center gap-20 mx-20 max-[1160px]:mx-0   max-[1160px]:p-20 flex flex-row justify-between'>
          <Image
            src={image}
            width={450}
            height={450}
            className='object-contain max-[926px]:hidden'
            alt="Quality meats"
          />

          <div className='items-center justify-center text-center'>
            <p className='kalam-bold text-primaryColor text-[20px]'>Quality meats</p>
            <h3 className='font-black text-[40px] space-x-[14%]'>
              BEST BUTCHER IN YOUR <br /> CITY AREA
            </h3>
            <p className='w-fit text-[20px] my-5'>
              Established in 2004 in Heidelberg, Quality Meats expanded from a local butchery to include a fruit and vegetable section, bakery, and liquor store, becoming a household name. Today, the Quality Group encompasses Quality Meats, Quality Liquors, and a bakery, providing a diverse range of products to our customers.
            </p>
            <button className='max-[827px]:hidden max-[824px]:ml-5 py-[10px] px-[20px] bg-primaryColor text-white'>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section >
  )
}

export default About
