
import Link from 'next/link'
import React from 'react'
import { MdManageAccounts, MdOutlineShoppingCart  } from "react-icons/md";
import { CiSearch, CiHeart  } from "react-icons/ci";

const Navbar = (props:any) => {
  return (
    <header className={`  w-[1363px]  h-[100px] ${props.bgColor} flex justify-end gap-x-[90px] items-center pr-[99px]     `}>
        {/* nav bar */}
        <nav className='w-[430px] h-[24px] top-[38px] left-[505px] text-black'>
            <ul className='w-[48] h-[24] top-[38px] left-[505] font-["Poppins"] font-medium text-[16px] leading-[24px] text-black flex justify-between'>
                <li> <Link href={'/'}>Home</Link> </li>
                <li> <Link href={'/shop'}>Shop</Link> </li>
                <li> <Link href={'/blog'}>About</Link> </li>
                <li> <Link href={'/contact'}>Contact</Link> </li>
            </ul>

        </nav>
        {/* navbar end */}

        {/* social media */}
        <div >
            <div className='w-[247px] h-[28px] top-[36px] left-[1093px] flex gap-x-10'>
                <span className='w-[28px]  h-[28px] top-[36px] left-[1093px] text-[35px]'> <Link href={'myaccount'}> <MdManageAccounts /> </Link> </span>
                <span className='w-[28px]  h-[28px] top-[36px] left-[1093px] text-[35px] '><CiSearch /></span>
                <span className='w-[28px]  h-[28px] top-[36px] left-[1093px] text-[35px]'> <Link href={'/checkouts'}> <CiHeart  /> </Link> </span>
                <span className='w-[28px]  h-[28px] top-[36px] left-[1093px] text-[35px]'> <Link href={'/cart'}> <MdOutlineShoppingCart  /> </Link> </span>

            </div>
        </div>
        {/* social media end */}

    </header>
  )
}

export default Navbar