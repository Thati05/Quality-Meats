'use client'
import { useRouter } from 'next/navigation'
import { logo } from '@/assets'
import Link from 'next/link'
import Image from 'next/image'



const Navbar = () => {
  const router = useRouter();

  return (
    <nav className=' pt-[10px] pr-[50px] pl-[10px]  flex flex-row justify-between items-center  '>
      <div
        className='w-[100px]'
      >
        <Image
          className=' object-contain'
          src={logo} />
      </div>
      <div className=' flex flex-row gap-20 '>
        <Link href="/">Home</Link>
        <Link href="/about-us">About Us</Link>
        <Link href="/products">Product </Link>
        <Link href="/blogs">Blogs</Link>


      </div>
      <button

        className=' py-[10px] px-[20px] bg-primaryColor text-white'
        onClick={() => router.push('/contact-us')}>
        Contact Us
      </button>

    </nav>
  )
}

export default Navbar