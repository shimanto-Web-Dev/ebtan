import React from 'react'
import { MdShoppingCart } from "react-icons/md";



const CommonButton = () => {
  return (
    <>
    <button className='px-[35px] py-[13px] text-lg font-inter font-medium text-[#fff] leading-[145%] bg-[#E52525] rounded-[5px] flex gap-[18.07px] items-center mb-[42px]'><MdShoppingCart /> Add to cart</button>

    </>
  )
}

export default CommonButton