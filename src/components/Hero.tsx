import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
  <section>
    <div>
    <Navbar bgColor="bg-[#FBEBB5]"/>  
    </div>  
    {/* <Navbar bgColor="bg-[#FBEBB5]"/> */}
    <main className=' w-[1363px] h-[850px] top-[10px]  bg-[#FBEBB5] flex items-center     '>
        {/* right side */}
        <div className=' w-[440px] h-[276px] top-[428px] left-[202px] text-black flex flex-col mt-[-20px]  ml-[150px]      '>
            <h2 className='[w-[440px] h-[192px] top-[428px] left-[202px] font-["Poppins"] font-medium text-[64px] leading-[96px] text-black '>
              Rocket single
            </h2>
            <h2 className='[w-[440px] h-[192px] top-[428px] left-[202px] font-["Poppins"] font-medium text-[64px] leading-[96px] text-black '>
              seater
            </h2>



            <button className='[w-[121px] h-[49px] top-[655px] text-black pl-[155px]'>
                <Link href={''}
                className='[w-[121px] ml-[-400px] h-[36px] top-[655px] font-["Poppins"] font-medium text-[24px] leading-[36px] text-black underline '
                >Shop Now</Link>
            </button>

        </div>
        {/* left side */}
        <div className=' w-[853px] h-[900px] flex left-[1440px] mt-[-10px]    sm:w-[500px] sm:h-[500px]  '>
            <Image 
            src={'/hero-img.png'} 
            width={853}
            height={100}
            alt='img'
            />

        </div>
        
    </main>
  </section>  
  )
}

export default Hero