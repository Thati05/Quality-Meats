import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <section>
      <div className='background'>
        <div className='about-content'>
          <div className='img'>
            <Image />
          </div>
          <div className='content'>
            <p>Quality meats</p>
            <h3>BEST BUTCHER IN YOUR CITY AREA</h3>
            <p>Established in 2004 in Heidelberg, Quality Meats expanded from a local butchery to include a fruit and vegetable section, bakery, and liquor store, becoming a household name. Today, the Quality Group encompasses Quality Meats, Quality Liquors, and a bakery, providing a diverse range of products to our customers.</p>
            <button>
              Learn More
            </button>

          </div>


        </div>

      </div>
    </section>
  )
}

export default About