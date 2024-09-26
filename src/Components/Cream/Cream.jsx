import React from 'react'
import Commonhead from '../Commonhead/Commonhead'
import { IoMdArrowDropdown } from "react-icons/io";
import CommonButton from '../../Common/CommonButton';
import { TbCurrencyTaka } from "react-icons/tb";
import CountUp from 'react-countup';




const Cream = () => {
  return (
    <>
        <section className='mt-[110px] mb-[150px]'>
            <div className="container">
                <div className="row flex gap-[120px]">
                    <div className="img">
                        <img src="images/cream.png" alt="cream" />
                    </div>
                    <div className='mt-[39px]'>
                        <Commonhead commonHeadText={'All skins types'}/>
                        <h2 className='lg:w-[215px] text-[48px] font-PT-Serif font-normal text-[#333333] leading-[120%] mt-[30px] mb-[44px]'>Men’s day
                        cream</h2>
                        <div className='flex flex-col gap-[18px] mb-[37px]'>                            
                        <div className='flex items-center'>
                            <IoMdArrowDropdown className='text-[30px] text-[#333333] rounded-[1px]'/>
                            <p className='text-[22px] font-inter font-semibold text-[#333333]'>How to use</p>
                        </div>
                        <div className='flex items-center'>
                            <IoMdArrowDropdown className='text-[30px] text-[#333333] rounded-[1px]'/>
                            <p className='text-[22px] font-inter font-semibold text-[#333333]'>Ingredients</p>
                        </div>
                        <div className='flex items-center'>
                            <IoMdArrowDropdown className='text-[30px] text-[#333333] rounded-[1px]'/>
                            <p className='text-[22px] font-inter font-semibold text-[#333333]'>Benefits</p>
                        </div>
                        </div>
                        <div className='flex gap-[3PX]'>
                                    <TbCurrencyTaka className='text-[30.75px] font-PT-Serif font-normal text-brand-color leading-[145%] mt-2'/>
                                    <CountUp end={500} className='text-[30.75px] font-PT-Serif font-normal text-brand-color leading-[145%]'/>
                                </div>
                    </div>
                </div>
            </div>

        </section>
    </>
  )
}

export default Cream