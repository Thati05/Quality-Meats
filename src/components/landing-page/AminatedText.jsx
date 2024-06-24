'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import hero from '@/assets/hero.png'; // Adjust this path based on your actual file structure

const AnimatedText = () => {
  const textRef1 = useRef();
  const textRef2 = useRef();
  const textRef3 = useRef();

  useEffect(() => {
    gsap.to(textRef1.current, {
      xPercent: 100,
      ease: 'none',
      repeat: -5,
      duration: 10,
      modifiers: {
        xPercent: gsap.utils.unitize(value => parseFloat(value) % 100)
      }
    });
    gsap.to(textRef2.current, {
      xPercent: 100,
      ease: 'none',
      repeat: -5,
      duration: 10,
      modifiers: {
        xPercent: gsap.utils.unitize(value => parseFloat(value) % 100)
      }
    });
    gsap.to(textRef3.current, {
      xPercent: 100,
      ease: 'none',
      repeat: -5,
      duration: 10,
      modifiers: {
        xPercent: gsap.utils.unitize(value => parseFloat(value) % 100)
      }
    });
  }, []);

  return (
    <div className="relative flex justify-center items-center overflow-hidden w-full pt-5">
      <Image src={hero} alt="Steak on a fork" width={512}
        height={1351}
        className=' object-contain'
      />

      <div className='"marquee"'>
        <div className='marquee__group '>
          <span><h1 className='text-[150px]'>Quality Meats</h1></span>
          <span><h1 className='text-[150px]'>Quality Meats</h1></span>
          <span><h1 className='text-[150px]'>Quality Meats</h1></span>
          <span><h1 className='text-[150px]'>Quality Meats</h1></span>
          <span><h1 className='text-[150px]'>Quality Meats</h1></span>
          <span><h1 className='text-[150px]'>Quality Meats</h1></span>
          <span><h1 className='text-[150px]'>Quality Meats</h1></span>
          <span><h1 className='text-[150px]'>Quality Meats</h1></span>


        </div>
        <div className='marquee__group' aria-hidden="true">
          <span><h1 className='text-[150px]'>Quality Meats</h1></span>
          <span><h1 className='text-[150px]'>Quality Meats</h1></span>
          <span><h1 className='text-[150px]'>Quality Meats</h1></span>
          <span><h1 className='text-[150px]'>Quality Meats</h1></span>
          <span><h1 className='text-[150px]'>Quality Meats</h1></span>
          <span><h1 className='text-[150px]'>Quality Meats</h1></span>
          <span><h1 className='text-[150px]'>Quality Meats</h1></span>
          <span><h1 className='text-[150px]'>Quality Meats</h1></span>
        </div>
        <div className='marquee__group' aria-hidden="true">
          <span><h1 className='text-[150px]'>Quality Meats</h1></span>
          <span><h1 className='text-[150px]'>Quality Meats</h1></span>
          <span><h1 className='text-[150px]'>Quality Meats</h1></span>
          <span><h1 className='text-[150px]'>Quality Meats</h1></span>
          <span><h1 className='text-[150px]'>Quality Meats</h1></span>
          <span><h1 className='text-[150px]'>Quality Meats</h1></span>
          <span><h1 className='text-[150px]'>Quality Meats</h1></span>
          <span><h1 className='text-[150px]'>Quality Meats</h1></span>
        </div>

      </div>



      <Image src={hero} alt="Steak on a fork" width={512}
        height={1351}
        className=' object-contain absolute'
      />


    </div>
  );
};

export default AnimatedText;
