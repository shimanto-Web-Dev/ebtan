import React, { useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";


const CommonAccro = ({accroText}) => {
    const [accro ,setAccro] = useState(false)
  return (
    <>
        <div onClick={()=>setAccro(!accro)}>
            <h2 className='flex items-center gap-[10px] text-[22px] font-inter font-semibold text-[#333333] leading-[130%]'><IoMdArrowDropdown className='text-3xl'/> {accroText}</h2>
        </div>
        {
            accro&&
        <div>
            <p className='w-full lg:w-[400px] text-lg font-PT-Serif font-normal text-[#333333] border-2 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto harum consectetur earum dicta hic fuga quia, quas sint? Sed, animi esse! Nobis suscipit provident maiores exercitationem eum expedita? Officia, porro!</p>
        </div>

        }
    </>
  )
}

export default CommonAccro