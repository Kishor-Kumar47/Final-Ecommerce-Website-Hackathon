import Shophead from "@/components/Shophead";
import Image from "next/image";
import React from "react";
import { PiCirclesFourFill } from "react-icons/pi";
import { MdOutlineViewDay } from "react-icons/md";
import Delivery from "@/components/Delivery";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <main>
      <section>
        <Navbar bgColor="bg-white" />
        <Shophead headText="Shop" linkChange="Shop" />
      </section>

      <section className="w-[1363px] h-[100px] top-[463px] border-[0px] border-[#9F9F9F] bg-[#FAF4F4]  ">
        <div className="w-[1363px] h-[100px] top-[463px] border-[0px] text-[#FAF4F4] flex justify-between items-center    ">
          {/* right side */}
          <div className="flex pl-4 sm:flex-col-3">
            <div className="w-[85px] h-[30px] top-[498px] left-[98px] flex items-center space-x-10  ">
              <span className="flex space-x-5  ">
                <Image
                  className="top-[4.76px] left-[2.98px] "
                  src={"/filter-icon.png"}
                  width={19.05}
                  height={16.67}
                  alt="icon"
                />
                <p className='w-[48px] h-[30px] top-[498px] left-[135px] font-["Poppins"] font-normal text-[20px] leading-[30px] text-black'>
                  Filter
                </p>
              </span>
            </div>
            <div className="mx-4 flex text-xl gap-4 items-center">
              <span className="w-[16.33px] h-[16.33px] top-[5.83px] left-[5.83px] text-black">
                <PiCirclesFourFill />
              </span>
              <span className="w-[21px] h-[19.5px] top-[2.25px] left-[1.5px] text-black">
                <MdOutlineViewDay />
              </span>
            </div>
            <div className="w-[237px] h-[37px] top-[494px] left-[312px] text-black  border-l-[2px] border-[#9F9F9F] text-center flex items-center">
              <h3 className='w-[203px] h-[24px] top-[501px] left-[346px] font-["Poppins"] font-normal text-[16px] leading-[24px] text-black '>
                Showing 1 16 of 32 results
              </h3>
            </div>
          </div>

          {/* left side */}
          <div className="flex">
            <div className="w-[126px] h-[55px] top-[485px] left-[897px] flex text-center items-center ">
              <h3 className='w-[54px] h-[30px] top-[497px] left-[897px] font-["Poppins"] font-normal text-[20px] leading-[30px] text-black'>
                Show
              </h3>
              <span className="w-[55px] h-[55px] top-[485px] left-[968px] bg-white flex items-center ">
                <p className='w-[20px] h-[30px] top-[497px] left-[986px] font-["Poppins"] font-normal text-[20px] leading-[30px] text-[#9F9F9F] pl-3'>
                  16
                </p>
              </span>
            </div>
            {/* ........ */}
            <div className="w-[288px] h-[55px] top-[485px] left-[1052px] flex text-center items-center">
              <h3 className='w-[83px] h-[30px] top-[497px] left-[1052px] font-["Poppins"] font-normal text-[20px] leading-[30px] text-black'>
                Short by
              </h3>
              <span className="w-[188px] h-[55px] top-[485px] left-[1152px] bg-white flex items-center">
                <p className='w-[72px] h-[30px] top-[497px] left-[1182px] font-["Poppins"] font-normal text-[20px] leading-[30px] text-[#9F9F9F]'>
                  Default
                </p>
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* .............................................................................................................................................................................. */}

      {/* products main sec */}
      <section className="w-[1363px] h-[1808px] top-[1663px] bg-white flex flex-col items-center space-y-[30px]     ">
        {/* products start*/}
        <div className="flex  ">
          {/* products 1*/}
          <div className="w-[287px] h-[372px] top-[1874px] left-[100px]     ">
            {/* img  */}
            <div className="w-[287px] h-[287px] top-[1874px] left-[100px]    ">
              <Image
                src={"/pick-pro-1.png"}
                width={750}
                height={384.46}
                alt="img"
              />
            </div>
            {/* text */}
            <div className="w-[194px] h-[71px] top-[2175px] left-[100px] text-black">
              <p className='w-[192px] h-[24px] top-[2170px] left-[100px] font-["Poppins"] font-normal text-[16px] leading-[24px] text-black'>
                Trenton modular sofa_3
              </p>
              <h2 className='w-[158px] h-[36px] top-[2210px] left-[100px] font-["Poppins"] font-medium text-[24px] leading-[36px] text-black'>
                Rs. 25,000.00
              </h2>
            </div>
          </div>
          {/* products 2*/}
          <div className="w-[287px] h-[372px] top-[1874px] left-[100px] pt-4 ">
            {/* img  */}
            <div className="w-[287px] h-[287px] top-[1874px] left-[100px] mb-[-20px]">
              <Image
                src={"/pick-pro-2.png"}
                width={750}
                height={384.46}
                alt="img"
              />
            </div>
            {/* text */}
            <div className="w-[194px] h-[71px] top-[2175px] left-[100px] text-black">
              <p className='w-[192px] h-[24px] top-[2170px] left-[100px] font-["Poppins"] font-normal text-[16px] leading-[24px] text-black'>
                Granite dining table with dining chair
              </p>
              <h2 className='w-[158px] h-[36px] top-[2210px] left-[100px] font-["Poppins"] font-medium text-[24px] leading-[36px] text-black mt-4 '>
                Rs. 25,000.00
              </h2>
            </div>
          </div>
          {/* products 3*/}
          <div className="w-[287px] h-[372px] top-[1874px] left-[100px] ">
            {/* img  */}
            <div className="w-[287px] h-[287px] top-[1874px] left-[100px]">
              <Image
                src={"/pick-pro-3.png"}
                width={750}
                height={384.46}
                alt="img"
              />
            </div>
            {/* text */}
            <div className="w-[194px] h-[71px] top-[2175px] left-[100px] text-black">
              <p className='w-[192px] h-[24px] top-[2170px] left-[100px] font-["Poppins"] font-normal text-[16px] leading-[24px] text-black'>
                Outdoor bar table and stool
              </p>
              <h2 className='w-[158px] h-[36px] top-[2210px] left-[100px] font-["Poppins"] font-medium text-[24px] leading-[36px] text-black'>
                Rs. 25,000.00
              </h2>
            </div>
          </div>
          {/* products 4*/}
          <div className="w-[287px] h-[372px] top-[1874px] left-[100px] pt-6  ">
            {/* img  */}
            <div className="w-[287px] h-[287px] top-[1874px] left-[100px] mb-[-20px]">
              <Image
                src={"/pick-pro-4.png"}
                width={750}
                height={384.46}
                alt="img"
              />
            </div>
            {/* text */}
            <div className="w-[194px] h-[71px] top-[2175px] left-[100px] text-black">
              <p className='w-[192px] h-[24px] top-[2170px] left-[100px] font-["Poppins"] font-normal text-[16px] leading-[24px] text-black'>
                Plain console with teak mirror
              </p>
              <h2 className='w-[158px] h-[36px] top-[2210px] left-[100px] font-["Poppins"] font-medium text-[24px] leading-[36px] mt-4 text-black'>
                Rs. 25,000.00
              </h2>
            </div>
          </div>
        </div>

        {/* product sec-2 ................................................*/}

        {/* products sec*/}
        <div className="flex">
          {/* products 1*/}
          <div className="w-[287px] h-[372px] top-[1874px] left-[100px] ">
            {/* img  */}
            <div className="w-[287px] h-[287px] top-[1874px] left-[100px]">
              <Image
                src={"/shop-pro-1.png"}
                width={750}
                height={384.46}
                alt="img"
              />
            </div>
            {/* text */}
            <div className="w-[194px] h-[71px] top-[2175px] left-[100px] text-black">
              <p className='w-[192px] h-[24px] top-[2170px] left-[100px] font-["Poppins"] font-normal text-[16px] leading-[24px] text-black'>
                Grain coffee table
              </p>
              <h2 className='w-[158px] h-[36px] top-[2210px] left-[100px] font-["Poppins"] font-medium text-[24px] leading-[36px] text-black'>
                Rs. 15,000.00
              </h2>
            </div>
          </div>
          {/* products 2*/}
          <div className="w-[287px] h-[372px] top-[1874px] left-[100px] pt-4 ">
            {/* img  */}
            <div className="w-[287px] h-[287px] top-[1874px] left-[100px] mb-[-20px]">
              <Image
                src={"/shop-pro-2.png"}
                width={750}
                height={384.46}
                alt="img"
              />
            </div>
            {/* text */}
            <div className="w-[194px] h-[71px] top-[2175px] left-[100px] text-black">
              <p className='w-[192px] h-[24px] top-[2170px] left-[100px] font-["Poppins"] font-normal text-[16px] leading-[24px] text-black'>
                Kent coffee table
              </p>
              <h2 className='w-[158px] h-[36px] top-[2210px] left-[100px] font-["Poppins"] font-medium text-[24px] leading-[36px] text-black mt-4 '>
                Rs. 225,000.00
              </h2>
            </div>
          </div>
          {/* products 3*/}
          <div className="w-[287px] h-[372px] top-[1874px] left-[100px] ">
            {/* img  */}
            <div className="w-[287px] h-[287px] top-[1874px] left-[100px]">
              <Image
                src={"/shop-pro-0.png"}
                width={750}
                height={384.46}
                alt="img"
              />
            </div>
            {/* text */}
            <div className="w-[194px] h-[71px] top-[2175px] left-[100px] text-black">
              <p className='w-[192px] h-[24px] top-[2170px] left-[100px] font-["Poppins"] font-normal text-[16px] leading-[24px] text-black'>
                Round coffee table_color 2
              </p>
              <h2 className='w-[158px] h-[36px] top-[2210px] left-[100px] font-["Poppins"] font-medium text-[24px] leading-[36px] text-black'>
                Rs. 251,000.00
              </h2>
            </div>
          </div>
          {/* products 4*/}
          <div className="w-[287px] h-[372px] top-[1874px] left-[100px] pt-6  ">
            {/* img  */}
            <div className="w-[287px] h-[287px] top-[1874px] left-[100px] mb-[-20px]">
              <Image
                src={"/shop-pro-3.png"}
                width={750}
                height={384.46}
                alt="img"
              />
            </div>
            {/* text */}
            <div className="w-[194px] h-[71px] top-[2175px] left-[100px] text-black">
              <p className='w-[192px] h-[24px] top-[2170px] left-[100px] font-["Poppins"] font-normal text-[16px] leading-[24px] text-black'>
                Reclaimed teak coffee table
              </p>
              <h2 className='w-[158px] h-[36px] top-[2210px] left-[100px] font-["Poppins"] font-medium text-[24px] leading-[36px] mt-4 text-black'>
                Rs. 25,200.00
              </h2>
            </div>
          </div>
        </div>

        {/* product sec-3 */}

        {/* products sec*/}
        <div className="flex">
          {/* products 1*/}
          <div className="w-[287px] h-[372px] top-[1874px] left-[100px] ">
            {/* img  */}
            <div className="w-[287px] h-[287px] top-[1874px] left-[100px]">
              <Image
                src={"/shop-pro-4.png"}
                width={750}
                height={384.46}
                alt="img"
              />
            </div>
            {/* text */}
            <div className="w-[194px] h-[71px] top-[2175px] left-[100px] text-black">
              <p className='w-[192px] h-[24px] top-[2170px] left-[100px] font-["Poppins"] font-normal text-[16px] leading-[24px] text-black'>
                Plain console_
              </p>
              <h2 className='w-[158px] h-[36px] top-[2210px] left-[100px] font-["Poppins"] font-medium text-[24px] leading-[36px] text-black'>
                Rs. 258,200.00
              </h2>
            </div>
          </div>
          {/* products 2*/}
          <div className="w-[287px] h-[372px] top-[1874px] left-[100px] pt-4 ">
            {/* img  */}
            <div className="w-[287px] h-[287px] top-[1874px] left-[100px] mb-[-20px]">
              <Image
                src={"/shop-pro-5.png"}
                width={750}
                height={384.46}
                alt="img"
              />
            </div>
            {/* text */}
            <div className="w-[194px] h-[71px] top-[2175px] left-[100px] text-black">
              <p className='w-[192px] h-[24px] top-[2170px] left-[100px] font-["Poppins"] font-normal text-[16px] leading-[24px] text-black'>
                Reclaimed teak Sideboard
              </p>
              <h2 className='w-[158px] h-[36px] top-[2210px] left-[100px] font-["Poppins"] font-medium text-[24px] leading-[36px] text-black mt-4 '>
                Rs. 20,000.00
              </h2>
            </div>
          </div>
          {/* products 3*/}
          <div className="w-[287px] h-[372px] top-[1874px] left-[100px] ">
            {/* img  */}
            <div className="w-[287px] h-[287px] top-[1874px] left-[100px]">
              <Image
                src={"/shop-pro-6.png"}
                width={750}
                height={384.46}
                alt="img"
              />
            </div>
            {/* text */}
            <div className="w-[194px] h-[71px] top-[2175px] left-[100px] text-black">
              <p className='w-[192px] h-[24px] top-[2170px] left-[100px] font-["Poppins"] font-normal text-[16px] leading-[24px] text-black'>
                SJP_0825{" "}
              </p>
              <h2 className='w-[158px] h-[36px] top-[2210px] left-[100px] font-["Poppins"] font-medium text-[24px] leading-[36px] text-black'>
                Rs. 200,000.00
              </h2>
            </div>
          </div>
          {/* products 4*/}
          <div className="w-[287px] h-[372px] top-[1874px] left-[100px] pt-6  ">
            {/* img  */}
            <div className="w-[287px] h-[287px] top-[1874px] left-[100px] mb-[-20px]">
              <Image
                src={"/shop-pro-7.png"}
                width={750}
                height={384.46}
                alt="img"
              />
            </div>
            {/* text */}
            <div className="w-[194px] h-[71px] top-[2175px] left-[100px] text-black">
              <p className='w-[192px] h-[24px] top-[2170px] left-[100px] font-["Poppins"] font-normal text-[16px] leading-[24px] text-black'>
                Bella chair and table
              </p>
              <h2 className='w-[158px] h-[36px] top-[2210px] left-[100px] font-["Poppins"] font-medium text-[24px] leading-[36px] mt-4 text-black'>
                Rs. 100,000.00
              </h2>
            </div>
          </div>
        </div>

        {/* product sec-4 */}

        {/* products sec*/}
        <div className="flex">
          {/* products 1*/}
          <div className="w-[287px] h-[372px] top-[1874px] left-[100px] ">
            {/* img  */}
            <div className="w-[287px] h-[287px] top-[1874px] left-[100px]">
              <Image
                src={"/shop-pro-8.png"}
                width={750}
                height={384.46}
                alt="img"
              />
            </div>
            {/* text */}
            <div className="w-[194px] h-[71px] top-[2175px] left-[100px] text-black">
              <p className='w-[192px] h-[24px] top-[2170px] left-[100px] font-["Poppins"] font-normal text-[16px] leading-[24px] text-black'>
                Granite square side table
              </p>
              <h2 className='w-[158px] h-[36px] top-[2210px] left-[100px] font-["Poppins"] font-medium text-[24px] leading-[36px] text-black'>
                Rs. 258,800.00
              </h2>
            </div>
          </div>
          {/* products 2*/}
          <div className="w-[287px] h-[372px] top-[1874px] left-[100px] pt-4 ">
            {/* img  */}
            <div className="w-[287px] h-[287px] top-[1874px] left-[100px] mb-[-20px]">
              <Image
                src={"/shop-pro-9.png"}
                width={750}
                height={384.46}
                alt="img"
              />
            </div>
            {/* text */}
            <div className="w-[194px] h-[71px] top-[2175px] left-[100px] text-black">
              <p className='w-[192px] h-[24px] top-[2170px] left-[100px] font-["Poppins"] font-normal text-[16px] leading-[24px] text-black'>
                Asgaard sofa
              </p>
              <h2 className='w-[158px] h-[36px] top-[2210px] left-[100px] font-["Poppins"] font-medium text-[24px] leading-[36px] text-black mt-4 '>
                Rs. 250,000.00
              </h2>
            </div>
          </div>
          {/* products 3*/}
          <div className="w-[287px] h-[372px] top-[1874px] left-[100px] ">
            {/* img  */}
            <div className="w-[287px] h-[287px] top-[1874px] left-[100px]">
              <Image
                src={"/shop-pro-10.png"}
                width={750}
                height={384.46}
                alt="img"
              />
            </div>
            {/* text */}
            <div className="w-[194px] h-[71px] top-[2175px] left-[100px] text-black">
              <p className='w-[192px] h-[24px] top-[2170px] left-[100px] font-["Poppins"] font-normal text-[16px] leading-[24px] text-black'>
                Maya sofa three seater
              </p>
              <h2 className='w-[158px] h-[36px] top-[2210px] left-[100px] font-["Poppins"] font-medium text-[24px] leading-[36px] text-black'>
                Rs. 115,000.00
              </h2>
            </div>
          </div>
          {/* products 4*/}
          <div className="w-[287px] h-[372px] top-[1874px] left-[100px] pt-6  ">
            {/* img  */}

            <div className="w-[287px] h-[287px] top-[1874px] left-[100px] mb-[-20px]">
              <Image
                src={"/shop-pro-11.png"}
                width={750}
                height={384.46}
                alt="img"
              />
            </div>

            {/* text */}
            <div className="w-[194px] h-[71px] top-[2175px] left-[100px] text-black">
              <p className='w-[192px] h-[24px] top-[2170px] left-[100px] font-["Poppins"] font-normal text-[16px] leading-[24px] text-black'>
                Outdoor sofa set
              </p>
              <h2 className='w-[158px] h-[36px] top-[2210px] left-[100px] font-["Poppins"] font-medium text-[24px] leading-[36px] mt-4 text-black'>
                Rs. 244,000.00
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/*........................................................................................................................................................................................  */}
      {/* delivery section */}
      <section>
        <Delivery />
      </section>
    </main>
  );
};

export default page;
