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
      repeat: -1,
      duration: 10,
      modifiers: {
        xPercent: gsap.utils.unitize(value => parseFloat(value) % 100)
      }
    });
    gsap.to(textRef2.current, {
      xPercent: 100,
      ease: 'none',
      repeat: -1,
      duration: 10,
      modifiers: {
        xPercent: gsap.utils.unitize(value => parseFloat(value) % 100)
      }
    });
    gsap.to(textRef3.current, {
      xPercent: 100,
      ease: 'none',
      repeat: -1,
      duration: 10,
      modifiers: {
        xPercent: gsap.utils.unitize(value => parseFloat(value) % 100)
      }
    });
  }, []);

  return (
    <div className="relative flex justify-center items-center overflow-hidden w-full">
      <Image src={hero} alt="Steak on a fork" width={612}
        height={1351}
        className=' object-contain'
      />

      <div className='flex flex-col'>
        <h1
          ref={textRef1}
          className='whitespace-nowrap  text-[150px] font-black text-red-700'
        >
          MEATS QUALITY MEATS QUALITY MEATS QUALITY MEATS QUALITY
        </h1>
        <h1
          ref={textRef2}
          className='whitespace-nowrap  text-[150px] font-black text-red-700'
        >
          MEATS QUALITY MEATS QUALITY MEATS QUALITY MEATS QUALITY
        </h1>
        <h1
          ref={textRef3}
          className='whitespace-nowrap  text-[150px] font-black text-red-700'
        >
          MEATS QUALITY MEATS QUALITY MEATS QUALITY MEATS QUALITY
        </h1>


      </div>



      <Image src={hero} alt="Steak on a fork" width={612}
        height={1351}
        className=' object-contain absolute'
      />


    </div>
  );
};

export default AnimatedText;
