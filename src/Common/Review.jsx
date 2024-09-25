import React from 'react'
import CountUp from 'react-countup';



const Review = ({ReviewIcon , ReviewCount , reviewText , Plus}) => {
  return (
    <>
        <div>
            <div className='flex gap-[5px] items-center'>
            <div className='text-[29px] text-[#F2994A]'>
                {ReviewIcon}
            </div>
            <CountUp className='text-[32px] font-bold font-inter text-[#333333] leading-[145%]' end={ReviewCount} />
                <p className='text-[32px] font-bold font-inter text-[#333333] leading-[145%]'>{Plus}</p>
            </div>
            <p className='text-[18px] font-normal font-PT-Serif text-[#A0A79A] pl-[34px] leading-[145%]'>{reviewText}</p>
        </div>
    </>
  )
}

export default Review