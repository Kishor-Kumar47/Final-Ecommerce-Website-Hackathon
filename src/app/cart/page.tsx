
import Delivery from '@/components/Delivery';
import Navbar from '@/components/Navbar';
import Shophead from '@/components/Shophead';
import Image from 'next/image'
import React from 'react'
import { MdDelete } from "react-icons/md";



const page = () => {
  return (
    <main>
        {/* cart head component */}
        <section>
        <Navbar bgColor="bg-white"/>
           <Shophead headText="Cart" linkChange="Cart"/>
        </section>
        {/* cart main section */}
        <section className='w-[1363px] h-[525px] top-[416px] flex items-center justify-center '>
            <div className='w-[90%] h-[90%] flex '>
                {/* left side */}
                <div className='w-[65%] h-[50%] '>
                    <div className='w-full h-[22%] bg-[#FFF9E5] pt-5  '  >
                        <ul className='flex  gap-[70px] justify-center '>
                            <li>Product</li>
                            <li>Price</li>
                            <li>Quantity</li>
                            <li>Subtotal</li>
                        </ul>
                    </div>
                    <div className='w-full h-[40%] bg-white mt-5 flex justify-between items-center'>
                        <Image className='h-full bg-[#FFF9E5]'
                        src={'/shop-pro-9.png'}
                        width={106}
                        height={100}
                        alt='img'
                        />

                        <span className='w-[80%] h-[40%] flex justify-between'>
                        <h3 className="text-gray-400">Asgoard sofa </h3>
                        <h3 className="text-gray-400">Rs 250 000 00</h3>
                        <h3 className="w-[5%] h-full text-black border-[1px] border-black text-center rounded-md flex items-center justify-center">1</h3>
                        <h3 className="text-black">Rs 250 000 00</h3>
                        <h3 className="text-orange-200 text-2xl"><MdDelete/></h3>

                        </span>

                    </div>


                </div>
                {/* right side */}
                <div className='w-[35%] h-full flex flex-col gap-10 bg-[#FFF9E5] pt-5 ml-6 '>
                    <h2 className='text-[45px] font-bold text-black text-center'>Cart Totals</h2>
                    <div className='flex flex-col gap-7'>
                        <span className='flex justify-around'>
                            <h3 className='text-black text-xl'>Subtotal</h3>
                            <h3 className='text-gray-400 text-xl'>Rs 250 000 00</h3>
                        </span>
                        <span className='flex justify-around'>
                            <h3 className='text-black text-xl'>Total</h3>
                            <h3 className='text-yellow-600 text-xl'>Rs 250 000 00</h3>
                        </span>
                        
                    </div>

                    <div className="w-[90%]   mt-10 flex items-center justify-center ml-7">
                    <button className="w-[70%] border-[2px] border-black rounded-xl py-4 border-xl border-black  hover:bg-orange-200">Place order</button>
                    </div>
                </div>

            </div>
            
        </section>
        {/* delivery component */}
        <section>
            <Delivery/>
        </section>
    </main>
  )
}

export default page